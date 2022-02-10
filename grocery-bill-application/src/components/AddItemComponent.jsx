import React, { Component } from "react";
import ItemService from "../service/ItemService";

class AddItemComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      originalPrice: "",
      discountPercentage: "",
    };

    this.changeName = this.changeName.bind(this);
    this.changeOriginalPrice = this.changeOriginalPrice.bind(this);
    this.changeDiscountPercentage = this.changeDiscountPercentage.bind(this);

    this.addOrUpdate = this.addOrUpdate.bind(this);

    this.cancel = this.cancel.bind(this);
  }
  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  changeOriginalPrice = (event) => {
    this.setState({
      originalPrice: event.target.value,
    });
  };
  changeDiscountPercentage = (event) => {
    this.setState({
      discountPercentage: event.target.value,
    });
  };

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      ItemService.getItemById(this.state.id).then((response) => {
        let item = response.data;
        this.setState({
          name: item.name,
          originalPrice: item.originalPrice,
          discountPercentage: item.discountPercentage,
        });
      });
    }
  }

  addOrUpdate = (event) => {
    event.preventDefault();

    let item = {
      name: this.state.name,
      originalPrice: this.state.originalPrice,
      discountPercentage: this.state.discountPercentage,
    };
    const Name = document.querySelector("#pName");
    const DPrice = document.querySelector("#oPrice");
    const Price = document.querySelector("#dPercentage");
    const Message = document.querySelector("#msg");

    if (
      Name.value.length === 0 ||
      DPrice.value.length === 0 ||
      Price.value.length === 0
    ) {
      Message.innerHTML = "<h4 class='error'> Please complete details!<h4/>";

      setTimeout(() => document.querySelector(".error").remove(), 3000);
    } else {
      if (this.state.id === "_add") {
        if (item == this.state.name) {
          Message.innerHTML =
            "<h4 class='error'>Item already exist!{this.state.name}<h4/> ";

          setTimeout(() => document.querySelector(".error").remove(), 3000);
        } else {
          ItemService.insertItem(item).then((response) => {
            this.props.history.push("/items");
          });
        }
      } else {
        if (
          Name.value.length === 0 ||
          DPrice.value.length === 0 ||
          Price.value.length === 0
        ) {
          Message.innerHTML =
            "<h4 class='error'> Please complete details!<h4/>";

          setTimeout(() => document.querySelector(".error").remove(), 3000);
        } else {
          ItemService.updateItem(item, this.state.id).then((response) => {
            this.props.history.push("/items");
          });
        }
      }
    }
  };

  cancel() {
    this.props.history.push("/items");
  }
  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center"> Add Item</h3>;
    } else {
      return <h3 className="text-center"> Update Item</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 ">
              <br></br>
              {this.getTitle()}
              <div className="card-body">
                <div id="msg"></div>
                <form>
                  <div className="form-group">
                    <input
                      id="pName"
                      placeholder="Name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeName}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      id="oPrice"
                      placeholder="Price"
                      className="form-control"
                      value={this.state.originalPrice}
                      onChange={this.changeOriginalPrice}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <input
                      id="dPercentage"
                      placeholder="Discount Percentage"
                      className="form-control"
                      value={this.state.discountPercentage}
                      onChange={this.changeDiscountPercentage}
                    />
                  </div>

                  <br></br>
                  <div className="text-center">
                    <button className="button-36" onClick={this.addOrUpdate}>
                      Save
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="button-34"
                      onClick={this.cancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddItemComponent;
