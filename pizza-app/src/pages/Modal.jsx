import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import PizzaCard from "../components/PizzaCard";
import PizzaModal from "../components/PizzaModal";
import Loader from "../components/loader";
import { fetchPizzas } from "../store/Data-thunks";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const pizzaData = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    dispatch(fetchPizzas("/pizzaData"));
  }, [dispatch]);

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
