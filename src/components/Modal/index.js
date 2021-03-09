import React from 'react'
import style from './index.module.scss'
import PropTypes from 'prop-types'
import Form from '../../shared/components/Form'

const Modal = ({ setClose, id }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div
          className={style.modal__close}
          onClick={() => {
            setClose(false)
            console.log('click')
          }}
        >
          X
        </div>
        <Form id={id} />
      </div>
    </div>
  )
}

Modal.propTypes = {
  setClose: PropTypes.func.isRequired,
  id: PropTypes.number,
}

export default Modal
