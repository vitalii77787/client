import axios from 'axios';

export const orderService={
    getAreas
}

function getAreas(){
    return axios.get('https://api.hh.ru/areas/5');
}