
import http from 'k6/http';
import { check } from 'k6';


export const options = {
    stages: [
        { duration: '5s', target: 10 },  //Aumenta linearmente de (0 para 10 usuários) ao longo de 5 segundos
        { duration: '5s', target: 10 },  // Mantém 10 usuários constantes por 5 segundos
        { duration: '5s', target: 2 },  //  Diminui linearmente para (10 para 2 usuários) ao longo dos próximos 5 segundos
        { duration: '5s', target: 2 },    // Mantém 2 usuários constantes por 5 segundos
        { duration: '5s', target: 10 },  //Aumenta linearmente de (2 para 10 usuários) ao longo de 5 segundos
        { duration: '5s', target: 10 },  // Mantém 10 usuários constantes por 5 segundos
    ],
    thresholds: {
        http_req_failed: ['rate < 0.01'], // Taxa de falhas de requisições HTTP deve ser menor que 1%
        http_req_duration: ['p(90) < 7000'] // 90% das requisições devem ser concluídas em menos de 7000ms
    }
}

//https://test-api.k6.io/user/register/
export default function () {
    
    const USER = `${Math.random()}@mail.com`
    const PASS = 'user123'
    const BASE_URL = 'https://test-api.k6.io';


    console.log(USER);

    // Executa uma requisição POST
    const res = http.post(`${BASE_URL}/user/register/`, {
        username: USER,
        first_name: 'firstName',
        last_name: 'lastName',
        email: USER,
        password: PASS
    });

    // Verifica a resposta
    check(res, {
        'sucesso ao registrar': (r) => r.status === 201 
    });

    
}
// Git Bash
//~/Desktop/Projetos/Performance_test_K6
//Para rodar-> k6 run k6_POC.js
//Para rodar-> K6_WEB_DASHBOARD=true k6 run k6_POC.js
//http://localhost:5665/