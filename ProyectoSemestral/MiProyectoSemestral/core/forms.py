from .models import Vehiculo
from django.forms import ModelForm
from django import forms
from .models import Mecanico

class VehiculoForm(ModelForm):
    class Meta:
        model = Vehiculo
        fields = ['patente','marca','modelo','categoria']

class MecanicoForm(ModelForm):
    class Meta:
        model = Mecanico
        fields = ['rut','nombreapellido','fechareparacion','imagen','diagnostico']
