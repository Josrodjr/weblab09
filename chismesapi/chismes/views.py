from django.shortcuts import render
from chismes.models import Chisme
from chismes.serializers import ChismeSerializer
from rest_framework import generics

class ChismeListCreate(generics.ListCreateAPIView):
    queryset = Chisme.objects.all()
    serializer_class = ChismeSerializer