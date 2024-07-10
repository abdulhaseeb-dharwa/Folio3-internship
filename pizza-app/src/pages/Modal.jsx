import React, { useState } from "react";
import { Row, Col } from "antd";
import PizzaCard from "../components/PizzaCard";
import PizzaModal from "../components/PizzaModal";

const pizzaData = [
  {
    id: 1,
    name: "Pepper Barbecue Chicken",
    imageUrl: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
    descriptions:
      "Loose yourself in the goodness of delicious Pepper Barbecue Chicken Pizza/ Loaded with Yummy Cheese & Mouth Watering Barbecue Chicken",
    variants: [
      { name: "Small", price: 200 },
      { name: "Medium", price: 400 },
      { name: "Large", price: 600 },
    ],
  },
  {
    id: 2,
    name: "Non Veg Supreme",
    imageUrl: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
    descriptions:
      "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
    variants: [
      { name: "Small", price: 200 },
      { name: "Medium", price: 400 },
      { name: "Large", price: 600 },
    ],
  },
  {
    id: 3,
    name: "Golden Corn Pizza",
    imageUrl: "https://www.dominos.co.in//files/items/golden_corn_veg.jpg",
    descriptions:
      "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according to the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
    variants: [
      { name: "Small", price: 150 },
      { name: "Medium", price: 300 },
      { name: "Large", price: 450 },
    ],
  },
  {
    id: 4,
    name: "Jalapeno & Red Paprika Pizza",
    imageUrl: "https://www.dominos.co.in/files/items/5_Pepper.jpg",
    descriptions:
      "This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it the best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste.",
    variants: [
      { name: "Small", price: 200 },
      { name: "Medium", price: 400 },
      { name: "Large", price: 600 },
    ],
  },
  {
    id: 5,
    name: "Margherita",
    imageUrl: "https://www.dominos.co.in/files/items/Margherit.jpg",
    descriptions:
      "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding a single layer of cheese over it. It is a mouth-watering pizza for cheese lovers.",
    variants: [
      { name: "Small", price: 150 },
      { name: "Medium", price: 300 },
      { name: "Large", price: 450 },
    ],
  },
  {
    id: 6,
    name: "Chicken Pepperoni",
    imageUrl: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
    descriptions:
      "Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a corrupted form of peperoni (one “p”), which denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.",
    variants: [
      { name: "Small", price: 250 },
      { name: "Medium", price: 500 },
      { name: "Large", price: 750 },
    ],
  },
  {
    id: 7,
    name: "Double Cheese Margherita Pizza",
    imageUrl: "https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg",
    descriptions:
      "This is a plain pizza that has cheese on it, which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding a double layer of cheese over it.",
    variants: [
      { name: "Small", price: 300 },
      { name: "Medium", price: 600 },
      { name: "Large", price: 900 },
    ],
  },
  {
    id: 8,
    name: "Italian Veg",
    imageUrl: "https://www.dominos.co.in/files/items/PrimeCheesyL.jpg",
    descriptions:
      "For these easy appetizer pizzas, pile fresh asparagus, summer squash, tomato, and cheese onto purchased Italian bread shells. Combine the traditional Indian taste with delicious Italian sauces.",
    variants: [
      { name: "Small", price: 180 },
      { name: "Medium", price: 360 },
      { name: "Large", price: 540 },
    ],
  },
  {
    id: 9,
    name: "Chicken Tandoori",
    imageUrl: "https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg",
    descriptions:
      "This is a deluxe pizza loaded with cheese and special tandoori chicken on it. It is delicious because of the Indian mix. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding a double layer of cheese over it.",
    variants: [
      { name: "Small", price: 250 },
      { name: "Medium", price: 500 },
      { name: "Large", price: 750 },
    ],
  },
  {
    id: 10,
    name: "Mexican Green Wave",
    imageUrl:
      "https://img2.exportersindia.com/product_images/bc-full/2018/10/2044906/mexican-green-wave-pizza-1540891420-4420335.jpeg",
    descriptions:
      "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes, and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
    variants: [
      { name: "Small", price: 250 },
      { name: "Medium", price: 500 },
      { name: "Large", price: 750 },
    ],
  },
  {
    id: 11,
    name: "Peppy Paneer Pizza",
    imageUrl: "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
    descriptions:
      "Topped with gooey paneer, crunchy capsicum & red paprika. Dive into the exquisite taste of paneer topped on your favorite pizza.",
    variants: [
      { name: "Small", price: 250 },
      { name: "Medium", price: 500 },
      { name: "Large", price: 750 },
    ],
  },
  {
    id: 12,
    name: "Chicken Keema Pizza",
    imageUrl: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
    descriptions:
      "A flavorful pizza topped with spicy minced chicken (keema), a blend of aromatic spices, and a perfect balance of savory and zesty flavors.",
    variants: [
      { name: "Small", price: 300 },
      { name: "Medium", price: 600 },
      { name: "Large", price: 900 },
    ],
  },
];

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const showModal = (pizza) => {
    setSelectedPizza(pizza);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Row
        gutter={[16, 32]}
        style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
      >
        {pizzaData.map((pizza) => (
          <Col key={pizza.id} xs={24} sm={24} md={8}>
            <PizzaCard pizza={pizza} showModal={showModal} />
          </Col>
        ))}
      </Row>
      <PizzaModal
        isModalVisible={isModalVisible}
        selectedPizza={selectedPizza}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default App;
