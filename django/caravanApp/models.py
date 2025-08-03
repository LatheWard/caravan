from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    display_name = models.CharField(max_length=100, blank=True)

class Board(models.Model):
    title = models.TextField(max_length=75)
    list_date = models.DateTimeField(auto_created=True)
    description = models.TextField(max_length=250)
    price = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='boards')

