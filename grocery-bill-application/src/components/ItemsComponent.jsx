import React, { Component, useState } from "react";
import ItemService from "../service/ItemService";

class ItemsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.viewItem = this.viewItem.bind(this);
    this.discounted = this.discounted.bind(this);
  }

  componentDidMount() {
    ItemService.getItems().then((response) => {
      this.setState({
        items: response.data,
      });
    });
  }

  addItem() {
    this.props.history.push("/add-item/_add");
  }
  updateItem(id) {
    this.props.history.push(`/add-item/${id}`);
  }
  deleteItem(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      ItemService.deleteItem(id).then((response) => {
        this.setState({
          items: this.state.items.filter((item) => item.id !== id),
        });
      });
    }
  }
  discounted(item) {
    if (item >= 1) {
      return (
        <i
          className="fa fa-check"
          aria-hidden="true"
          style={{ color: "green" }}
        ></i>
      );
    } else {
      return (
        <i
          className="fa fa-times"
          aria-hidden="true"
          style={{ color: "red" }}
        ></i>
      );
    }
  }
  viewItem(id) {
    this.props.history.push(`/view-item/${id}`);
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Item List </h2>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <table className="table table-striped table-bordered mb-0">
            <thead className="thead-dark">
              <tr>
                <th>Product Name</th>
                <th>Original Price</th>
                <th>Discounted Price</th>
                <th>Discount Percentage</th>
                <th>Discounted</th>
                <th>Total Bill</th>
                <th style={{ textAlign: "center" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.originalPrice + " "}pesos</td>
                  <td>{item.discountedPrice + " "}pesos</td>
                  <td>{item.discountPercentage}%</td>
                  <td>{this.discounted(item.discountedPrice)}</td>
                  <td>{item.totalBill + " "}pesos</td>
                  <td>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="button-33"
                      onClick={() => this.updateItem(item.id)}
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="button-34"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="button-36"
                      onClick={() => this.viewItem(item.id)}
                    >
                      Print
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <br></br>
        <button className="button-35" onClick={this.addItem}>
          Add Item
        </button>
      </div>
    );
  }
}

export default ItemsComponent;
