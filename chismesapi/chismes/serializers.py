from rest_framework import serializers
from chismes.models import Chisme

class ChismeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chisme
        fields = ('id', 'titulo', 'descripcion')