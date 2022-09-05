from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from fundraises.models import Fundraise, FundraiseCategory
from fundraises.serializers import FundraiseSerializer, FundraiseCategorySerializer



class HasUserPermission(IsAuthenticatedOrReadOnly):

    def has_permission(self, request, view):
        if request.method in ["POST", "PATCH", "DELETE"]:
            token = request.headers['Authorization']
            token_obj = Token.objects.filter(key=token).first()
            if token_obj:
                user = token_obj.user
                print(user)
                return True
            else:
                return False
        else:
            return True


class GetFundraises(viewsets.ModelViewSet):

    serializer_class = FundraiseSerializer


    permission_classes = [HasUserPermission]

    #get_queryset
    def list(self, request):
        fundraises = Fundraise.objects.all()
        if request.GET.get('featured',0)=='1':
            fundraises = fundraises.filter(is_featured=True)
        serializer=FundraiseSerializer(fundraises, many=True)
        return Response({
            "success":1,
            "fundraises":serializer.data
        })

    def create(self, request):
        try:
            category=FundraiseCategory.objects.get(id=request.data['category_id'])
        except FundraiseCategory.DoesNotExist:
            category=None
            #TODO - чи може бути фандрейз без категорії? Мала б бути якась категорія по замовчуванюю?
        fundraise=Fundraise(
            title=request.data.get('title',None),
            description=request.data.get('description',None),
            image=request.data.get('image',None),
            needed=request.data.get('needed',None),
            category=category
        )
        fundraise.save()
        return Response({
            "success":1
        })

class GetFundraiseCategories(viewsets.ModelViewSet):
    serializer_class = FundraiseCategorySerializer
    queryset = FundraiseCategory.objects.all()
