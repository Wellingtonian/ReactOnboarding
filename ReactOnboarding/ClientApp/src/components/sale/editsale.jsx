import React, { useState } from "react";
import { Button, Modal, Form, Icon } from "semantic-ui-react";

import DropDownSale from "./dropDownSale";

function EditStore(props) {
  const { onEdit, sale, store, customer, product } = props;
  const [saleDate, setSaleDate] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [productID, setProductID] = useState("");
  const [storeID, setStoreID] = useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary>
          <Icon name="pencil alternate" />
          Edit Sale
        </Button>
      }
    >
      <Modal.Header>Edit Sale</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label> DateSold</label>
            <input type="date" onChange={(e) => setSaleDate(e.target.value)} />
          </Form.Field>
          <Form.Field>
            <label> Customer</label>
            <DropDownSale
              label="Customer"
              data={customer}
              onSelect={setCustomerID}
            />
          </Form.Field>
          <Form.Field>
            <label> Product</label>
            <DropDownSale
              label="Product"
              data={product}
              onSelect={setProductID}
            />
          </Form.Field>
          <Form.Field>
            <label> Store</label>
            <DropDownSale label="Store" data={store} onSelect={setStoreID} />
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
                id: sale.id,
                dateSold: saleDate || sale.dateSold,
                productID: productID || sale.product.id,
                customerID: customerID || sale.customer.id,
                storeID: storeID || sale.store.id,
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

export default EditStore;
