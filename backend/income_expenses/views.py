from django.shortcuts import render
from .models import Income, Expense, Budget
from .serializers import IncomeSerializer, ExpenseSerializer, BudgetSerializer, IncomeListSerializer, ExpenseListSerializer
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from django.db.models import Sum
from django.utils.timezone import datetime #important if using timezones


from .utils import start_and_end_of_month
# Create your views here.

# class IncomeV

class IncomeViewSet(viewsets.ModelViewSet):
    page_size = 10
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'], url_path='list')
    def list_incomes(self, request):
        incomes = self.get_queryset()
        serializer = IncomeListSerializer(incomes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    
    

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'], url_path='list')
    def list_expenses(self, request):
        expenses = self.get_queryset()
        serializer = ExpenseListSerializer(expenses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=False, methods=['get'], url_path='list')
    def list_budgets(self, request):
        budgets = self.get_queryset()
        serializer = BudgetSerializer(budgets, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)





@api_view(['GET', 'POST'])
@login_required
def this_month_income_expensez_view(request):
    # today = datetime.today()
    user = request.user
    start_date, end_date = start_and_end_of_month()
    incomes = Income.objects.filter(user=user, date__gte=start_date, date__lte=end_date).values('date').annotate(
        amount=Sum('amount'))
    
    expenses = Expense.objects.filter(user=user, date__gte=start_date, date__lte=end_date).values('date').annotate(
        amount=Sum('amount'))
    # print(incomes, expenses)
    total_income = sum(income.get('amount', 0) for income in incomes)
    total_expense = sum(expense.get('amount', 0) for expense in expenses)
    
    try:
        budget = Budget.objects.filter(user=user, start_date=start_date, end_date=end_date).first().amount
    except AttributeError:
        budget = 0
    return Response({"incomes":incomes, "expenses":expenses, 'total_income': total_income, "total_expense": total_expense,"budget": budget}, status=status.HTTP_200_OK)