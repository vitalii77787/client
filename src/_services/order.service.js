import axios from 'axios';

export const orderService={
    getAreas,
    postOrder
}

function getAreas(){
    return axios.get('https://api.hh.ru/areas/5');
}

function postOrder(order){
    alert(order.userName);
    return axios.post('http://localhost:49274/api/order/getorder', order);
}