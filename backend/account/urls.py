from account.api import CustomAuthData
from rest_framework import routers


router = routers.DefaultRouter()
router.register('api', CustomAuthData.as_view(),'account-api')

urlpatterns = router.urls