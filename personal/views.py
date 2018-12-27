from django.shortcuts import render

def index(request):
	return render(request, 'personal/home.html')

def about(request):
	return render(request, 'personal/about.html',
		{'content': ['If you would like to contact me, please email','mtoriello0725@gmail.com']})