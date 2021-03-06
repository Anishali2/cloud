
import {axiosClient} from '../api';


export function getCart(){
    return axiosClient.get('/cart/get');
}
export const addCart = async (data,user,qty) =>  {
    
    const obj = {
        userId:        user._id,
        userEmail:     user.email,
        productId:     data._id,
        productName:   data.name,
        productImage:   data.img,
        productPrice:   data.price,
        productQty:     qty,
    }
    return await axiosClient.post('/cart/add', JSON.stringify(obj));
}