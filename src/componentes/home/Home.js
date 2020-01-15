import React from "react";

import Menu from "../menu/Menu";
import Footer from "../footer/Footer";

import { Container, Grid, Card } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />

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

export default Home;
