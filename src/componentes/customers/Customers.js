/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Customer from "./customer/Customer";
import Card from "@material-ui/core/Card";
//import './Slider.css';

class Customers extends React.Component {

  render() {
    return (
      <>
        <Menu />
        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <h1>Clientes</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>
                  Aute pariatur ullamco dolor nisi deserunt id consectetur
                  proident voluptate sint.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Card>
                  <Customer />
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Customers;
