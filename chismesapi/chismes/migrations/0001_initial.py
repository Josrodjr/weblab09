# Generated by Django 2.1.1 on 2018-10-22 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chisme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=75)),
                ('descripcion', models.CharField(max_length=250)),
                ('creacion', models.DateField(auto_now=True)),
            ],
        ),
    ]