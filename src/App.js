import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

/*Generals*/
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Layout from "./pages/Layout";
import ComingSoon from "./pages/ComingSoon";

/*Checkout*/
import Payment from "./pages/Checkout/Payment";
import PaymentSuccess from "./pages/Checkout/PaymentSuccess";
import ReviewOrder from "./pages/Checkout/ReviewOrder";

/*Home*/
import LogIn from "./pages/Home/LogIn";
import Register from "./pages/Home/Register";
import WelcomeNew from "./pages/Home/WelcomeNew";
import WelcomeUser from "./pages/Home/WelcomeUser";

/*Orders*/
import MyOrders from "./pages/Orders/MyOrders";


/*QuotMaker*/
import QuotMaker from "./pages/QuotMaker/QuotMaker";
import QuoteStart from "./pages/QuotMaker/QuoteStart";

function App() {

  return (
    <div className="page-container">
      <BrowserRouter>
        <NavBar />
          <div className="content-wrap">
            <Layout>
              <Switch>
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/PaymentSuccess" component={PaymentSuccess} />
                <Route exact path="/ReviewOrder" component={ReviewOrder} />
                <Route exact path="/LogIn" component={LogIn} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/WelcomeNew" component={WelcomeNew} />
                <Route exact path="/WelcomeUser" component={WelcomeUser} />
                <Route exact path="/MyOrders" component={MyOrders} />
                <Route exact path="/QuotStart" component={QuoteStart} />
                <Route exact path="/QuotMaker" component={QuotMaker} />
                <Route exact path="/ComingSoon" component={ComingSoon} />
              </Switch>
            </Layout>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
