
from datetime import datetime, timedelta
import calendar

def start_and_end_of_month():
    """
    Returns the start and end dates of the current month.
    The start date is set to the first day of the month at 00:00:00.
    The end date is set to the last day of the month at 23:59:59.
    """
    # Get the current date
    today = datetime.now()

    # Calculate the start date of the current month
    start_of_month = today.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

    # Calculate the end date of the current month
    last_day_of_month = calendar.monthrange(today.year, today.month)[1]
    end_of_month = today.replace(day=last_day_of_month, hour=23, minute=59, second=59, microsecond=999999)

    return start_of_month, end_of_month

from .models import Income, Expense, Budget
def get_monthly_income_expenses(user):
    """
    Returns the total income and expenses for the current month for a given user.
    """
    start_of_month, end_of_month = start_and_end_of_month()

    # Filter incomes and expenses for the user within the current month
    incomes = Income.objects.filter(user=user, date__range=(start_of_month, end_of_month))
    expenses = Expense.objects.filter(user=user, date__range=(start_of_month, end_of_month))

    total_income = sum(income.amount for income in incomes)
    total_expense = sum(expense.amount for expense in expenses)

    return {
        'total_income': total_income,
        'total_expense': total_expense,
        'start_date': start_of_month,
        'end_date': end_of_month
    }

def start_and_end_of_year():
    """
    Returns the start and end dates of the current year.
    The start date is set to January 1st at 00:00:00.
    The end date is set to December 31st at 23:59:59.
    """
    today = datetime.now()
    start_of_year = today.replace(month=1, day=1, hour=0, minute=0, second=0, microsecond=0)
    end_of_year = today.replace(month=12, day=31, hour=23, minute=59, second=59, microsecond=999999)

    return start_of_year, end_of_year   