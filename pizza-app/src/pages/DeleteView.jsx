import { useDispatch, useSelector } from "react-redux";
import { removePizzas } from "../store/Data-thunks";
import { Card, Button, Row, Col} from "antd";
import Loader from "../components/loader";
import { useNavigate } from "react-router-dom";

const DeletePizza = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pizzaData = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const err = useSelector((state) => state.data.error);

  if (loading) {
    return <Loader />;
  }
  if (err) {
    return <div>Error: {err.message}</div>;
  }

  const handleDelete = (id) => {
    console.log(id);
    dispatch(removePizzas(`/pizzaData/${id}`));
    navigate("/");
  };

  return (
    <Row
      gutter={[16, 32]}
      style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}
    >
      {pizzaData.map((pizza) => (
        <Col key={pizza.id} xs={24} sm={24} md={8} lg={6}>
          <Card
            title={pizza.name}
            cover={<img alt={pizza.name} src={pizza.imageUrl} />}
            style={{ marginBottom: "20px" }}
            actions={[
              <Button
                key={pizza.id}
                type="primary"
                danger
                onClick={() => handleDelete(pizza.id)}
              >
                Delete
              </Button>,
            ]}
          ></Card>
        </Col>
      ))}
    </Row>
  );
};

export default DeletePizza;
