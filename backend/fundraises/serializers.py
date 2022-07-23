from dataclasses import field
from rest_framework import serializers
from fundraises.models import Fundraise,FundraiseCategory

class FundraiseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fundraise
        fields = '__all__'

class FundraiseCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = FundraiseCategory
        fields = '__all__'
