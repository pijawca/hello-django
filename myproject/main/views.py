from django.shortcuts import render

def home(request):
    return render(request, 'main/home.html')

def shop(request):
    return render(request, 'main/shop.html')