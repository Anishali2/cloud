import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Formik} from "formik";
import { addProduct } from '../../../Axios/Requests/Product';
 const PrivacyPolicy = () => {


    const createUser = useCallback(async (body) => {
        try {
            const formData = new FormData();
            formData.append('name', body.name);
            formData.append('price', body.price);
            formData.append('qty', body.qty);
            formData.append('description', body.description);
            formData.append('category', body.category);
            formData.append('img', body.img);

           
            // use simple fetch method to send data to backend
            const fetched = await fetch(`/product/add`, {
                method: 'POST',
                body: formData,
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // }
            });
            const data = await fetched.json();
            console.log(data);

        } catch (e) {console.log(e)}
    }, []);

    const handleCreate = (values, {resetForm}) => {
        console.log(values);
        createUser(values);
        
        // resetForm({});
    };

    return (
        <div className="wrapper">
            <div className="row">
                <div className="column small-12 text-center color-white mb_45">
                    <div className="custom-headline text text-48 font-bold">
                        <h1>
                            Crate user
                        </h1>
                    </div>
                </div>
            </div>

            
                <Formik
                    enableReinitialize
                    initialValues={{
                      name:'',
                      img:'',
                      price:'',
                      qty:'3',
                      category:'kids',
                      description:'no description',
                    }}
                    onSubmit={handleCreate}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          setFieldValue,
                          resetForm
                      }) => (
                        <form onSubmit={handleSubmit} className="row align-center">
                            <div className="column small-12 large-7">
                                <div className="form-item flex-container align-middle mb_20">
                                    <label className="text text-14 font-semibold font-uppercase text-right small-4">
                                        Photos
                                    </label>
                                    <input id="img" type="file" name="img" className="file_input"
                                           onChange={(event) => {
                                               setFieldValue("img", event.currentTarget.files[0]);
                                           }} />
                                </div>
                            </div>

                            <div className="column small-12 large-7">
                                <div className="form-item flex-container align-middle mb_20">
                                    <label className="text text-14 font-semibold font-uppercase text-right small-4">
                                        Name
                                    </label>
                                    <input
                                        className="text text-17 "
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                    />
                                </div>
                            </div>
                            <div className="column small-12 large-7">
                                <div className="form-item flex-container align-middle mb_20">
                                    <label className="text text-14 font-semibold font-uppercase text-right small-4">
                                    price
                                    </label>
                                    <input
                                        className="text text-17"
                                        type="text"
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                    />
                                </div>
                            </div>

                            <div className="column small-12 mt_20">
                                <div className="btn_group flex-container flex-wrap align-middle align-center">
                                    <button className="btn-lg radius-8" theme="blue"
                                             type="submit"
                                    >Submit</button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
        </div>
    )
};
export default PrivacyPolicy;