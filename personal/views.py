from django.shortcuts import render

def index(request):
	return render(request, 'personal/home.html')

def contact(request):
	return render(request, 'personal/contact.html',
		{'content': ['Email: mtoriello0725@gmail.com','Phone: 973-886-3888']})