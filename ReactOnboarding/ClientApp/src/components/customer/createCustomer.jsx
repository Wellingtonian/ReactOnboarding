import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

function CreateCustomer(props) {
  const { open, setOpen, onCreate } = props;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <Modal open={open}>
      <Modal.Header>Create New Customer</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Customer Name</label>
            <input
              placeholder="Emily"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              placeholder="Auckland"
              onChange={(e) => setAddress(e.target.value)}
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
          onClick={() =>
            onCreate({ name: name, address: address }, setOpen(false))
          }
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default CreateCustomer;
