from django.urls import path
from .views import get_list, get_token, return_list

urlpatterns = [
    path('', get_token),
    path('new/', get_list),
    path('update/', return_list)
]
