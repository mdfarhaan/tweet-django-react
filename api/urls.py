from django.urls import path
from . import views

urlpatterns = [
    path('post/', views.tweetPost.as_view()),
    path('view/', views.tweetView.as_view()),
    path('del/<int:id>', views.tweetdel.as_view()),
]
