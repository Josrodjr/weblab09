from django.urls import path
from . import views

urlpatterns = [
    path('api/chismes/', views.ChismeListCreate.as_view() ),
]