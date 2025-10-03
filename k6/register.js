import http from 'k6/http'
import { check, sleep } from 'k6'
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js'

const registerData = JSON.parse(open('./fixtures/register.json'))

export const options = {
    stages: [
        { duration: '10s', target: 20 },
        { duration: '30s', target: 20 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1000'],
  }
}

export default () => {

    const url = `${__ENV.BASE_URL}/users/register`

    const randomUUID = uuidv4()
    const body = JSON.stringify({
        ...registerData,
        username: `USER_${randomUUID}`
    })

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const resposta = http.post(url, body, params)

    check(resposta, { 'status code é 201': (r) => r.status == 201 })
    
    sleep(1)
}