from lib2to3.pgen2 import token
from urllib import request
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from django.views import View
from rest_framework.authtoken.models import Token


# Create your views here.


class ChangePassword(View):

    def get(self,request):
        token = request.headers.get('token', 'u')
        user = Token.objects.get(key=token).user
        new_password= request.headers.get("new-password",'u')
        new_password_repeat=request.headers.get("new-password-repeat",'ul')
        
        if new_password==new_password_repeat:
            user.set_password(new_password)
            user.save()
        return HttpResponse()  