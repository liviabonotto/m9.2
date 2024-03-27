import http from 'k6/http';
import { sleep, group } from 'k6';
//import { UploadDto } from '../../src/research/dto/upload.dto';

export const options = {
    vus: 10000, // 10 virtual users
    duration: '15m', // Test duration of 1 minute
};

export default function () {
    const researchId = 'research-id-123';
    const peopleResearchId = 'people-research-id-456';
    const vote = '8';

    group('Upload Research', () => {
        uploadResearch();
    });

    group('Get Research Status', () => {
        getResearchStatus(researchId);
    });

    group('Delete Research', () => {
        deleteResearch(researchId);
    });

    group('Update Research', () => {
        updateResearch(researchId);
    });

    group('Vote Research', () => {
        voteResearch(peopleResearchId, vote);
    });

    group('Get All Researches', () => {
        getAllResearches();
    });

    group('Distribute Research', () => {
        distributeResearch(researchId);
    });

    sleep(1); // Add a small delay between requests
}

function uploadResearch() {
    const url = 'http://localhost:3000/research/upload';

    // Instead of specifying the type here, just declare the object.
    const payload = {
        title: 'Pesquisa de Satisfação',
        author: 'John Doe',
        product: 'Produto X',
    };

    const filePath = 'backend/teste.csv';

    const params = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    const formData = {
        file: http.file(filePath, 'file.csv', 'text/csv'),
        uploadDto: JSON.stringify(payload),
    };

    const res = http.post(url, formData, params);
    console.log('Upload Research Response:', res.json());
}

function getResearchStatus(id) {
    const url = `http://localhost:3000/research/status/${id}`;
    const res = http.get(url);
    console.log('Get Research Status Response:', res.json());
}

function deleteResearch(id) {
    const url = `http://localhost:3000/research/${id}`;
    const res = http.del(url);
    console.log('Delete Research Response:', res.json());
}

function updateResearch(id) {
    const url = `http://localhost:3000/research/${id}`;

    // Removed the TypeScript type annotation from the payload declaration.
    const payload = {
        title: 'Pesquisa de Satisfação Atualizada',
        author: 'John Doe',
        product: 'Produto Y',
    };

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.put(url, JSON.stringify(payload), params);
    console.log('Update Research Response:', res.json());
}

function voteResearch(id, vote) {
    const url = `http://localhost:3000/research/vote/${id}/${vote}`;
    const res = http.get(url);

    // Simplified the handling of the response to avoid assuming a TypeScript type.
    console.log('Vote Research Response:', res.json());
}

function getAllResearches() {
    const url = 'http://localhost:3000/research/all';
    const res = http.get(url);
    console.log('Get All Researches Response:', res.json());
}

function distributeResearch(id) {
    const url = `http://localhost:3000/research/distribute/${id}`;
    const res = http.post(url);
    console.log('Distribute Research Response:', res.json());
}