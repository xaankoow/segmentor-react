import http from './httpService'
import config from './config.json'

export const website = website => {
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/workspace`,website,headerRegisterUser);
}


export const keywords = website => {
    const headerRegisterUser = {
        "Accept": "application/json"
    }
    return http.post(`${config.xaankooApi}/api/v1/workspace`,website,headerRegisterUser);
}