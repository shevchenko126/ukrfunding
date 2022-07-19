from rest_framework import viewsets
from fundraises.models import Fundraise,FundraiseCategory
from fundraises.serializers import FundraisesSerializer,FundraisesCategorySerializer

class GetFundraises(viewsets.ModelViewSet):

    serializer_class = FundraisesSerializer
    queryset = Fundraise.objects.all()


class GetFundraisesCategory(viewsets.ModelViewSet):
    serializer_class = FundraisesCategorySerializer
    queryset = FundraiseCategory.objects.all()