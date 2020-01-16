/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter } from "react-router-dom";
import MaterialTable from "material-table";
import Axios from "axios";
//import './Slider.css';

class Customer extends React.Component {
  tableRef = React.createRef();

  async postData(newData) {
    this.tableRef.current.onQueryChange();
    return await fetch("http://localhost:4040/api/customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData)
    });
  }

  async updateData(newData, id) {
    this.tableRef.current.onQueryChange();
    return await fetch("http://localhost:4040/api/customer/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData)
    });
  }

  async deleteCustomer(id) {
    this.tableRef.current.onQueryChange();
    return await fetch("http://localhost:4040/api/customer/" + id, {
      method: "DELETE"
    });
  }

  async getCustomers(query) {
    const response = await Axios.get("http://localhost:4040/api/customer");
    response.page = 0;
    response.totalCount = response.data.length;
    return response;
  }

  changeToDetail(id) {
    console.log(id);
  }

  render() {
    return (
      <MaterialTable
        tableRef={this.tableRef}
        columns={[
          { title: "Nombre", field: "fistName" },
          { title: "Apellido", field: "lastName" },
          { title: "Correo", field: "email" },
          { title: "Telefono Movil", field: "mobilePhone", type: "numeric" },
          { title: "Telefono Fijo", field: "phone", type: "numeric" }
        ]}
        data={query => this.getCustomers()}
        title=""
        options={{
          search: true,
          pageSize: 10
        }}
        actions={[
          {
            icon: "visibility",
            tooltip: "Detail",
            onClick: (event, rowData) => {
              this.changeToDetail(rowData.id);
            }
          }
        ]}
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
                  fistName: newData.fistName,
                  lastName: newData.lastName,
                  email: newData.email,
                  mobilePhone: newData.mobilePhone,
                  phone: newData.phone
                },
                newData.id
              );
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              resolve();
              this.deleteCustomer(oldData.id);
            })
        }}
      ></MaterialTable>
    );
  }
}

export default withRouter(Customer);
