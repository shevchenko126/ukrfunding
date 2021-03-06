# Generated by Django 4.0.5 on 2022-07-01 08:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fundraises', '0003_fundraise_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fundraise',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='fundraises.fundraisecategory', verbose_name='Категорія'),
        ),
        migrations.AlterField(
            model_name='fundraise',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Назва'),
        ),
    ]
