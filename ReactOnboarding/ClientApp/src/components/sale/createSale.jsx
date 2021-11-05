import React, { useState } from "react";
import { Button, Modal, Form, Icon } from "semantic-ui-react";
import DropDownGen from "../common/dropDownGen";

function CreateSale(props) {
  const { onCreate, customer, product, store } = props;
  const [open, setOpen] = useState(false);
  const [saleDate, setSaleDate] = useState("");
  const [customerID, setCustomerID] = useState("");
  const [productID, setProductID] = useState("");
  const [storeID, setStoreID] = useState("");

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary name="pencil alternate">
          <Icon name="file" />
          Create Sale
        </Button>
      }
    >
      <Modal.Header>Create New Sale</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label> DateSold</label>
            <input type="date" onChange={(e) => setSaleDate(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <label> Customer</label>
            <DropDownGen
              label="Customer"
              data={customer}
              onSelect={setCustomerID}
            />
          </Form.Field>
          <Form.Field>
            <label> Product</label>
            <DropDownGen
              label="Product"
              data={product}
              onSelect={setProductID}
            />
          </Form.Field>
          <Form.Field>
            <label> Store</label>
            <DropDownGen label="Store" data={store} onSelect={setStoreID} />
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
            onCreate(
              {
                datesold: saleDate,
                productID: productID,
                customerID: customerID,
                storeID: storeID,
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

export default CreateSale;
