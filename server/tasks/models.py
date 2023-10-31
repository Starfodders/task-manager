from django.db import models

class List(models.Model):
    title: models.CharField(max_length = 200, default = "")
    tasks: models.JSONField()
    created_at: models.DateTimeField(auto_now_add=True)