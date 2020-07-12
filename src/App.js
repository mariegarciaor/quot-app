import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

/*Generals*/
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import Layout from "./pages/Layout";
import ComingSoon from "./pages/ComingSoon";

/*Checkout*/
import Payment from "./pages/Checkout/Payment";
import PaymentDeclined from "./pages/Checkout/PaymentDeclined";
import PaymentSuccess from "./pages/Checkout/PaymentSuccess";
import ReviewOrder from "./pages/Checkout/ReviewOrder";

/*Home Folder*/
import LogIn from "./pages/Home/LogIn";
import Register from "./pages/Home/Register";
import WelcomeNew from "./pages/Home/WelcomeNew";
import WelcomeUser from "./pages/Home/WelcomeUser";

/*Orders*/
import MyOrders from "./pages/Orders/MyOrders";
import OrderDetails from "./pages/Orders/OrderDetails";

/*QuotMaker*/
import PrintDesign from "./pages/QuotMaker/PrintDesign";
import PrintFinish from "./pages/QuotMaker/PrintFinish";
import PrintPaper from "./pages/QuotMaker/PrintPaper";
import PrintQuantity from "./pages/QuotMaker/PrintQuantity";
import PrintShipping from "./pages/QuotMaker/PrintShipping";
import PrintSides from "./pages/QuotMaker/PrintSides";
import PrintSystem from "./pages/QuotMaker/PrintSystem";
import PrintUploadFile from "./pages/QuotMaker/PrintUploadFile";
import QuoteStart from "./pages/QuotMaker/QuoteStart";

function App() {

  return (
    <div className="page-container">
      <NavBar />
      <div className="content-wrap">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/payment" component={Payment} />
              <Route exact path="/PaymentDeclined" component={PaymentDeclined} />
              <Route exact path="/PaymentSuccess" component={PaymentSuccess} />
              <Route exact path="/ReviewOrder" component={ReviewOrder} />
              <Route exact path="/LogIn" component={LogIn} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/WelcomeNew" component={WelcomeNew} />
              <Route exact path="/WelcomeUser" component={WelcomeUser} />
              <Route exact path="/MyOrders" component={MyOrders} />
              <Route exact path="/OrderDetails" component={OrderDetails} />
              <Route exact path="/PrintDesign" component={PrintDesign} />
              <Route exact path="/PrintFinish" component={PrintFinish} />
              <Route exact path="/PrintPaper" component={PrintPaper} />
              <Route exact path="/PrintQuantity" component={PrintQuantity} />
              <Route exact path="/PrintShipping" component={PrintShipping} />
              <Route exact path="/PrintSides" component={PrintSides} />
              <Route exact path="/PrintSystem" component={PrintSystem} />
              <Route exact path="/PrintUploadFile" component={PrintUploadFile} />
              <Route exact path="/QuoteStart" component={QuoteStart} />
              <Route exact path="/ComingSoon" component={ComingSoon} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
