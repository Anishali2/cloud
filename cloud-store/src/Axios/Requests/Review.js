
import {axiosClient} from '../api';

export function getReview(){
    return axiosClient.get('/product/get');
}
export function addReview(data,value){

    const reviewObj = {
        name: data.name,
        email: data.email,
        description: value,
    }
    console.log(reviewObj);
    return axiosClient.post('/review/add', JSON.stringify(reviewObj));
}
