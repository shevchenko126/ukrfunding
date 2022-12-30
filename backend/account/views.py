from lib2to3.pgen2 import token
from urllib import request
from django.contrib.auth.models import User
from django.http import HttpResponse, JsonResponse
from django.views import View
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.exceptions import PermissionDenied
from django.utils import timezone
import base64
from django.core.mail import send_mail
from django.shortcuts import redirect

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

class PasswordRecoveryRequest(APIView):

    def get(self, request, *args, **kwargs):
        user_email = self.request.GET.get('email')
        try:
            account_record = User.objects.get(email=user_email)
            data = str(account_record.last_login) + \
                str(account_record.email) + str(account_record.id)
            data_bytes = data.encode('ascii')
            data_base64_bytes = base64.b64encode(data_bytes)
            data_base64_message = data_base64_bytes.decode('ascii')
            mail_link = f'{request.scheme}://{request.get_host()}?email={user_email}&token={str(data_base64_message)}'
        except Exception as e:            
            resp = {
                "success": False,
                "e-mail": "There is no user with this email!",
            }

        try:
            send_mail(
                'Запит на зміну пароля від ukrfunding',
                'Ви подали запит на зміну пароля від вашого аккаунту на ukrfunding. Щоб встановити новий пароль перейдіть за посиланням:' +
                str(mail_link) +
                '. Якщо це були не ви - просто проігноруйте данний лист.',
                'ukrfunding@example.com',
                [user_email],
                fail_silently=False,
            )
            resp = {
                "success": True,
                "user_email": user_email,
            }
        except Exception as e:
            resp = {
                "success": False,
                "e-mail": "Email not sent!",
            }
        return Response(resp)

class PasswordChangeRedirect(APIView):

    def get(self, request, *args, **kwargs):
        user_email = self.request.GET.get('email')
        token = self.request.GET.get('token')
        try:
            account_record = User.objects.get(email=user_email)
        except Exception as e:
            resp = {
                "success": False,
                "e-mail": "There is no user with this email!",
            }
            raise e
        data = str(account_record.last_login) + \
            str(account_record.email) + str(account_record.id)
        data_bytes = data.encode('ascii')
        data_base64_bytes = base64.b64encode(data_bytes)
        data_base64_message = data_base64_bytes.decode('ascii')
        if data_base64_message == token:
            return redirect(f'{request.scheme}://{request.get_host()}/changepassword/')
        else:
            resp = {
                "success": False,
                "e-mail": "Redirect error!",
            }
        return Response(resp)