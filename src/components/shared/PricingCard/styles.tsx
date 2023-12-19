import { styled } from '@mui/material'

export const PricingWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;

  .Voucher {
    background-color: #ffffff;
    width: 100%;
    display: flex;
    padding: 20px;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    margin-bottom: 30px;

    &:hover {
      transform: scale(1.02) translateY(-1rem);
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
    }

    .content-Title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 5%;

      .title {
        display: flex;
        font-size: 1.5em;
        font-weight: bold;
        color: #291d5d;
      }

      .paragraph {
        display: flex;
        font-size: 1em;
        color: #291d5d;
        text-align: center;
      }
    }

    .content-preci {
      display: flex;
      margin-top: 20px;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;

      .paragraph-preci {
        font-size: 1em;
        color: #291d5d;
        text-align: center;
        margin-right: 3%;
      }

      .button {
        background-color: #e8e1fe;
        color: #452bc6;
        font-weight: bold;
        border-radius: 50px;
      }
    }

    .content-preci-2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .paragraph-preci-2 {
      color: #291d5d;
      font-size: 1em;
    }

    .preci {
      color: #291d5d;
      font-weight: bold;
      font-size: 2em;
    }

    .Button-buy {
      display: flex;
      margin-top: 5%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 5%;

      .button-buy {
        width: 100%;
        text-transform: none;
        margin-bottom: 4%;
      }

      .paragraph-buy {
        font-size: 1em;
        color: #291d5d;
        text-align: center;
        align-items: center;
        opacity: 0.4;
      }

      .preci-monthly {
        text-align: center;
        align-items: center;
      }
    }

    .caption {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 5%;

      .caption-2 {
        font-size: 1.5em;
        color: #291d5d;
        text-align: left;
        margin-bottom: 10px;
      }

      .paragraph-Sitio {
        display: flex;
        font-size: 0.9em;
        color: #291d5d;
        text-align: left;
        gap: 6px;
        width: 100%;

        .one {
          font-weight: bold;
        }

        .checkIcon {
          font-size: 1em;
          color: #ffc441;
          align-items: center;
          font-weight: bold;
        }

        .infoIcon {
          font-size: 1.5em;
          align-items: center;
          margin-left: auto;
          color: #0680f4;
        }
      }

      .paragraph-Sitio-2 {
        display: flex;
        font-size: 0.9em;
        color: #291d5d;
        text-align: left;
        gap: 6px;
        width: 100%;

        .one {
          font-weight: bold;
        }

        .clearIcon {
          font-size: 1em;
          color: #fa4879;
          align-items: center;
          font-weight: bold;
        }

        .checkIcon-green {
          font-size: 1em;
          color: #15a686;
          align-items: center;
          font-weight: bold;
        }

        .infoIcon {
          font-size: 1.5em;
          align-items: center;
          margin-left: auto;
          color: #0680f4;
        }
      }
    }
  }

  &.bg-orange {
    .Voucher {
      background-color: orange;
    }
  }
  &.business {
    .Voucher {
      background-color: blue;
    }
  }
`
