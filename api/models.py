from django.db import models
from datetime import datetime
import pytz

IST = pytz.timezone('Asia/Kolkata')
datetime_ist = datetime.now(IST)
time = str(datetime_ist.strftime("%d " "%b" " | " "%I:" "%M"))



# Create your models here.
class Tweet(models.Model):
    tweet = models.CharField(max_length=200,null=True,blank=True)
    created_at = models.CharField(max_length=20,null=True, default=time)