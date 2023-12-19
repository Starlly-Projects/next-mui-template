import { styled } from '@mui/material'

export const MobileDetailsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  justify-content: center;
`

export const AppBarDetailsWrapper = styled('div')`
  background-color: #ffffff;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .avatarTest {
    width: 300px;
    height: 300px;
  }

  .avatar-container {
    position: relative;

    .AvatarUser {
      margin-top: -60%;

      .avatarSrc_skeleton {
        width: 130px;
        height: 130px;
      }
    }
  }

  .container {
    display: flex;

    @media (max-width: 1098px) {
      font-size: 0.9em;
    }

    .item-details {
      display: flex;
      flex-direction: column;
      width: max-content;
      min-width: 200px;
      padding: 10px 30px;
      border-right: 1px solid #dfdfdf;

      &.fullName {
        min-width: 230px;
      }

      @media (max-width: 900px) {
        font-size: 0.7em;
      }

      &.btn-container {
        display: flex;
        justify-content: center;

        button {
          border-radius: 30px;
          padding-left: 30px;
          padding-right: 30px;
        }
      }

      &:last-child {
        border: none;
      }

      .label {
        font-size: 1.6em;
        font-weight: bold;
        line-height: 1em;
      }

      .label_skeleton {
        width: 100%;
        height: 35px;
      }

      .description {
        color: #666666;
      }

      .description_skeleton {
        width: 100%;
        margin-top: -5px;
      }
    }
  }
`
