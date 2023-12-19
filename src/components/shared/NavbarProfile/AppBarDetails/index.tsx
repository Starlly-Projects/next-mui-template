import { Button, Container, Skeleton } from '@mui/material'
import { AppBarDetailsWrapper } from './styles'
import Rating from '@mui/material/Rating'
import useWords from '@/hooks/useWords'
import { NavbarProfileType } from '..'
import AvatarUser from './AvatarUser'
import { getAvatarName } from '@/utils/parsers'
import { CallbackType } from '../../Types/types'
import { getFirstWord } from '../../../../utils/parsers'

interface Props {
  user?: UserInterface
  profileSrc?: string
  navbarType?: NavbarProfileType
  showFollowButton?: boolean
  onChange?: CallbackType<any>
  loading?: boolean
}

const AppBarDetails: React.FC<Props> = ({
  navbarType = 'normal',
  showFollowButton = true,
  user,
  profileSrc,
  onChange,
  loading,
}) => {
  const {
    PROFILE_PAGE: {
      APPBAR_DETAILS: { FOLLOWERS_TEXT, RATING_TEXT, FOLLOW_BUTTON_TEXT },
    },
  } = useWords()

  return (
    <>
      <AppBarDetailsWrapper>
        <Container>
          <div className="appbar-container flex row">
            <div className="avatar-container">
              <AvatarUser
                src={profileSrc}
                user={user}
                navbarType={navbarType}
                defaultText={getAvatarName(user)}
                onChange={onChange}
              />
            </div>

            <div className="container">
              <div className="item-details fullName">
                {loading ? (
                  <Skeleton variant="text" className="label_skeleton" />
                ) : (
                  <label className="label">
                    {getFirstWord(user?.firstName)}{' '}
                    {getFirstWord(user?.lastName)}
                  </label>
                )}

                {loading ? (
                  <Skeleton variant="text" className="description_skeleton" />
                ) : (
                  <label className="description">@{user?.username}</label>
                )}
              </div>

              <div className="item-details">
                {loading ? (
                  <Skeleton variant="text" className="label_skeleton" />
                ) : (
                  <label className="label text-center">
                    {user?.followers || 0}
                  </label>
                )}

                {loading ? (
                  <Skeleton variant="text" className="description_skeleton" />
                ) : (
                  <label className="description text-center">
                    {FOLLOWERS_TEXT}
                  </label>
                )}
              </div>

              <div className="item-details">
                {loading ? (
                  <Skeleton variant="text" className="label_skeleton" />
                ) : (
                  <Rating name="read-only" value={user?.rating} readOnly />
                )}

                {loading ? (
                  <Skeleton variant="text" className="description_skeleton" />
                ) : (
                  <label className="description text-center">
                    {user?.rating === 0 ? RATING_TEXT : 'Sin calificación'}
                  </label>
                )}
              </div>

              {showFollowButton && (
                <div className="item-details btn-container">
                  <Button
                    variant="contained"
                    className="btn-follow"
                    sx={{ mb: 0 }}
                  >
                    {FOLLOW_BUTTON_TEXT}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </AppBarDetailsWrapper>
    </>
  )
}

export default AppBarDetails
