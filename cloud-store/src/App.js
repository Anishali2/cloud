import React,{useEffect,useState} from "react";
import AdminSignup from "./Pages/Auth/AdminSignup";
import UserLogin from "./Pages/Auth/UserLogin";
import {
  HomePage,
  AddToCart,
  CheckoutPage,
  Error404,
  FAQ,
  ContactUs,
} from "./Pages/Store/index";
import {  Route, Routes ,useLocation} from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import UserSignup from "./Pages/Auth/UserSignup";
import Favourite from "./Pages/Store/Favourite";
import Categories from "./Pages/Store/Categories";
import Logout from "./Pages/User/Logout";
import {useDispatch , useSelector} from 'react-redux';
import axios from "axios";
import Cookies from 'js-cookie';
import Dashboard from "./Pages/Admin/Dashboard";
import Products from "./Pages/Store/Products";
import CheckoutDrawer from "./Pages/User/CheckoutDrawer";
import ProductDetails from "./Pages/Store/ProductDetails";
import PrivacyPolicy from "./Pages/Store/FooterPages/PrivacyPolicy";
import { Footer } from "./Components/Footer";
import TermsCondition from "./Pages/Store/FooterPages/TermsCondition";
import { getCart } from "./Axios/Requests/Cart";
const App = () => {
  const [header , setHeader] = useState();
  const [footer , setFooter] = useState();
  const location = useLocation();
  const path = location.pathname;
  const cart = useSelector(state => state.users.cartDrawer);
useEffect(() => {
  if(path.includes("login")|| path.includes("UserSignup") || path.includes("dmin")){
    setHeader(<div></div>);
    setFooter(<div></div>);
  }else {
    setHeader(<MainHeader/>)
    setFooter(<Footer/>)
  }

}, [path])


  const dispatch = useDispatch();
  const token = Cookies.get('token');

  useEffect(() => { 
    axios.get('http://localhost:4000/user/authenticate', {
    headers: {'Authorization': `token ${token}`}
    }).then((res) => {
      dispatch({type:'SET_CURRENT_USER',payload:{login_state:true,user:res.data}});
      console.log("User",res.data)
    }).catch((error) => {
      // console.log(error);
    });

  }, []);
  useEffect(() => {
    getCart().then(res => {
     dispatch({type:'CART_DRAWER',payload:{cartData:res.data,drawer:cart}})  

    }
    )
  }, [cart])


  return (
    <>
        {header}
        <Routes>
          <Route exact path="/privacy"          element={<PrivacyPolicy />}   />
          <Route exact path="/termscondition"   element={<TermsCondition />}  />
          <Route exact path="/admin"            element={<Dashboard />}       />
          <Route exact path="/header"           element={<MainHeader />}      />
          <Route exact path="/products"         element={<Products />}        />
          <Route exact path="/product/view/:id" element={<ProductDetails />}  />
          <Route exact path="/logoutalert"      element={<Logout />}        />
          <Route exact path="/login"            element={<UserLogin />}     />
          <Route exact path="/adminsignup"      element={<AdminSignup />}   />
          <Route exact path="/UserSignup"       element={<UserSignup />}    />
          <Route exact path="/"                 element={<HomePage />}      />
          <Route exact path="/addtocart"        element={<AddToCart />}     />
          <Route exact path="/checkout"         element={<CheckoutPage />}  />
          <Route exact path="/faq"              element={<FAQ />}           />
          <Route exact path="/footer"           element={<Footer />}        />
          <Route exact path="/favourite"        element={<Favourite />}     />
          <Route exact path="/contactUs"        element={<ContactUs />}     />
          <Route exact path="/categories/:id"   element={<Categories />}    />
          <Route path="*"                       element={<Error404 />}      />
        </Routes>
      <Logout/>
      <CheckoutDrawer/>
      {footer}
</>
    // </Provider>
  );
};

export default App;
