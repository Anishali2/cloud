
import {axiosClient} from '../api';


export function getProduct(){
    return axiosClient.get('/product/get');
}
export function addProduct(data){
    return axiosClient.post('/product/add', JSON.stringify(data));
}