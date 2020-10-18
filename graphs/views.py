from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .utils import *

# Create your views here.

def overview(request):
    context = getOverviewContext()
    return render(request, 'graphs/overview.html', context)

def index(request):
    context = getTop5SummaryData()[0]
    return render(request, 'graphs/index.html', context)

def project_one(request):
    context = getTop5SummaryData()[1]
    return render(request, 'graphs/project_one.html', context)

def boards(request):
    context = getTop5SummaryData()[2]
    return render(request, 'graphs/boards.html', context)

def algorithms(request):
    context = getTop5SummaryData()[3]
    return render(request, 'graphs/algorithms.html', context)

def python_one(request):
    context = getTop5SummaryData()[4]
    return render(request, 'graphs/python_one.html', context)