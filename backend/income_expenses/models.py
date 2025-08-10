from django.db import models

# Create your models here.


class Income(models.Model):
    source = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='incomes')

    def __str__(self):
        return f"{self.source} - {self.amount} on {self.date}"

    class Meta:
        ordering = ['-id']


class Expense(models.Model):
    category = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='expenses')

    def __str__(self):
        return f"{self.category} - {self.amount} on {self.date}"
    
    class Meta:
        ordering = ['-date']
    

class Budget(models.Model):
    category = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE, related_name='budgets')

    def __str__(self):
        return f"{self.category} - {self.amount} from {self.start_date} to {self.end_date}"
    
    class Meta:
        ordering = ['-id']