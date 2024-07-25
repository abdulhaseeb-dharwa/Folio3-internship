import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import PizzaCard from "../components/PizzaCard";
import PizzaModal from "../components/PizzaModal";
import api from "../api/pizzas";

const App = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await api.get("/pizzaData");
        setPizzaData(response.data);
      } catch (error) {
        try {
          const response = await api.get("http://10.164.60.54:3500/pizzaData");
          setPizzaData(response.data);
        } catch (error) {
          alert(
            "There was an error fetching the pizza data. Please try again later."
          );
          console.log("There was an error fetching the pizza data: ", error);
        }
      }
    };
    fetchPizza();
  }, []);

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
