from django.urls import path
from .views import get_list, get_token

urlpatterns = [
    # path('set/', views.set_value, name='set_value'),
    # path('get/', views.get_value, name='get_value'),
    # path('new-task', views.get_list, name = "get_list")
    path('', get_token),
    path('new/', get_list)
]
