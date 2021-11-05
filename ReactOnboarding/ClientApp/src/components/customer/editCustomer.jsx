import React, { useState } from "react";
import { Button, Modal, Form, Icon } from "semantic-ui-react";

function EditCustomer(props) {
  const { onEdit, customer } = props;
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary name="pencil alternate">
          <Icon name="pencil alternate" />
          Edit Customer
        </Button>
      }
    >
      <Modal.Header>Edit Customer</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Customer Name</label>

            <input
              defaultValue={customer.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              defaultValue={customer.address}
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
            onEdit(
              { id: customer.id, name: name, address: address },
              setOpen(false)
            )
          }
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default EditCustomer;
