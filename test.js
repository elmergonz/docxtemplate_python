import http from 'k6/http';

const simpleTestOptions = {
    vus: 100,
    duration: '30s',
    iterations: 1000,
};

const loadTestOptions = {
    // Key configurations for avg load test in this section
    stages: [
        { duration: '15s', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
        { duration: '30s', target: 100 }, // stay at 100 users for 10 minutes
        { duration: '15s', target: 0 }, // ramp-down to 0 users
    ],
};

const stressTestOptions = {
    // Key configurations for Stress in this section
    stages: [
        { duration: '10s', target: 200 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
        { duration: '35s', target: 200 }, // stay at higher 200 users for 10 minutes
        { duration: '5s', target: 0 }, // ramp-down to 0 users
    ],
};

// Puede escoger entre las tres opciones mas arriba o crear la suya https://k6.io/docs/test-types/load-test-types/
export const options = loadTestOptions;

export default function () {
    // Esta info se encuentra en el archivo demo.json
    const doc_id = 'DOC1';
    const data = {
        "var": "Hola distinguido",
        "items": [
            { "name": "Gustavo", "lastname": "Sanchez" },
            { "name": "Elena", "lastname": "Perez" },
            { "name": "Carlos", "lastname": "Amancio" }
        ]
    };

    http.post(`http://127.0.0.1:8000/compose?doc_id=${doc_id}`, JSON.stringify(data), {
        headers: {
            'Content-type': 'application/json'
        }
    }); // python
}
