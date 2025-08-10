from rest_framework import routers
from .views import IncomeViewSet, ExpenseViewSet, BudgetViewSet, this_month_income_expensez_view
router = routers.DefaultRouter()
router.register(r'incomes', IncomeViewSet, basename='income')
router.register(r'expenses', ExpenseViewSet, basename='expense')
router.register(r'budgets', BudgetViewSet, basename='budget')
from django.urls import path, include

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('', include(router.urls)),
    path('month-income-expensez/', this_month_income_expensez_view, name='this_month_income_expensez'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]   