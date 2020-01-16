/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Menu from "../../../menu/Menu";
import NumberFormat from "react-number-format";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

import { Skeleton } from "@material-ui/lab";
import Axios from "axios";
//import './Slider.css';

class CustomerDetail extends React.Component {
  constructor(props) {
    super(props);
    //setting a default value
    this.state = {
      sale: [{ CUSTOMER: {}, PRODUCT: {} }]
    };
  }

  componentDidMount() {
    this.getSale()
      .then(response => {
        this.setState({
          sale: response
        });
      })
      .catch(err => console.log(err));
  }

  async getSale() {
    const id = this.props.match.params.customerId;
    const response = await Axios.get(
      "http://localhost:4040/api/sale/customer/" + id
    );
    return response.data;
  }

  render() {
    return (
      <>
        <Menu />
        <br />
        <main role="main" className="flex-shrink-0 mt-5">
          <Container fixed>
            <Grid container direction="row" justify="space-around" spacing={3}>
              <Grid item xs>
                <Card>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={2}>
                        <Skeleton variant="circle" width={100} height={100} />
                      </Grid>
                      <Grid item xs={10}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-end"
                          alignItems="center"
                        >
                          <Grid item xs={3}>
                            <Typography>Nombre: </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography>
                              {this.state.sale[0].CUSTOMER.fistName}{" "}
                              {this.state.sale[0].CUSTOMER.lastName}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justify="flex-end"
                          alignItems="center"
                        >
                          <Grid item xs={3}>
                            <Typography>Correo: </Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography>
                              {this.state.sale[0].CUSTOMER.email}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justify="flex-end"
                          alignItems="center"
                        >
                          <Grid item xs={3}>
                            <Typography>Telefono Movil:</Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography>
                              {this.state.sale[0].CUSTOMER.mobilePhone}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          justify="flex-end"
                          alignItems="center"
                        >
                          <Grid item xs={3}>
                            <Typography>Telefono Fijo:</Typography>
                          </Grid>
                          <Grid item xs>
                            <Typography>
                              {this.state.sale[0].CUSTOMER.phone}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
                    <Typography variant="h4">Ventas</Typography>
                    <br />
                    <Grid container>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Producto</TableCell>
                            <TableCell align="right">Proveedor</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Total</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.sale.map((item, index) => (
                            <TableRow>
                              <TableCell component="th" scope="row">
                                {this.state.sale[index].PRODUCT.name}
                              </TableCell>
                              <TableCell align="right">
                                {this.state.sale[index].PRODUCT.provider}
                              </TableCell>
                              <TableCell align="right">
                                {this.state.sale[index].PRODUCT.currency}{" "}
                                {this.state.sale[index].PRODUCT.price}
                              </TableCell>
                              <TableCell align="right">
                                {this.state.sale[index].quantity}
                              </TableCell>
                              <TableCell align="right">
                                <NumberFormat
                                  value={
                                    this.state.sale[index].quantity *
                                    this.state.sale[index].PRODUCT.price
                                  }
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  decimalScale={2}
                                  prefix={
                                    this.state.sale[index].PRODUCT.currency
                                  }
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
      </>
    );
  }
}

export default CustomerDetail;
