import React, { useState } from "react";
import { Button, Modal, Form, Icon } from "semantic-ui-react";

function CreateStore(props) {
  const { onCreate } = props;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary name="pencil alternate">
          <Icon name="file" />
          Create Store
        </Button>
      }
    >
      <Modal.Header>Create New Store</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label> Store Name</label>
            <input
              placeholder="CountDown"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              placeholder="Center"
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

export default CreateStore;
