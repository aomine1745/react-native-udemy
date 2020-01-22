import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase/app'

import LoadingPage from '../../components/shared/LoadingPage'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Account () {
  const [login, setLogin] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user ? setLogin(true) : setLogin(false)
    })
  }, [])

  if (login === null) return <LoadingPage text='Cargando...' />

  return login ? <UserLogged /> : <UserGuest />
}
