import { styled } from '@mui/material'

export const InfoProductWrapper = styled('div')`
  .Box-infoProduct {
    background-color: #ffffff;
    width: 100%;
    display: flex;
    padding: 20px;
    padding-top: 0;
    padding-left: 30px;
    justify-content: center;
    align-self: center;
    flex-direction: column;

    .content-Title {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;

      .paragraph-new {
        display: flex;
        font-size: 0.5;
        text-align: left;
        width: 100%;
      }

      .title {
        display: flex;
        font-size: 1.6em;
        line-height: 1.2em;
        font-weight: bold;
        color: #333333;
        text-align: left;
        width: 100%;

        .FaboriteIcon {
          font-size: 1em;
          color: #fa4879;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-left: auto;
        }
      }

      .Rating {
        display: flex;
        font-size: 1em;
        color: #333333;
        text-align: left;
        width: 100%;
        gap: 6px;
      }

      .marca {
        display: flex;
        text-align: left;
        width: 100%;
        gap: 6px;

        .name-marca {
          font-weight: bold;
          color: #0680f4;
        }
      }

      .price-discount {
        display: flex;
        text-align: left;
        width: 100%;
        gap: 6px;

        .discount {
          color: #fa4879;
          text-decoration: none;
        }
      }

      .Current-Price {
        font-size: 1.5em;
        color: #333333;
        text-align: left;
        width: 100%;
        gap: 6px;
      }
    }

    .send-product {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      gap: 6px;
      border: 1px solid #F4F4F4;
      border-radius: 8px;
      padding: 14px;

      .box-icon {
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        background-color: #1ca390;
      }

      .title-send-product {
        display: flex;
        width: calc(100% - 40px);
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        .titleSend {
          font-size: 1em;
          color: #333333;
          text-align: left;
          width: 100%;
        }

        .paragraph-send {
          font-size: 0.8em;
          color: #333333;
          text-align: left;
          width: 100%;
          margin-bottom: 10px;

          .Deadline {
            color: #1ca390;
            gap: 6px;
          }
        }

        .link-address {
          display: flex;
          font-size: 0.8em;
          text-decoration: none;
          color: #0680f4;
          text-align: left;
          width: 100%;
        }
      }
    }

    .Button {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;

      .Form-control {
        width: 20%;
      }

      .Button-add-to-cart {
        width: 80%;
        height: 52px;
        border-radius: 8px;
        background-color: #FFA500;
      }
    }

    .Button-Wapp {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .Button-whatsapp {
        width: 100%;
        background-color: #1ca390;
        color: #ffffff;
        font-size: 1.5em;
        font-weight: normal;
        border-radius: 8px;

        .WhatsAppIcon {
            font-size: 2em;
        }
      }
    }
  }
`
