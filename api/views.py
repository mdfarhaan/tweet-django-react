from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.views import APIView
from .serializers import TweetSerializer
from .models import Tweet

# UniTweet API
class tweetPost(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class tweetView(APIView):
    def get(self,request):
        queryset = Tweet.objects.all()
        serializer = TweetSerializer(queryset, many=True)
        return Response(serializer.data)

class tweetdel(APIView):
    def get(self,request,id):
        try:
            queryset = Tweet.objects.get(id=id)
            queryset.delete()
            return Response({"Message": "Deleted Successfully"}, status=status.HTTP_200_OK)
        except:
            return Response({"Bad Request":"Id not found!!"}, status=status.HTTP_400_BAD_REQUEST)




    
