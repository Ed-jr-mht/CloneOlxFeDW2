import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = '';

const apiFetchPost = async(endpoint, body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if (token){
            body.token = token;
        }
    }
    const res = await fetch(BASEAPI + endpoint,{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
    });
    const json = await res.json();
    if(json.notallowed){
        window.location.href = '/singin';
        return;
    }
    return json;
}

const OlxAPI = {
    login: async (email, password) => {
        //fazer consulta BE
        return {}
    }
}

export default () => OlxAPI