import React from 'react'
import PrimaryAppBar from '@/shared/AppBars/PrimaryAppBar'
import DashboardAppBar from './DashboardAppBar'
import AppbarBlogComponent from './AppbarBlogComponent'

export type AppBarTypes = 'primary' | 'dashboard' | 'blog'

interface Props {
  type: AppBarTypes
}

const AppBarComponent: React.FC<Props> = ({ type }) => {
  const getAppBar = (): any => {
    switch (type) {
      case 'dashboard':
        return <DashboardAppBar />
      case 'blog':
        return <AppbarBlogComponent />
      default:
        return <PrimaryAppBar />
    }
  }

  return getAppBar()
}

export default AppBarComponent
