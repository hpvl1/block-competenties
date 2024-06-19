import request from './request.js';
import { GET_USER_PLAN } from './api.js';


export function getUserPlan() {
    return request({
        method: 'get',
        url: GET_USER_PLAN,
    }).then((resp) => {
        return resp.result;
    });
}