import React from 'react'
import { useSelector} from 'react-redux'
import {
  Modal,
  ModalHeader,
  ModalBody
} from "shards-react";

const PokeModal = () => {
  let statusModal = useSelector((state) =>  state.modal )
  return (
      <div>
        <Modal size="sm" open={statusModal}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody>👋 Hello there!</ModalBody>
        </Modal>
      </div>
    )
}

export default PokeModal;