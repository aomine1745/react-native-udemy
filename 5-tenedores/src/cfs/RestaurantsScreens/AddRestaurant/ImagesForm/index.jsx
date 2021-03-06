import React from 'react'
import { View } from 'react-native'

import UploadImage from '../UploadImage'
import Carousel from '../Carousel'

import styles from './styles'

export default function ImagesForm ({ imagesSelected, setImagesSelected, isDisabled, toastRef }) {
  const props = {
    imagesSelected,
    setImagesSelected,
    isDisabled,
    toastRef
  }

  return (
    <View
      style={styles.viewImages}
    >
      <UploadImage
        {...props}
      />
      <Carousel
        {...props}
      />
    </View>
  )
}
