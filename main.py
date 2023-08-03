from docxtpl import DocxTemplate
from fastapi import FastAPI
from uuid import uuid4
import os

if (not os.path.exists('out')):
    os.mkdir('out')

app = FastAPI()

@app.get('/compose')
def compose():

    doc = DocxTemplate("sample.docx")
    context = { 'var': 'Hola distinguido' }

    doc.render(context)

    fileName = f'output-{uuid4()}'
    filePath = f'{os.getcwd()}\\out\\{fileName}.docx'

    doc.save(filePath)

    return {
        'filePath': filePath,
        'fileName': fileName
    }
