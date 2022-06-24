import HomePage from "./HomePage";
import AddToCart from "./AddToCart";
import CheckoutPage from "./CheckoutPage";  
import Error404 from "./Error404";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import MainHeader from "../../Components/MainHeader";
import UserSignup from "../Auth/UserSignup";
import AdminSignup from "../Auth/AdminSignup";
import UserLogin from "../Auth/UserLogin";
import Favourite from "./Favourite";
import Categories from "./Categories";
import Dashboard from "../Admin/Dashboard";
import Products from "./Products";
import CheckoutDrawer from "../User/CheckoutDrawer";
import ProductDetails from "./ProductDetails";
import PrivacyPolicy from "./FooterPages/PrivacyPolicy";
import { Footer } from "../../Components/Footer";
import TermsCondition from "./FooterPages/TermsCondition";
import Logout from '../User/Logout'
import SearchBox from "../User/SearchBox";

export const Routes = {
    Home:HomePage,
    AddToCart:AddToCart,
    CheckoutPage:CheckoutPage,
    Error404:Error404,
    FAQ:FAQ,
    Footer:Footer,
    ContactUs:ContactUs,
    MainHeader:MainHeader,
    UserSignup:UserSignup,
    Favourite:Favourite,
    Categories:Categories,
    Dashboard:Dashboard,
    Products:Products,
    CheckoutDrawer:CheckoutDrawer,
    ProductDetails:ProductDetails,
    PrivacyPolicy:PrivacyPolicy,
    TermsCondition:TermsCondition,
    Logout:Logout,
    AdminSignup:AdminSignup,
    UserLogin:UserLogin,
    SearchBox:SearchBox
    
}
