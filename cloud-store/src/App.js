import React,{useEffect,useState} from "react";
import AdminSignup from "./Pages/Auth/AdminSignup";
import UserLogin from "./Pages/Auth/UserLogin";
import {
  HomePage,
  AddToCart,
  CheckoutPage,
  Error404,
  FAQ,
  Footer,
  ContactUs,
} from "./Pages/Store/index";
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import UserSignup from "./Pages/Auth/UserSignup";
import Favourite from "./Pages/Store/Favourite";
import Categories from "./Pages/Store/Categories";
import Logout from "./Pages/User/Logout";
import {useDispatch} from 'react-redux';
import axios from "axios";
import Cookies from 'js-cookie';
import Dashboard from "./Pages/Admin/Dashboard";
import Products from "./Pages/Store/Products";
import CheckoutDrawer from "./Pages/User/CheckoutDrawer";

const App = () => {

  const dispatch = useDispatch();

  // get cookie of token  
  const token = Cookies.get('token');
  console.log(token);

  useEffect(() => { 
    axios.get('http://localhost:4000/user/authenticate', {
    headers: {'Authorization': `token ${token}`}
}).then((res) => {
  dispatch({type:'SET_CURRENT_USER',payload:{login_state:true,user:res.data}});
}).catch((error) => {
  console.log(error);
})
}, [token]);
  return (
      <Router>
        <Routes>
          <Route exact path="/admin"          element={<Dashboard />}     />
          <Route exact path="/header"         element={<MainHeader />}    />
          <Route exact path="/products"       element={<Products />}    />
          <Route exact path="/logoutalert"    element={<Logout />}        />
          <Route exact path="/login"          element={<UserLogin />}     />
          <Route exact path="/adminsignup"    element={<AdminSignup />}   />
          <Route exact path="/UserSignup"     element={<UserSignup />}    />
          <Route exact path="/"               element={<HomePage />}      />
          <Route exact path="/addtocart"      element={<AddToCart />}     />
          <Route exact path="/checkout"       element={<CheckoutPage />}  />
          <Route exact path="/faq"            element={<FAQ />}           />
          <Route exact path="/footer"         element={<Footer />}        />
          <Route exact path="/favourite"      element={<Favourite />}     />
          <Route exact path="/contactUs"      element={<ContactUs />}     />
          <Route exact path="/categories/:id" element={<Categories />}    />
          <Route path="*"                     element={<Error404 />}      />
        </Routes>
      <Logout/>
      <CheckoutDrawer/>
      </Router>

    // </Provider>
  );
};

export default App;
