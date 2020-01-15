/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import MaterialTable from "material-table";
//import './Slider.css';

class Sales extends React.Component {
  tableRef = React.createRef();

  render() {
    return (
      <MaterialTable
        tableRef={this.tableRef}
        columns={[
          { title: "Cliente", field: "CUSTOMER.fistName" },
          { title: "Correo", field: "CUSTOMER.email" },
          { title: "Telefono Fijo", field: "CUSTOMER.phone" },
          { title: "Producto", field: "PRODUCT.name" },
          { title: "Cantidad", field: "quantity" }
        ]}
      ></MaterialTable>
    );
  }
}

export default withRouter(Sales);
