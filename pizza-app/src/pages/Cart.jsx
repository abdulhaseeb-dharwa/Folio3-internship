import React from "react";
import { List, Card, Button, InputNumber } from "antd";
import Menu from "../components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = items.reduce((acc, item) => acc + item.price, 0);

  const handleQuantityChange = (value, name, variant) => {
    if (value <= 0) return;
    dispatch(cartActions.updateQuantity({ name, variant, quantity: value }));
  };

  const handleRemove = (name, variant) => {
    dispatch(cartActions.removeFromCart({ name, variant }));
  };

  return (
    <>
      <Menu />
      <div align="left" style={{ padding: "20px" }}>
        <h2>My Cart</h2>
        <h3 align="right">Total: {totalAmount} Rs/-</h3>
        {items.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <>
            <List
              grid={{ gutter: 16, column: 1 }}
              dataSource={items}
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
                    <div>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{ width: "100px", marginBottom: "10px" }}
                      />
                    </div>
                    <div>Variant: {item.variant}</div>
                    <div>
                      Quantity:
                      <InputNumber
                        min={1}
                        value={item.quantity}
                        onChange={(value) =>
                          handleQuantityChange(value, item.name, item.variant)
                        }
                        style={{ marginLeft: "10px" }}
                      />
                    </div>
                    <div>Price: {item.price} Rs/-</div>
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
