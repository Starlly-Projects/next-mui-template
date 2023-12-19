import React, { useContext } from 'react'
import { AvatarUserContent } from '../Cover/styles'
import { Avatar, Skeleton } from '@mui/material'
import classNames from 'classnames'
import ButtonComponent from '../../Button'
import { NavbarProfileType } from '../index'
import { deepPurple } from '@mui/material/colors'
import { CallbackType } from '../../Types/types'
import AttachLayout from '../../AttachLayout'
import { AuthContext } from '@/store/context/AuthContext'

interface Props {
  src?: string
  user?: UserInterface
  navbarType: NavbarProfileType
  defaultText?: string
  onChange?: CallbackType<any>
  loading?: boolean
}

const AvatarUser: React.FC<Props> = ({
  src,
  user,
  navbarType,
  defaultText,
  onChange,
  loading = false,
}) => {
  const { user: authUser } = useContext(AuthContext)
  const isEqual = user?._id === authUser?._id

  return (
    <AttachLayout actived={isEqual} onChange={onChange}>
      {({ imageSrc, handleClick }) => (
        <AvatarUserContent
          className={classNames('AvatarUser', {
            admin: navbarType === 'admin',
          })}
        >
          {loading ? (
            <Skeleton variant="circular" className="avatarSrc_skeleton" />
          ) : (
            <Avatar src={imageSrc || src} sx={{ bgcolor: deepPurple[500] }}>
              {defaultText}
            </Avatar>
          )}
          {isEqual && (
            <ButtonComponent
              variant="black-camera"
              className="btnUpdatePhoto"
              onClick={handleClick}
            />
          )}
        </AvatarUserContent>
      )}
    </AttachLayout>
  )
}

export default AvatarUser
