from rest_framework import viewsets
from fundraises.models import Fundraise
from fundraises.serializers import FundraisesSerializer

class GetFundraises(viewsets.ModelViewSet):

    serializer_class = FundraisesSerializer
    queryset = Fundraise.objects.all()