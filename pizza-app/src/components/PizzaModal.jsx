import React from "react";
import { Modal, Card } from "antd";

const PizzaModal = ({
  isModalVisible,
  selectedPizza,
  handleOk,
  handleCancel,
}) => (
  <Modal
    title={selectedPizza?.name}
    open={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
  >
    <Card>
      {selectedPizza && (
        <>
          <p>
            <img src={selectedPizza.imageUrl} alt={selectedPizza.name} />
          </p>
          <p>{selectedPizza.descriptions}</p>
        </>
      )}
    </Card>
  </Modal>
);

export default PizzaModal;
