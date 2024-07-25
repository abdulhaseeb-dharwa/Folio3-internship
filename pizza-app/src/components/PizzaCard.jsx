import React, { useState } from "react";
import { Card, Select, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const { Option } = Select;

const PizzaCard = ({ pizza, showModal }) => {
  const [selectedVariant, setSelectedVariant] = useState(pizza.variants[0].name);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleVariantChange = (value) => {
    setSelectedVariant(value);
  };

  const handleQuantityChange = (value) => {
    setSelectedQuantity(value);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const selectedVariantObj = pizza.variants.find((v) => v.name === selectedVariant);
    const totalPrice = selectedVariantObj.price * selectedQuantity;

    const item = {
      name: pizza.name,
      variant: selectedVariant,
      quantity: selectedQuantity,
      price: totalPrice,
      imageUrl: pizza.imageUrl,
    };

    dispatch(cartActions.addToCart(item));
    message.success("Added to cart");
    console.log(
      `Added to cart: ${pizza.name}, Variant: ${selectedVariant}, Quantity: ${selectedQuantity}, Total Price: ${totalPrice} Rs/-`
    );
  };

  return (
    <Card
      hoverable
      title={pizza.name}
      cover={<img alt={pizza.name} src={pizza.imageUrl} />}
      onClick={() => showModal(pizza)}
      style={{ marginBottom: "20px" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>Variants:</span>
        <Select
          defaultValue={selectedVariant}
          style={{ width: 120 }}
          onChange={handleVariantChange}
          onClick={(e) => e.stopPropagation()}
        >
          {pizza.variants.map((variant) => (
            <Option key={variant.name} value={variant.name}>
              {variant.name}
            </Option>
          ))}
        </Select>
        <span>Quantity:</span>
        <Select
          defaultValue={1}
          style={{ width: 120 }}
          onChange={handleQuantityChange}
          onClick={(e) => e.stopPropagation()}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((qty) => (
            <Option key={qty} value={qty}>
              {qty}
            </Option>
          ))}
        </Select>
      </div>
      <div style={{ marginTop: "2px" }}>
        <span>
          Price: {pizza.variants.find((v) => v.name === selectedVariant).price * selectedQuantity} Rs/-
        </span>
      </div>
      <div style={{ marginTop: "2px" }}>
        <Button
          type="primary"
          style={{ color: "white", backgroundColor: "red" }}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
      </div>
    </Card>
  );
};

export default PizzaCard;
