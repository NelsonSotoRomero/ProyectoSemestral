# Generated by Django 3.2.3 on 2021-06-24 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mecanico',
            fields=[
                ('rut', models.CharField(max_length=10, primary_key=True, serialize=False, verbose_name='RUT Mecanico')),
                ('nombreapellido', models.CharField(max_length=50, verbose_name='Nombre Mecanico')),
                ('fechareparacion', models.CharField(max_length=15, verbose_name='Fecha de reparacion')),
                ('imagen', models.ImageField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]