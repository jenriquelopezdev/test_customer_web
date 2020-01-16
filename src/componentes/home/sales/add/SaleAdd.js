/* eslint-disable array-callback-return */
import React from "react";

import Menu from "../../../menu/Menu";

import {
  Container,
  Grid,
  Card,
  TextField,
  MenuItem,
  CardContent,
  Typography
} from "@material-ui/core";
import Axios from "axios";

class SaleAdd extends React.Component {
  total = 0.0;
  productSelect = 0;
  customers = [];
  products = [];

  constructor(props) {
    super(props);
    //setting a default value
    this.state = {
      product: { provider: "" },
      quantity: 0,
      total: 0,
      value: 0,
      valueProduct: 0,
      customers: [
        {
          value: "",
          label: ""
        }
      ],
      products: [
        {
          value: "",
          label: ""
        }
      ]
    };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
  }

  componentDidMount() {
    this.getCustomers()
      .then(response => {
        const customer = [];
        this.customers = response;
        this.customers.map(item => {
          customer.push({
            value: item.id,
            label: item.fistName + " " + item.lastName
          });
        });
        this.setState({ customers: customer });
      })
      .catch(err => console.log(err));

    this.getProducts()
      .then(response => {
        const product = [];
        this.products = response;
        this.products.map(item => {
          product.push({
            value: item.id,
            label: item.name
          });
        });
        this.setState({ products: product });
      })
      .catch(err => console.log(err));
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleChangeProduct = event => {
    this.productSelect = event.target.value;
    this.setState({
      valueProduct: event.target.value,
      total: 0,
      quantity: 0,
      product: this.products[this.productSelect]
    });
    console.log(this.state);
  };

  handleChangeSale = event => {
    this.total = this.state.product.price * event.target.value;
    this.setState({ total: this.total, quantity: event.target.value });
  };

  async getCustomers() {
    const response = await Axios.get("http://localhost:4040/api/customer/");
    return response.data;
  }

  async getProducts() {
    const response = await Axios.get("http://localhost:4040/api/product/");
    return response.data;
  }

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
                <Typography>
                  Aute pariatur ullamco dolor nisi deserunt id consectetur
                  proident voluptate sint.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Grid container>
                          <Grid item xs>
                            <TextField
                              id="standard-select-currency"
                              select
                              fullWidth
                              label="Cliente"
                              value={this.state.value}
                              onChange={this.handleChange}
                              helperText="Selecione un cliente"
                            >
                              {this.state.customers.map(option => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                        </Grid>
                        <br />
                        <Grid container>
                          <Grid item xs>
                            <TextField
                              id="standard-select-currency"
                              select
                              fullWidth
                              label="Producto"
                              value={this.state.valueProduct}
                              onChange={this.handleChangeProduct}
                              helperText="Selecione un producto"
                            >
                              {this.state.products.map(option => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container spacing={2}>
                          <Grid item xs={2}>
                            <Typography>
                              <strong> Proveedor: </strong>
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography>
                              {this.state.product.provider}
                            </Typography>
                          </Grid>

                          <Grid item xs={2}>
                            <Typography>
                              <strong> Existencias: </strong>
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography>{this.state.product.stock}</Typography>
                          </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                          <Grid item xs={2}>
                            <strong> Precio: </strong>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography>
                              {this.state.product.currency}{" "}
                              {this.state.product.price}
                            </Typography>
                          </Grid>
                        </Grid>

                        <br />
                        <Grid container alignItems="center" spacing={2}>
                          <Grid item xs={4}>
                            <TextField
                              id="standard-number"
                              label="Cantidad"
                              type="number"
                              value={this.state.quantity}
                              onChange={this.handleChangeSale}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <strong> Total: </strong>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography>
                              {this.state.product.currency} {this.state.total}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
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

export default SaleAdd;
