import React from 'react'
import style from './index.module.scss'
import Form from '../../shared/components/Form'

const Modal = ({ setClose, id }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div
          className={style.modal__close}
          onClick={() => {
            setClose(false)
          }}
        >
          X
        </div>
        <Form id={id} />
      </div>
    </div>
  )
}

export default Modal
