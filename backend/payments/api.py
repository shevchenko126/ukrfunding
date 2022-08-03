from rest_framework import viewsets
from rest_framework.response import Response
from payments.models import Payment
from payments.serializers import PaymentSerializer
from rest_framework.authtoken.models import Token
from django.core.exceptions import PermissionDenied
from django.contrib.auth.models import User

class GetPayments(viewsets.ModelViewSet):

    serializer_class = PaymentSerializer

    def list(self, request):
        token = self.request.headers.get('token')
        try:
            user = Token.objects.get(key=token).user
            queryset = Payment.objects.filter(user=user)
            serializer = PaymentSerializer(queryset, many=True)
            return Response({
                "success":1,
                "payments":serializer.data
            })
        except Token.DoesNotExist:
            raise PermissionDenied

    def create(self, request):
        if self.request.GET.get('amount') is not None:
            if self.request.GET.get('token') is None:
                return Response({
                    "success": 0,
                    "token": "Token not specified!",
                })
            if self.request.GET.get('fundraise_id') is None:
                return Response({
                    "success": 0,
                    "fundraise_id": "Fundraise id not specified!",
                })
            try:
                token = self.request.GET.get('token')
                amount = self.request.GET.get('amount')
                fundraise_id = self.request.GET.get('fundraise_id')
                user_id = Token.objects.get(key=token).user_id
                Payment.objects.create(user_id=user_id, fundraise_id=fundraise_id, amount=amount)
                return Response({
                    "success": 1,
                    "user_id": user_id, 
                    "fundraise_id":fundraise_id, 
                    "amount": amount
                })
            except Token.DoesNotExist:
                raise PermissionDenied
        else:
            return Response({
                    "success": 0,
                    "amount": "Amount not specified!"
                })