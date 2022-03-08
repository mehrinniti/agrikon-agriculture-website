import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomePage from './Components/Pages/WellcomePage/Welcomepage/WelcomePage';
import Home from './Components/Pages/Home-Page/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import About from './Components/Pages/About-Page/About/About';
import Agri_Information from './Components/Pages/Agri-Information-Page/Agri-Information/Agri_Information';
import Our_Farmers from './Components/Pages/Our-Farmers-Page/Our-Farmers/Our_Farmers';
import Explore_All_Products from './Components/Pages/Explore-All-Products-Page/Explore-All-Products/Explore_All_Products';
import Dashboard from './Components/Pages/Dashboard-Page/Dashboard/Dashboard';
import Contact from './Components/Pages/Contact-Page/Contact/Contact';
import NotFound from './Components/Pages/NotFound/NotFound';
import Signin from './Components/Pages/Login/signin/Signin';
import SignUp from './Components/Pages/Login/signup/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          {/* <WelcomePage></WelcomePage> */}
          {/* <Navbar></Navbar> */}
          {/* <Home></Home> */}
          <Switch>

            <Route exact path="/">
              <WelcomePage></WelcomePage>
            </Route>
            {/* <Route exact path="/">
              <Home></Home>
            </Route> */}
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/info">
              <Agri_Information></Agri_Information>
            </Route>
            <PrivateRoute path="/farmers">
              <Our_Farmers></Our_Farmers>
            </PrivateRoute>
            <Route path="/products">
              <Explore_All_Products></Explore_All_Products>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>






            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          {/* <Footer></Footer> */}

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
