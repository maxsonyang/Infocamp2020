import pandas as pd

'''
Utilities for loading data into graph views.
'''

'''
For specific modules
'''
def getTop5SummaryData() -> []:
    data = pd.read_csv("graphs/static/assets/top_5.csv")
    values = data.values.tolist()
    return [convertRowToDict(row) for row in values]

def convertRowToDict(row : []) -> {}:
    # Converts a row from the summary data to a charts.js friendly dict.
    return {
        'module' : row[0],
        'score' : round(row[1], 2),
        'total' : int(row[2]),
        'props' : [int(round(prop * 100, 0)) for prop in row[3:]],
        'counts' : [round(row[2] * prop) for prop in row[3:]]
    }

'''
For Class Overview
'''

def getStudentData() -> []:
    data = pd.read_csv("graphs/static/assets/student_summary_full.csv")
    values = data.values.tolist()
    return [convertStudentDataToDict(row) for row in values]

def convertStudentDataToDict(row : []) -> {}:
    # Converts a row from the summary data to a charts.js friendly dict.
    return {
        'email' : row[0],
        'score' : round(row[1], 2),
        'total' : int(row[2]),
        'props' : [int(round(prop * 100, 0)) for prop in row[3:]],
        'counts' : [round(row[2] * prop) for prop in row[3:]]
    }

def scoreVsQuestions(students : []):
    return [{'x' : student['total'], 'y' : student['score']} for student in students]

def averageScore(students : []):
    scores = [student['score'] for student in students]
    return round(sum(scores) / len(scores), 2)

def filterStudents(students : []):
    exclude = [
        'Not currently enrolled',
        'murtaza5152.ali@gmail.com',
        'samhitasen@berkeley.edu',
        'kellyann_ye@berkeley.edu',
        'yashen@berkeley.edu'
    ]
    return [student for student in students if student['email'] not in exclude]

def grandTotal(students : []):
    return sum([student['total'] for student in students])

def getPropCount(students : []):
    print(students)
    props = {
        'prop_0' : 0,
        'prop_1' : 0,
        'prop_2' : 0,
        'prop_3' : 0
    }
    for student in students:
        for i in range(4):
            props[f'prop_{i}'] += student['counts'][i]
    return list(props.values())

def getOverviewContext():
    student_data = filterStudents(getStudentData())
    return {
        'scatterData' : scoreVsQuestions(student_data),
        'avgScore' : averageScore(student_data),
        'prop_counts' : getPropCount(student_data),
        'grand_total' : grandTotal(student_data)
    }