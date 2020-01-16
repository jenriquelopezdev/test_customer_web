/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Customer from "./customer/Customer";
import { Container, Grid, Card } from "@material-ui/core";
//import './Slider.css';

class Customers extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <br />
        <main role="main" className="flex-shrink-0 mt-5">
          <Container fixed>
            <Grid container>
              <Grid item xs={12}>
                <h1>Ventas</h1>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Aute pariatur ullamco dolor nisi deserunt id consectetur
                  proident voluptate sint.
                </p>
              </Grid>

              <Grid item xs={12}>
                <Card>
                  <Customer />
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}

export default Customers;
