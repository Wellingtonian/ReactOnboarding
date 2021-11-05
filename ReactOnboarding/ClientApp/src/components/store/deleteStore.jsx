import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

function DeleteStore(props) {
  const { onDelete, store } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button secondary name="pencil alternate">
          <Icon name="delete" />
          Delete Store
        </Button>
      }
    >
      <Modal.Header>Delete Store</Modal.Header>
      <Modal.Content>Are you sure to delete {store.name}?</Modal.Content>
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
          onClick={() => onDelete(store, setOpen(false))}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteStore;
