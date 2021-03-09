import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  createPlayer,
  updatePlayer,
} from '../../../redux/player-service/actions'
import style from './index.module.scss'
import { connect } from 'react-redux'
import store from '../../../redux/root'

const Form = ({ id, createPlayer, updatePlayer }) => {
  const [editPlayer, setEditPLayers] = useState(null)

  useEffect(() => {
    if (typeof id === 'number') {
      const players = store.getState().playerRedux.players
      const currentPlayer = players.find((_, index) => index === id)
      setEditPLayers(currentPlayer)
    } else {
      setEditPLayers({})
    }
  }, [id])

  return (
    <div className={style.form}>
      <div className={style.form__title}>
        {typeof id === 'number' ? 'Update user score' : 'Add user score'}
      </div>
      <div className={style.form__inner}>
        {!!editPlayer && (
          <Formik
            initialValues={{
              name: Object.keys(editPlayer).length ? editPlayer.name : '',
              score: Object.keys(editPlayer).length ? editPlayer.score : 0,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required(),
              score: Yup.number().required(),
            })}
            onSubmit={(values) => {
              if (typeof id === 'number') {
                updatePlayer(id, values)
              } else {
                createPlayer(values)
              }
            }}
          >
            {({
              values,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={true}
                  value={values.name}
                />
                {errors.name && touched.name}
                <input
                  type="text"
                  name="score"
                  placeholder="score"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required={true}
                  value={values.score}
                />
                <button type="submit" disabled={isSubmitting}>
                  Save
                </button>
                {!!errors.player && touched.player}
              </form>
            )}
          </Formik>
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  createPlayer,
  updatePlayer,
}

export default connect(null, mapDispatchToProps)(Form)
