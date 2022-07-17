from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from django.contrib.auth import authenticate

class CustomAuthData(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        user_data = {
            "username": self.request.GET.get('username').lower(),
            "password": self.request.GET.get('password')
        }
        try:
            user = authenticate(**user_data)
            user_id = User.objects.filter(username=user_data['username']).first().id
            resp = {
                "success": True,
                "user_id": user_id,
                "token": Token.objects.filter(user_id=user_id).first().key,
                "username": user_data['username'],
                "password": user_data['password']
            }
        except:
            resp = {
                "success": False,
                "token": "",
                "user_id": 0,
            }
        return Response(resp)
    
    def get(self, request, *args, **kwargs):
        username = self.request.GET.get('username').lower()
        password = self.request.GET.get('password')
        try:
            userauth = authenticate(username=username, password=password)
            user_id = User.objects.filter(username=username).first().id
            token = Token.objects.filter(user_id=user_id).first().key
        except:
            return Response({
                "success": False,
                "user_id": 0,
                "token": "",
            })

        return Response({
            "success": True,
            "user_id": user_id,
            "token": token,
            "username": username,
            "password": password
        })