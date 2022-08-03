from rest_framework import viewsets
from rest_framework.response import Response
from payments.models import Payment
from payments.serializers import PaymentSerializer
from rest_framework.authtoken.models import Token
from django.core.exceptions import PermissionDenied

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
