import React from 'react'
import { AdminLayoutWrapper, Body } from './styles'
import Head from 'next/head'
import LeftPanel from './LeftPanel'

interface Props {
  title?: string
  children?: React.ReactElement | React.ReactElement[]
}
const AdminLayout: React.FC<Props> = ({
  title = process.env.APP_NAME,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <AdminLayoutWrapper>
        <LeftPanel />

        <Body>{children}</Body>
      </AdminLayoutWrapper>
    </>
  )
}

export default AdminLayout
