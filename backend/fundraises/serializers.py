from dataclasses import field
from rest_framework import serializers
from fundraises.models import Fundraise,FundraiseCategory

class FundraisesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fundraise
        fields = '__all__'

class FundraisesCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = FundraiseCategory
        fields = '__all__'