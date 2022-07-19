from rest_framework import viewsets
from rest_framework.response import Response
from fundraises.models import Fundraise, FundraiseCategory
from fundraises.serializers import FundraisesSerializer

class GetFundraises(viewsets.ModelViewSet):

    serializer_class = FundraisesSerializer
    queryset = Fundraise.objects.all()

    def create(self, request):

        try:
            fundraise=Fundraise(
                title=request.data.get('title',None),
                description=request.data.get('description',None),
                image=request.data.get('image',None),
                needed=request.data.get('needed',None),
                category=FundraiseCategory.objects.get(id=request.data['category_id'])
            )
        except FundraiseCategory.DoesNotExist:
            return Response({
                "success":0,
                "msg":"FundraiseCategory with id = {} does not exist".format(request.data['category_id'])
            })

        fundraise.save()

        return Response({
            "success":1
        })
