/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MaterialTable from "material-table";
import Axios from "axios";
//import './Slider.css';

class Product extends React.Component {
  tableRef = React.createRef();

  async postData(newData) {
    this.tableRef.current.onQueryChange();
    return await fetch("http://localhost:4040/api/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData)
    });
  }

  async updateData(newData, id) {
    this.tableRef.current.onQueryChange();
    return await fetch("http://localhost:4040/api/product/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData)
    });
  }

  async deleteProduct(id) {
    this.tableRef.current.onQueryChange();
    return await fetch("http://localhost:4040/api/product/" + id, {
      method: "DELETE"
    });
  }

  async getProducts(query) {
    const response = await Axios.get("http://localhost:4040/api/product");
    response.page = 0;
    response.totalCount = response.data.length;
    return response;
  }

  render() {
    return (
      <MaterialTable
        tableRef={this.tableRef}
        columns={[
          { title: "Nombre", field: "name" },
          {
            title: "Moneda",
            field: "currency",
            lookup: { $: "$", Q: "Q" }
          },
          { title: "Precio", field: "price", type: "numeric" },
          { title: "Existencias", field: "stock", type: "numeric" },
          { title: "Proveedor", field: "provider" }
        ]}
        data={query => this.getProducts()}
        title=""
        options={{
          search: true,
          pageSize: 10
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              resolve();
              this.postData(newData);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              resolve();
              this.updateData(
                {
                  name: newData.name,
                  price: newData.price,
                  currency: newData.currency,
                  provider: newData.provider,
                  stock: newData.stock
                },
                newData.id
              );
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              resolve();
              this.deleteProduct(oldData.id);
            })
        }}
      ></MaterialTable>
    );
  }
}

export default Product;
