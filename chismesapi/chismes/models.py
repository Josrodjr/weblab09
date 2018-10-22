from django.db import models

# Create your models here.

class Chisme(models.Model):
  titulo = models.CharField(max_length=75)
  descripcion = models.CharField(max_length=250)
  creacion = models.DateField(auto_now=True)