import React from 'react'
import { ProductCardWarapper } from './styles'
import { Link, Typography, Container } from '@mui/material'
import Image from 'next/image'
import MiImage from '../../../../public/assets/images/mi-image.svg'

const ProductCard = () => {
  return (
    <ProductCardWarapper>
      <Container>
        <div className="Box-container">
          <div className="box-left">
            <div className="Box-images">
              <Image className="Mi-image" src={MiImage} alt="Mi Imagen" />
            </div>

            <div className="Box-images">
              <Image className="Mi-image" src={MiImage} alt="Mi Imagen" />
            </div>

            <div className="Box-images">
              <Image className="Mi-image" src={MiImage} alt="Mi Imagen" />
            </div>

            <div className="Box-images">
              <Image className="Mi-image" src={MiImage} alt="Mi Imagen" />
            </div>

            <div className="Box-images">
              <Image className="Mi-image" src={MiImage} alt="Mi Imagen" />
            </div>

            <div className="Box-images">
              <Image className="Mi-image" src={MiImage} alt="Mi Imagen" />
            </div>
          </div>

          <div className="Box-image-principal">
            <Image
              className="Mi-image-principal"
              src={MiImage}
              alt="Mi Imagen"
            />
          </div>
        </div>
      </Container>
    </ProductCardWarapper>
  )
}

export default ProductCard
