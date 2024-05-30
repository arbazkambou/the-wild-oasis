import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabins() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowModal((showModal) => !showModal)}>
        Add new cabin
      </Button>
      {showModal && (
        <Modal toggelModal={() => setShowModal((showModal) => !showModal)}>
          <CreateCabinForm
            toggelModal={() => setShowModal((showModal) => !showModal)}
          />
        </Modal>
      )}
    </div>
  );
}

export default AddCabins;
