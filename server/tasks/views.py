from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0)

@ensure_csrf_cookie
def get_token(request):
    # just send a basic GET to the client when they land to generate the CSRF cookie
    return JsonResponse({"Message" :"Establishing connection to client for CSRF Token"})

def get_list(request):
    try:
        data = json.loads(request.body.decode('utf-8'))

        # create increments for post id, set a key for redis
        post_num = r.incr('post_count')
        post_key = f"Post:{post_num}"
        
        # data is in dict format, convert to hashes
        r.hset(post_key, "title", data['title'])
        # convert array of strings into JSON string
        tasks_string = json.dumps(data['content'])
        r.hset(post_key, "tasks", tasks_string)

        # set that keeps all post_keys for later reference
        r.sadd('all_post_keys', post_key)

    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON data within request body"}, status = 400)
    return JsonResponse({"success": "Post saved successfully!"})

def return_list(request):
    all_posts = []

    # retrieve all keys
    post_keys = r.smembers('all_post_keys')
    for post_key_byte in post_keys:
        post_key = post_key_byte.decode('utf-8')
        post_data = r.hgetall(post_key)
        
        #grab each hashed list dict based on their ID, also parse the tasks array for the client
        converted_data = {k.decode('utf-8'): v.decode('utf-8') for k, v in post_data.items()}
        converted_data['tasks'] = json.loads(converted_data['tasks'])
        converted_data['id'] = post_key[-1]
        
        all_posts.append(converted_data)

    return JsonResponse(all_posts, safe=False)
