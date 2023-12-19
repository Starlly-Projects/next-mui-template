import React from 'react'
import AppBarComponent from '@/shared/AppBars'
import { Body, LayoutBody, LayoutContent } from './styles'
import Head from 'next/head'
import LeftPanel from './LeftPanel'
import BreadCrumbAdmin, { PathItem } from './Breadcrumb/Breadcrump'
import { AppBarTypes } from '../AppBars'

interface Props {
  title?: string
  children?: any
  appbar?: AppBarTypes
  paths?: Array<PathItem>
}

const Layout: React.FC<Props> = ({
  title = 'waref.me',
  appbar = 'primary',
  paths,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <AppBarComponent type={appbar} />

      {(appbar === 'primary' || appbar === 'blog') && (
        <Body className="Body">{children}</Body>
      )}

      {appbar === 'dashboard' && (
        <LayoutBody>
          <LeftPanel />
          <LayoutContent className="LayoutContent">
            <BreadCrumbAdmin paths={paths} />
            <div className="layout-container">{children}</div>
          </LayoutContent>
        </LayoutBody>
      )}
    </>
  )
}

export default Layout
