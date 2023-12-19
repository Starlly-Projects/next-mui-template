import React, { useState } from 'react'
import { InfoProductWrapper } from './styles'
import { Box, Container, Link } from '@mui/material'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import useWords from '@/hooks/useWords'

const InfoProduct = () => {
  const {
    PRODUCT_ID: {
      INFO_PRODUCT: {
        NEW_TEXT,
        SOLD_TEXT,
        PRODUCT_NAME_TEXT,
        BRAND_TEXT,
        BRAND_NAME_TEXT,
        FREE_SHIPPING,
        RECEIVE_IT_FROM,
        DATE_TEXT,
        LOCALITY_TEXT,
        ADDRESS_LINK_TEXT,
        ADD_TO_CART_BUTTON,
        BUY_BUTTON,
      },
    },
  } = useWords()
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <InfoProductWrapper>
      <Container>
        <Box className="Box-infoProduct">
          <div className="content-Title mb-2">
            <p className="paragraph-new flex row gap-1">
              <span>{NEW_TEXT}</span>

              <span className="opacity-5">|</span>

              <span>
                +25 <span>{SOLD_TEXT}</span>
              </span>
            </p>

            <h1 className="title">
              {PRODUCT_NAME_TEXT}
              <FavoriteBorderIcon className="FaboriteIcon" />
            </h1>

            <div className="Rating flex row v-center mt-1">
              <label>4.5</label>

              <Rating name="no-value" value={4} readOnly />

              <label>(4)</label>
            </div>

            <p className="marca">
              {BRAND_TEXT} <span className="name-marca">{BRAND_NAME_TEXT}</span>
            </p>

            <p className="price-discount mt-2">
              <span className="text-off opacity-5">$400.000</span>

              <span className="discount"> - 38%</span>
            </p>

            <h1 className="Current-Price">$3000.000</h1>
          </div>

          <div className="send-product">
            <div className="box-icon">
              <LocalShippingIcon sx={{ color: '#ffffff' }} />
            </div>

            <div className="title-send-product pl-1">
              <h2 className="titleSend">{FREE_SHIPPING}</h2>

              <p className="paragraph-send">
                {RECEIVE_IT_FROM} <span className="Deadline">{DATE_TEXT} </span>
                {LOCALITY_TEXT}
              </p>

              <Link className="link-address">{ADDRESS_LINK_TEXT}</Link>
            </div>
          </div>

          <div className="Button">
            <FormControl
              className="Form-control mt-2 mb-2 mr-1"
              sx={{ minWidth: 100 }}
            >
              <Select
                size="small"
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <em>1</em>
                </MenuItem>

                <MenuItem value={10}>2</MenuItem>
                <MenuItem value={20}>3</MenuItem>
                <MenuItem value={30}>4</MenuItem>
              </Select>
            </FormControl>

            <Button
              className="ProductButton"
              size="large"
              color="warning"
              variant="contained"
              fullWidth
            >
              {ADD_TO_CART_BUTTON}
            </Button>
          </div>

          <div className="Button-Wapp">
            <Button
              className="ProductButton"
              size="large"
              variant="contained"
              startIcon={<WhatsAppIcon className="WhatsAppIcon" />}
              fullWidth
            >
              {BUY_BUTTON}
            </Button>
          </div>
        </Box>
      </Container>
    </InfoProductWrapper>
  )
}

export default InfoProduct
