import { Modal, Card } from "antd";
import PropTypes from "prop-types";

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

PizzaModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  selectedPizza: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    descriptions: PropTypes.string,
  }),
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default PizzaModal;
