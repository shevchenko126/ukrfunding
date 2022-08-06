from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.core.exceptions import PermissionDenied

class CustomAuthData(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        if self.request.GET.get('username') is None:
            raise PermissionDenied()
        username = self.request.GET.get('username').lower()
        password = self.request.GET.get('password')
        try:
            user = authenticate(username=username, password=password)
            if user is not None:
                user_id = User.objects.get(username=username).id
                user_token_data = Token.objects.get(user_id=user_id)
                resp = {
                    "success": True,
                    "user_id": user_token_data.user_id,
                    "user_email": user.email,
                    "token": user_token_data.key,
                    "username": user.username,
                    "password": password,
                    # - тут зашифрований пароль, щось таке: 
                    # "pbkdf2_sha256$320000$OeUb1DRMSzHrhMJk0sbogh$KyqIDmOSsvyIpx3y14bB9cA6/cRqwtN8v1SfcpDf3Kc="
                    "password_encrypted": user.password
                }
            else:
                User.objects.create_user(str(username))
                change_user_data = User.objects.get(username=username)
                change_user_data.set_password(password)
                change_user_data.email = str(username)
                change_user_data.save()
                user_id = User.objects.get(username=username).id
                user_token_data = Token.objects.get(user_id=user_id)
                user_second_try = authenticate(
                    username=username, password=password)
                resp = {
                    "success": True,
                    "user_id": user_token_data.user_id,
                    "user_email": user_second_try.email,
                    "token": user_token_data.key,
                    "username": user_second_try.username,
                    "password": password,
                    # - тут зашифрований пароль, щось таке: 
                    # "pbkdf2_sha256$320000$OeUb1DRMSzHrhMJk0sbogh$KyqIDmOSsvyIpx3y14bB9cA6/cRqwtN8v1SfcpDf3Kc="
                    "password_encrypted": user_second_try.password}
        except Exception as e:
            print(e)
            resp = {
                "success": False,
                "token": "",
                "user_id": 0,
            }
        return Response(resp)

    def get(self, request, *args, **kwargs):
        if self.request.GET.get('username') is None:
            raise PermissionDenied()
        username = self.request.GET.get('username').lower()
        password = self.request.GET.get('password')
        try:
            user = authenticate(username=username, password=password)
            user_id = User.objects.filter(username=username).first().id
            token = Token.objects.filter(user_id=user_id).first().key
            resp = {
                "success": True,
                "user_id": user.id,
                "token": token,
                "username": user.username,
                "password": password
            }
        except:
            resp = {
                "success": False,
                "user_id": 0,
                "token": "",
            }

        return Response(resp)
