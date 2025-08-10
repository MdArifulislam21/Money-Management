from django.contrib import admin

# Register your models here.
admin.site.site_header = "Income and Expenses Admin"
admin.site.site_title = "Income and Expenses Admin Portal"
admin.site.index_title = "Welcome to the Income and Expenses Admin Portal"
from .models import Income, Expense, Budget

@admin.register(Income)
class IncomeAdmin(admin.ModelAdmin):
    list_display = ('source', 'amount', 'date', 'user', 'created_at', 'updated_at')
    search_fields = ('source',)
    list_filter = ('date', 'user')
    
    
    
@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ('category', 'amount', 'date', 'user', 'created_at', 'updated_at')
    search_fields = ('category',)
    list_filter = ('date', 'user')


@admin.register(Budget)
class BudgetAdmin(admin.ModelAdmin):
    list_display = ('category', 'amount', 'start_date', 'end_date', 'user', 'created_at', 'updated_at')
    search_fields = ('category',)
    list_filter = ('start_date', 'end_date', 'user')