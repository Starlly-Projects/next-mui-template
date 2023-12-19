import { NavbarProfileWrapper } from './styles'
import CoverComponent from '@/shared/NavbarProfile/Cover'
import { Divider } from '@mui/material'
import AppBarDetails from './AppBarDetails'
import React from 'react'
import { CallbackType } from '../Types/types'

export type NavbarProfileType = 'normal' | 'admin'

interface Props {
  type?: NavbarProfileType
  user?: UserInterface
  profileSrc?: string
  coverSrc?: string
  onChangeProfileImage?: CallbackType<any>
  onChangePosterImage?: CallbackType<any>
  loading?: boolean
}

const NavbarProfileComponent: React.FC<Props> = ({
  type = 'normal',
  user,
  profileSrc,
  coverSrc,
  onChangeProfileImage,
  onChangePosterImage,
  loading,
}) => {
  return (
    <NavbarProfileWrapper>
      <CoverComponent
        src={coverSrc}
        user={user}
        onChange={onChangePosterImage}
        loading={loading}
      />

      <Divider />

      <AppBarDetails
        user={user}
        profileSrc={profileSrc}
        showFollowButton={false}
        navbarType={type}
        onChange={onChangeProfileImage}
        loading={loading}
      />

      <Divider />
    </NavbarProfileWrapper>
  )
}

export default NavbarProfileComponent
