import { styled } from '@mui/material'

export const ProductCardWarapper = styled('div')`
  width: 100%;

  .Box-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: start;

    @media screen and (max-width: 720px) {
      align-items: center;
    }

    .box-left {
      display: flex;
      width: 100px;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 10px;

      .Box-images {
        display: flex;
        width: 74%;
        aspect-ratio: 1;

        @media screen and (max-width: 720px) {
          width: 50%;
        }

        .Mi-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      }
    }

    .Box-image-principal {
      display: flex;
      width: 100%;
      aspect-ratio: 1;
      justify-content: center;
      align-items: center;

      .Mi-image-principal {
        width: 90%;
        height: 90%;
        border-radius: 30px;
        object-fit: cover;
        align-self: flex-start;

        @media screen and (max-width: 720px) {
          width: 100%;
          align-self: center;
          margin-right: 30px;
        }
      }
    }
  }
`
