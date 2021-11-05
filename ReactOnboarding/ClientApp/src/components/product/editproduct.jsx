import React, { useState } from "react";
import { Button, Modal, Form, Icon } from "semantic-ui-react";

function EditProduct(props) {
  const { onEdit, product } = props;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary name="pencil alternate">
          <Icon name="pencil alternate" />
          Edit Product
        </Button>
      }
    >
      <Modal.Header>Edit Product</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Product Name</label>

            <input
              defaultValue={product.name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input
              defaultValue={product.price}
              onChange={(e) => setPrice(e.target.value)}
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
              {
                id: product.id,
                name: name || product.name,
                price: price || product.price,
              },
              setOpen(false)
            )
          }
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default EditProduct;
