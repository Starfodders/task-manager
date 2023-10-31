from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0)

@ensure_csrf_cookie
def get_token(request):
    #just send a basic GET to the client when they land to generate the CSRF cookie
    return JsonResponse({"Message" :"Establishing connection to client for CSRF Token"})


def get_list(request):
    try:
        data = json.loads(request.body.decode('utf-8'))
        print(data)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON data within request body"}, status = 400)
    return HttpResponse('Hello!')