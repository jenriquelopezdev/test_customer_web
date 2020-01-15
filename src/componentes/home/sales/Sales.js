/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import MaterialTable from "material-table";
import Axios from "axios";
//import './Slider.css';

class Sales extends React.Component {
  tableRef = React.createRef();


  async getSales(query) {
    const response = await Axios.get("http://localhost:4040/api/sale");
    response.page = 0;
    response.totalCount = response.data.length;
    return response;
  }

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
        data={query => this.getSales()}
        title=""
        options={{
          search: true,
          pageSize: 10
        }}
        actions={[
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () =>
              this.tableRef.current && this.tableRef.current.onQueryChange()
          }
        ]}
        
      ></MaterialTable>
    );
  }
}

export default withRouter(Sales);
