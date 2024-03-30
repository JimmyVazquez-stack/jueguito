from django.urls import path
from .views import Jueguito

urlpatterns = [
    path('', Jueguito.as_view(), name='Jueguito'),
]
