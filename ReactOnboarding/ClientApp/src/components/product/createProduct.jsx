import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

function CreateProduct(props) {
  const { open, setOpen, onCreate } = props;
  const [name, setName] = useState("");
  const [price, setprice] = useState("");

  return (
    <Modal open={open}>
      <Modal.Header>Create New Product</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Product Name</label>
            <input
              placeholder="Apple"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input
              placeholder="1.99"
              onChange={(e) => setprice(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Cancel"
          color="orange"
          labelPosition="right"
          icon="delete"
          onClick={() => setOpen(false)}
        />

        <Button
          content="Confirm"
          labelPosition="right"
          icon="checkmark"
          onClick={() => onCreate({ name: name, price: price }, setOpen(false))}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CreateProduct;
