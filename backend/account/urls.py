from account.api import CustomAuthData
from rest_framework import routers
from account.views import ChangePassword



router = routers.DefaultRouter()
router.register('api', CustomAuthData.as_view(),'account-api')
router.register('changepassword',ChangePassword.as_view(),'account-changepassword' )

urlpatterns = router.urls