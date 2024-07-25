import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import PizzaCard from "../components/PizzaCard";
import PizzaModal from "../components/PizzaModal";
import { fetchData } from "../services/apiService";
import Loader from "../components/loader";

const App = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [loading, setLoadingState] = useState(false);

  useEffect(() => {
    const fetchPizza = async () => {
      setLoadingState(true);
      try {
        const data = await fetchData("/pizzaData");
        setPizzaData(data);
      } catch (error) {
        console.log("There was an error fetching the pizza data: ", error);
      } finally {
        setLoadingState(false);
      }
    };
    fetchPizza();
  }, []);

  if (loading) {
    return <Loader />;
  }

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
