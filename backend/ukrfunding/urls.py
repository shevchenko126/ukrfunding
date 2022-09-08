"""ukrfunding URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path,include
from account.api import CustomAuthData

from account.views import ChangePassword
from account.views import PasswordRecoveryRequest
from account.views import PasswordChangeRedirect


urlpatterns = [
    path('admin/', admin.site.urls),
    path('fundraises/', include('fundraises.urls')),
    path('payments/', include('payments.urls')),
    path('accounts/', CustomAuthData.as_view()),
    path('changepassword/',ChangePassword.as_view()),
    path('changepassword/recoveryrequest', PasswordRecoveryRequest.as_view()),
    path('changepassword/passchange', PasswordChangeRedirect.as_view()),
    

]
