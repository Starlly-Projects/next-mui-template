import React from 'react'
import { PricingWrapper } from './styles'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import { Divider } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ClearIcon from '@mui/icons-material/Clear'

interface FunctionItem {
  check?: boolean
  label?: string | React.ReactElement
}

export interface PricingCardProps {
  className?: string
  variant?: 'SINGLE' | 'PREMIUM' | 'BUSINESS'
  title?: string
  description?: string
  dashedPrice?: string
  discount?: string
  money?: string
  price?: number
  month?: string
  Add_to_cart?: string
  currency?: string
  preciMonthly?: number
  month_when_you_renew?: string
  main_functions?: string
  functionList?: Array<FunctionItem>
}

const PricingCard: React.FC<PricingCardProps> = ({
  className,
  variant,
  title,
  description,
  dashedPrice,
  discount,
  money,
  price,
  month,
  Add_to_cart,
  currency,
  functionList,
  preciMonthly,
  month_when_you_renew,
  main_functions,
}) => {
  const getClassName = (): string => {
    switch (variant) {
      case 'PREMIUM':
        return 'bg-orange'
      case 'BUSINESS':
        return 'business'
      default:
        return 'single'
    }
  }

  return (
    <PricingWrapper className={getClassName()}>
      <Box className="Voucher">
        <div className="content-Title">
          <h1 className="title">{title}</h1>
          <p className="paragraph">{description}</p>
        </div>

        <div className="content-preci">
          <p className="paragraph-preci">{dashedPrice}</p>
          <Button className="button" variant="contained">
            {discount}
          </Button>
        </div>

        <div className="content-preci-2">
          <p className="paragraph-preci-2">
            {money} <span className="preci">{price}</span> {month}
          </p>
        </div>

        <div className="Button-buy">
          <Button color="primary" className="button-buy" variant="contained">
            {Add_to_cart}
          </Button>

          <p className="paragraph-buy">
            {money} <span className="preci-monthly">{preciMonthly}</span>{month_when_you_renew}
          </p>
        </div>

        <Divider
          sx={{ background: '#2f1c6a', opacity: 0.3, marginBottom: '10%' }}
        />

        <div className="caption">
          <h2 className="caption-2">{main_functions}</h2>

          <p className="paragraph-Sitio">
            <CheckIcon className="checkIcon" />
            <span className="one">1</span> Sitio Web
            <HelpOutlineIcon className="infoIcon" />
          </p>

          <p className="paragraph-Sitio">
            <CheckIcon className="checkIcon" />
            Rendimiento <span className="one">estándar</span>
          </p>

          <p className="paragraph-Sitio">
            <CheckIcon className="checkIcon" />
            <span className="one">50 GB </span>de SSD
          </p>

          <p className="paragraph-Sitio">
            <CheckIcon className="checkIcon" />
            Copias de seguridad <span className="one">Semanales</span>
            <HelpOutlineIcon className="infoIcon" />
          </p>

          <p className="paragraph-Sitio">
            <CheckIcon className="checkIcon" />
            <span className="one">1</span> cuenta de email
          </p>

          <p className="paragraph-Sitio-2">
            <CheckIcon className="checkIcon-green" />
            SSL <span className="one">ilimitado</span> gratis
            <HelpOutlineIcon className="infoIcon" />
          </p>

          <p className="paragraph-Sitio-2">
            <CheckIcon className="checkIcon-green" />
            Ancho de banda <span className="one">ilimitado</span>
            <HelpOutlineIcon className="infoIcon" />
          </p>

          <p className="paragraph-Sitio-2">
            <ClearIcon className="clearIcon" />
            Dominio <span className="one">gratis</span> (CO$ 41.900)
            <HelpOutlineIcon className="infoIcon" />
          </p>

          <p className="paragraph-Sitio-2">
            <ClearIcon className="clearIcon" />
            CDN <span className="one">Gratis</span>
            <HelpOutlineIcon className="infoIcon" />
          </p>
          
          <p className="paragraph-Sitio-2">
            <ClearIcon className="clearIcon" />
            IP <span className="one">dedicada</span>
            <HelpOutlineIcon className="infoIcon" />
          </p>
        </div>
      </Box>
    </PricingWrapper>
  )
}

export default PricingCard
