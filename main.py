from docxtpl import DocxTemplate
from fastapi import FastAPI
from uuid import uuid4
import os

if (not os.path.exists('out')):
    os.mkdir('out')

docs_id = {
    'DOC1': 'sample.docx',
    'DOC2': 'Contrato.docx',
}

app = FastAPI()

@app.post('/compose')
def compose(doc_id: str, data: dict[str, object]):

    doc = DocxTemplate(docs_id[doc_id])

    doc.render(data)

    fileName = f'{doc_id}-{uuid4()}'
    filePath = f'{os.getcwd()}\\out\\{fileName}.docx'

    doc.save(filePath)

    return {
        'filePath': filePath,
        'fileName': fileName
    }
