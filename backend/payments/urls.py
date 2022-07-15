from payments.api import GetPayments
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api', GetPayments,'payments-api')

urlpatterns = router.urls
