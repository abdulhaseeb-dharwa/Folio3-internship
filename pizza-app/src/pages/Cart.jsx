import React from "react";
import { useCart } from "../components/CartContext";
import { List, Card, Button, InputNumber } from "antd";
import Menu from "../components/Menu";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleQuantityChange = (value, name, variant) => {
    if (value <= 0) return;
    updateQuantity(name, variant, value);
  };

  const handleRemove = (name, variant) => {
    removeFromCart(name, variant);
  };

  return (
    <>
      <Menu />
      <div align="left" style={{ padding: "20px" }}>
        <h2>My Cart</h2>
        <h3 align="right">Total: {totalAmount} Rs/-</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <List
              grid={{ gutter: 16, column: 3.5 }}
              dataSource={cartItems}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    title={item.name}
                    extra={
                      <Button
                        type="primary"
                        danger
                        onClick={() => handleRemove(item.name, item.variant)}
                        
                      >
                        Remove
                      </Button>
                    }
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{ width: "100px", marginBottom: "10px" }}
                    />
                    <p>Variant: {item.variant}</p>
                    <p>
                      Quantity:
                      <InputNumber
                        min={1}
                        value={item.quantity}
                        onChange={(value) =>
                          handleQuantityChange(value, item.name, item.variant)
                        }
                        style={{ marginLeft: "10px" }}
                      />
                    </p>
                    <p>Price: {item.price} Rs/-</p>
                  </Card>
                </List.Item>
              )}
            />
          </>
        )}
      </div>
    </>
  );
}
