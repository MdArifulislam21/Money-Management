from rest_framework import serializers
from .models import Income, Expense, Budget



class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at', 'user')

    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['user'] = request.user
        return super().create(validated_data)   




class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at', 'user')   
          
    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['user'] = request.user
        return super().create(validated_data)   


class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at', 'user')     
    
    def create(self, validated_data):
        request = self.context.get('request')
        validated_data['user'] = request.user
        return super().create(validated_data)   



class IncomeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ('id', 'source', 'amount', 'date')
        read_only_fields = ('id', 'source', 'amount', 'date')  



class ExpenseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ('id', 'category', 'amount', 'date')
        read_only_fields = ('id', 'source', 'amount', 'date')  


    