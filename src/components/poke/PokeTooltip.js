import React from "react"
import {
  Toast,
  ToastContainer,
  ToastHeader,
  ToastBody 
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import '../../assets/css/PokeTooltip.css'

const PokeTooltip = () => {
  let statusTooltip = useSelector((state) => state.tooltip)
  console.log("ini Tooltip", statusTooltip)
    return (
        <>
          <div
            aria-live="polite"
            aria-atomic="true"
            className="position-relative"
          >
            <ToastContainer className="p-3" position="top-end">
              <Toast show={!statusTooltip}>
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Status Catching Pokemon</strong>
                  <small>Try again !</small>
                </Toast.Header>
                <Toast.Body>HAHAHA, Sorry you can't catch me</Toast.Body>
              </Toast>
            </ToastContainer>
          </div>
        </>
      );
}

export default PokeTooltip;