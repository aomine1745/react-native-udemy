import React, { useRef } from 'react'

import LogoWrapper from 'layouts/Account/LogoWrapper'
import FormWrapper from 'layouts/Account/FormWrapper'

import Form from 'components/Account/Register/Form'
import Toast from 'components/Shared/Toast'

export default function Register ({ navigation }) {
  const toastRef = useRef()

  function navigateTo () {
    navigation.navigate('account')
  }

  return (
    <LogoWrapper>
      <FormWrapper>
        <Form
          navigateTo={navigateTo}
          toastRef={toastRef}
        />
      </FormWrapper>
      <Toast
        toastRef={toastRef}
        position='top'
      />
    </LogoWrapper>
  )
}
