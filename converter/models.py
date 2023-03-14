from django.db.models import Model
from ckeditor.fields import RichTextField
# Create your models here.

class Editor(Model):
    body = RichTextField(blank=True, null=True)
