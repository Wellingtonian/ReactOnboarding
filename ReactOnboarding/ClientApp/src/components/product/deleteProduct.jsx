import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

function DeleteProduct(props) {
  const { onDelete, product } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button secondary name="pencil alternate">
          <Icon name="delete" />
          Delete Product
        </Button>
      }
    >
      <Modal.Header>Delete Product</Modal.Header>
      <Modal.Content>Are you sure to delete {product.name}?</Modal.Content>
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
          onClick={() => onDelete(product, setOpen(false))}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteProduct;
