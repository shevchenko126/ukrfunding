from django.contrib import admin
from django.urls import path
from fundraises.api import GetFundraises,GetFundraiseCategories
from rest_framework import routers


router = routers.DefaultRouter()
router.register('categories', GetFundraiseCategories,'fundraiseCategories')
router.register('', GetFundraises,'fundraises')

urlpatterns = router.urls
