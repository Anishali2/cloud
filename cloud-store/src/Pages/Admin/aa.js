
import React from "react";
import {addProduct} from "../../Axios/Requests/Product";
import { Formik,Form } from 'formik';

export default function Example() {
const [image, setImage] = React.useState();
const [image2, setImage2] = React.useState({});
   const  onImageChange = (event) => {
    setImage2(event.target.files[0])    
    if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
       }

       const AddProductsDetails = (values) => {
         const form = new FormData();
         form.append('name', values.name);
        form.append('price', values.price);
        form.append('description', values.description);
        form.append('qty', values.qty);
        form.append('category', values.category);
        form.append('img', image2);
        console.log(image2)
        addProduct(form).then(res => {
          console.log("+ Response",res);
        }
        ).catch(err => {
          console.log("--- Response",err);
        }
        );
      }

    const initialValues = {
        name: '',
        price: '',
        qty: '',
        category: '',
        description: '',
        img:image2,
    }
  return (
    <>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
        </div>
      </div>
<Formik 
initialValues={initialValues}
enableReinitialize
onSubmit={(values) => {

  AddProductsDetails(values)
}
}
>
{({ values,
    handleChange,
    handleSubmit,
    handleBlur,}) => (
      <Form>
        <>
        </>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">

          
          <div className="md:col-span-1 ">
            <div className="px-4 sm:px-0">
            
                 <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div className="mt-1 md:ml-4 flex justify-center items-center  pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    {image ? <img src={image} alt="avatar" className=" w-[16rem] h-[20rem] rounded-2xl" />
                            :  <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                {/* <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              > */}
                                {/* <span>Upload a file</span> */}
                                <input type="file" onChange={(e) => onImageChange(e)}  size="60"/>
                                <p>Image</p>
                                {/* <input type="file" name="img" 
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.img}
                                 /> */}
                                 {/* <input id="img" name="img" type="file" onChange={(event) => {
                                  setImage(event.currentTarget.files[0]);
                                }} /> */}
                              {/* </label> */}
                             
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>}
                      
                     
                    </div>
                  </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {/* <form> */}
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Stock
                      </label>
                      <input
                        type="text"
                        name="qty"
                        id="qty"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.qty}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}
                      >
                        <option>Mens</option>
                        <option>Women</option>
                        <option>Kids</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Product Description
                      </label>
                      <textarea id="description" rows="4" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        placeholder="Leave a comment..."></textarea>

                    </div>
      </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      </Form>
)}
</Formik>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

 
    </>
  )
}

