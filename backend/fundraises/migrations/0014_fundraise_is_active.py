# Generated by Django 3.2.15 on 2022-09-05 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fundraises', '0013_alter_fundraise_image_alter_fundraisecategory_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='fundraise',
            name='is_active',
            field=models.BooleanField(blank=True, default=True, null=True, verbose_name='Активний'),
        ),
    ]
