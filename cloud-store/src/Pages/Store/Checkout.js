import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { XIcon } from '@heroicons/react/outline'
import { deleteCart, updateCart } from "../../Axios/Requests/Cart";
import { Formik,Form,Field } from "formik";
import { checkoutSchema } from "../../Components/Validation/CheckoutSchema";
import { CheckoutInitialValues } from "../../assets/constants";
export default function Checkout() {
  const userObj = useSelector(state => state.users.cartData);
   const [cartProducts, setCartProducts] = useState(userObj);
   const inputValues = "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  const dispatch = useDispatch();
  
  const DeleteProduct = (id) => {
    deleteCart(id).then ((res) => {
      dispatch({type:"CART_DRAWER",payload:{drawer:false,cartData:res.data}})
      const deletedCart = res.data.filter(item => item.userId === userObj._id)
      setCartProducts(res.data)
      console.log("deletedCart", deletedCart)
    
     
    }
    ).catch((err) => {
      console.log("Error",err);
    }
    );
    
  };

    useEffect (() => {
      if(cartProducts.length === 0){
      setCartProducts(userObj)
      }
    }
    ,[userObj])


  const updatedQuantity = (id,data) => {
     updateCart(id,data).then ((res) => {
      // const deletedCart = res.data.filter(item => item.userId === userObj._id)

      setCartProducts(res.data)
      
    }
    ).catch((err) => {
      console.log("Error",err);
    }
    );

  }
 

    return (
      <>
                    <Formik
                validationSchema={checkoutSchema}
                initialValues={CheckoutInitialValues}
                onSubmit={(values) => {
                  console.log(values);
                }}
                >
                {({ values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset }) => (
                      <Form>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
       
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            
            <div className="mt-5 md:mt-0 md:col-span-2">
              
                
                <div className="shadow overflow-hidden sm:rounded-md ">
                  <div className="px-4 py-5 bg-white sm:p-6 max-w-xl mx-auto">

                    <div className="grid grid-cols-6 gap-6">
                        
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          placeholder="Enter your email"
                          id="email-address"
                          autoComplete="email"
                          className={inputValues}
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Name On Card
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className={inputValues}
                        />
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Card Nummber
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className={inputValues}
                        />
                      </div>
  
                      <div className="sm:col-span-4">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Expiration Date (MM/YY)
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className={inputValues}
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          CVC
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className={inputValues}
                        />
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className={inputValues}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className={inputValues}
                        ></input>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className={inputValues}
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className={inputValues}
                        />
                      </div>
                    </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Checkout
                    </button>
                  </div>
                  </div>
                </div>
            
            </div>
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Products</h3>
                <div className="mt-8">
                        <div className="flow-root max-h-60">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartProducts.map((product,index) => (
                              <li key={product.productId} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={`http://localhost:4000/${product.productImage}`}
                                    // alt={product.productName}
                                    className="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#"> {product.productName} </a>
                                      </h3>
                                      <XIcon className="block h-6 w-6 hover:text-red-500 cursor-pointer" aria-hidden="true" onClick={() => DeleteProduct(product._id)} />
                                    </div>
                                    <a href="#"> ${product.productPrice} </a>

                                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty</p>

                                    <div className="flex ">
                                       
                                      <button
                                      onClick={() => updatedQuantity(product._id,0)}
                                      type="button"
                                      className="font-medium px-2.5 border -mb-3 rounded-lg p-2 bg-white hover:bg-[#cfcfcf]"
                                      // onClick={() => setUndo()}
                                      >
                                        -
                                      </button>
                                      <p className="pt-2 px-3">{product.productQty}</p>
                                      <button
                                      onClick={() => updatedQuantity(product._id,1)}
                                      type="button"
                                      className="font-medium border px-2 -mb-3 rounded-lg p-2 bg-white hover:bg-[#cfcfcf]"
                                      // onClick={() => setUndo()}
                                      >
                                        +
                                      </button>
                                      
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
              </div>
            </div>
          </div>
        </div>
  
        
      
        </div>
    
                                        </Form>
                    
                                        )}
                                        </Formik>
      </>
    )
  }









































  // const obj = {
  //   productId : res.data.productId,
  //   productName : res.data.productName,
  //   productPrice : res.data.productPrice,
  //   productQty : res.data.productQty,
  //   productImage : res.data.productImage,
  //   userId : res.data.userId,
  //   userEmail : res.data.userEmail,

  // }