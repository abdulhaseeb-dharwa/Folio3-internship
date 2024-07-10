import React, { Component } from "react";
import { Drawer, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./Menu.css";

class MenuComponent extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <div className="menuContainer">
          <div className="logo">
            <Link to="/">SHEY PIZZA</Link>
            <img
              src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png"
              alt="pizza"
              className="img-fluid"
              style={{ width: "35px", height: "35px" }}
            />
          </div>
          <div className="rightMenu">
            <Button type="text" className="menuButton">
              <Link to="/login">Login</Link>
            </Button>
            <Button type="text" className="menuButton">
              <Link to="/cart">Cart</Link>
            </Button>
          </div>
          <Button className="barsMenu" type='text' onClick={this.showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            placement="right"
            closable={true}
            onClose={this.onClose}
            open={this.state.visible}
          >
            <Menu mode="vertical">
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/cart">Cart</Link>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default MenuComponent;