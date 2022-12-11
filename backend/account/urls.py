from django.urls import path,include
from rest_framework import routers
from account.api import CustomAuthData
from account.views import ChangePassword


router = routers.DefaultRouter()
# router.register('auth', CustomAuthData.as_view(), 'account-api')
router.register('changepassword',ChangePassword.as_view(),'account-changepassword' )

urlpatterns = [
    path('auth/',CustomAuthData.as_view(), name="auth"),
]
