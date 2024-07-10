import React, { useState } from "react";
import { Card, Select, Button, message } from "antd";
import { useCart } from "../components/CartContext";

const { Option } = Select;

const PizzaCard = ({ pizza, showModal }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    pizza.variants[0].name
  );
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleVariantChange = (value) => {
    setSelectedVariant(value);
  };

  const handleQuantityChange = (value) => {
    setSelectedQuantity(value);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const selectedVariantObj = pizza.variants.find(
      (v) => v.name === selectedVariant
    );
    const totalPrice = selectedVariantObj.price * selectedQuantity;

    const item = {
      name: pizza.name,
      variant: selectedVariant,
      quantity: selectedQuantity,
      price: totalPrice,
      imageUrl: pizza.imageUrl,
    };

    addToCart(item);
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
    >
      <p>Variants:</p>
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
      <p>Quantity:</p>
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
      <p>
        Price:{" "}
        {pizza.variants.find((v) => v.name === selectedVariant).price *
          selectedQuantity}{" "}
        Rs/-
      </p>
      <p>
        <Button
          type="primary"
          style={{ color: "white", backgroundColor: "red" }}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
      </p>
    </Card>
  );
};

export default PizzaCard;
