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


    def update(self, instance, validated_data):
        request = self.context.get('request')
        if request.user != instance.user:
            raise serializers.ValidationError("You do not have permission to update this budget.")
        validated_data['user'] = request.user
        instance.amount = validated_data.get('amount', instance.amount)
        instance.category = validated_data.get('category', instance.category)
        instance.start_date = validated_data.get('start_date', instance.start_date)
        instance.end_date = validated_data.get('end_date', instance.end_date)
        instance.save()
        return instance 



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


    