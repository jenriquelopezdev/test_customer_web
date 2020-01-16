/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import { Container, Grid, Card } from "@material-ui/core";
import Product from "./product/Product";

//import './Slider.css';

class Products extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <main role="main" className="flex-shrink-0 mt-5">
          <Container fixed>
            <Grid container>
              <Grid item xs={12}>
                <h1>Productos</h1>
              </Grid>
              <Grid item xs={12}>
                <p>
                  Aute pariatur ullamco dolor nisi deserunt id consectetur
                  proident voluptate sint.
                </p>
              </Grid>

              <Grid item xs={12}>
                <Card>
                  <Product />
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

export default Products;
