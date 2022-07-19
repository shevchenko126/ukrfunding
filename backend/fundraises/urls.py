from django.contrib import admin
from django.urls import path
from fundraises.api import GetFundraises,GetFundraisesCategory
from rest_framework import routers


router = routers.DefaultRouter()
router.register('api', GetFundraises,'fundraises-api')
router.register('apiCategory', GetFundraisesCategory,'fundraisesCategory-api')

urlpatterns = router.urls

