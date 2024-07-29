import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizzas } from "../store/Data-thunks";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Card, Button, Row, Col, Input, Alert } from "antd";
import Loader from "../components/loader";

const AddPizza = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  const initialValues = {
    name: "",
    imageUrl: "",
    description: "",
    variants: [
      { name: "small", price: 0 },
      { name: "medium", price: 0 },
      { name: "large", price: 0 },
    ],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    imageUrl: Yup.string().url("Invalid URL").required("Image URL is required"),
    description: Yup.string().required("Description is required"),
    variants: Yup.array().of(
      Yup.object({
        name: Yup.string().required("Name is required"),
        price: Yup.number()
          .min(0, "Price must be greater than or equal to 0")
          .required("Price is required"),
      })
    ),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addPizzas(values));
    resetForm();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Pizza</h2>
      {error && <Alert message={`Error: ${error}`} type="error" showIcon />}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <Row gutter={[16, 32]} style={{ marginTop: "20px" }}>
              <Col xs={24} sm={24} md={12} lg={8}>
                <Card title="Pizza Details">
                  <div>
                    <label>Name: </label>
                    <Field name="name">
                      {({ field }) => <Input {...field} />}
                    </Field>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div>
                    <label>Image URL: </label>
                    <Field name="imageUrl">
                      {({ field }) => <Input {...field} />}
                    </Field>
                    <ErrorMessage
                      name="imageUrl"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div>
                    <label>Description: </label>
                    <Field name="description">
                      {({ field }) => <Input {...field} />}
                    </Field>
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  {values.variants.map((variant, index) => (
                    <div key={index}>
                      <label>{variant.name} Price: </label>
                      <Field name={`variants[${index}].price`}>
                        {({ field }) => <Input type="number" {...field} />}
                      </Field>
                      <ErrorMessage
                        name={`variants[${index}].price`}
                        component="div"
                        className="error-message"
                      />
                    </div>
                  ))}
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Add Pizza
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8}>
                <Card
                  title={values.name || "Pizza Preview"}
                  cover={<img alt={values.name} src={values.imageUrl} />}
                >
                  <p>{values.description}</p>
                  <ul>
                    {values.variants.map((variant, index) => (
                      <li key={index}>
                        {variant.name} Price: {variant.price}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddPizza;
