from django.contrib import admin
from django.urls import path
from fundraises.api import GetFundraises,GetFundraiseCategories
from rest_framework import routers


router = routers.DefaultRouter()
router.register('api', GetFundraises,'fundraises')
router.register('categories', GetFundraiseCategories,'fundraiseCategories')

urlpatterns = router.urls
