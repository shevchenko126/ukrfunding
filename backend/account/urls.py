from django.urls import path,include
from rest_framework import routers
from account.api import CustomAuthData
from account.views import ChangePassword
from account.views import PasswordRecoveryRequest
from account.views import PasswordChangeRedirect


router = routers.DefaultRouter()
# router.register('auth', CustomAuthData.as_view(), 'account-api')
router.register('changepassword',ChangePassword.as_view(),'account-changepassword' )
router.register('changepassword/recoveryrequest', PasswordRecoveryRequest.as_view(), 'account-change-password-recoveryrequest' )
router.register('changepassword/passchange', PasswordChangeRedirect.as_view(), 'account-password-change-redirect' )

urlpatterns = [
    path('auth/',CustomAuthData.as_view(), name="auth"),
]
