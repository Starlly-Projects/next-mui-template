import ButtonComponent from '../../Button'
import { CoverWrapper, CoverWrapperSkeleton } from './styles'
import { CallbackType } from '../../Types/types'
import AttachLayout from '../../AttachLayout'
import { useContext } from 'react'
import { AuthContext } from '@/store/context/AuthContext'

interface Props {
  user?: UserInterface
  loading?: boolean
  src?: string
  onChange?: CallbackType<File>
}

const CoverComponent: React.FC<Props> = ({ src, user, loading, onChange }) => {
  const { user: authUser } = useContext(AuthContext)
  const isEqual = user?._id === authUser?._id

  return (
    <>
      <AttachLayout actived={isEqual} onChange={onChange}>
        {({ imageSrc, handleClick }) => (
          <>
            {loading ? (
              <CoverWrapperSkeleton
                variant="rectangular"
                className="CoverWrapper_skeleton"
              />
            ) : (
              <CoverWrapper
                className="CoverWrapper"
                style={
                  src || imageSrc
                    ? {
                        backgroundImage: `url('${imageSrc || src}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              >
                {isEqual && (
                  <ButtonComponent
                    variant="black-camera"
                    className="btnChangeImage"
                    label="Editar poster"
                    onClick={handleClick}
                    circular
                  />
                )}
              </CoverWrapper>
            )}
          </>
        )}
      </AttachLayout>
    </>
  )
}

export default CoverComponent
