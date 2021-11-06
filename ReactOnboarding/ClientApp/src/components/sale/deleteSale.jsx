import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

function DeleteSale(props) {
  const { onDelete, sale } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button secondary name="pencil alternate">
          <Icon name="delete" />
          Delete Sale
        </Button>
      }
    >
      <Modal.Header>Delete Sale</Modal.Header>
      <Modal.Content>Are you sure to delete this sale ?</Modal.Content>
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
          onClick={() => onDelete(sale, setOpen(false))}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteSale;
