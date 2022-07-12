from dataclasses import field
from rest_framework import serializers
from fundraises.models import Fundraise

class FundraisesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fundraise
        fields = '__all__'
