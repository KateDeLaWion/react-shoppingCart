import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      productList: ""
    };

  
    this.calculateTotal = this.calculateTotal.bind(this);
   
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }

  createProduct(product) {
    this.setState({
      products: this.state.productList.push(product)
    });
  }

  calculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
    console.log(this.state.total);
  }

  showProduct(info) {
    console.log(info);
  
  }

  
  render() {

   
    if (!this.state.productList) return <p>loading...!!!!</p>;
   
    let component = this;
    let products = this.state.productList.map(function(product) {
      return (
        <div>
          
        <Product
          name={product.name}
          price={product.price}
          handleTotal={component.calculateTotal}
        />

        </div>
      );
    });

    return (
      <div>
        {products}
        <Total total={this.state.total} />
      </div>
    );
  }
}




let productList = [
  { name: "Prada flower blouse", price: 1199.99 },
  { name: "Prada capri pants", price:1599.99  },
  { name: "gift wrap by Prada", price: 99.99 }
];




class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }

  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    this.props.handleTotal(-this.props.price);
  }

  showInfo() {
    this.props.handleShow(this.props.info);
  }

  render() {
    return (
      <div>
        
        <div>
          
          <div>
            <h4>{this.props.name}: ${this.props.price}</h4>
          </div>
          <div>qty: {this.state.qty}</div>
        </div>
        <div>
          <div>
            <button onClick={this.add}>
              +1
            </button>
            <button onClick={this.subtract} disabled={this.state.qty < 1}>
              -1
            </button>
          </div>
        </div>
        <hr />
        
      </div>
    );
  }
}




class Total extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let total = this.props.total.toFixed(2);
    let tax = (this.props.total * 0.0875).toFixed(2);
    let totalIncTax = (+total + +tax).toFixed(2);
    let mystyle = {
      borderTop: "1px solid #ddd",
      marginTop: "10px"
    };
    return (
      <div style={{"marginTop": "30px", "backgroundColor":"#F6F6F6","padding": "10px"}}>
        <h3  style={{ fontWeight: 400 }}>
          <span >total price:</span>
          <span >${total}</span>
        </h3>
        <h3  style={{ fontWeight: 400 }}>
          <span >tax (8.875%):</span>
          <span>${tax}</span>
        </h3>
        <h3 style={mystyle}>
          <span >tota inc tax:</span>
          <span >${totalIncTax}</span>
        </h3>

      </div>
    );
  }
}




ReactDOM.render(<ProductList />, document.getElementById("root"));






