import React from 'react'
import { AdminLayoutWrapper } from './styles'
import Head from 'next/head'

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
      <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
    </>
  )
}

export default AdminLayout
