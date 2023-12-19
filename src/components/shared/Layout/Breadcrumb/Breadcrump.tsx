import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { Typography } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { BreadcrumbWrapper } from './styles'

export interface PathItem {
  href?: string
  label?: string
  icon?: any
}

interface Props {
  paths?: Array<PathItem>
}

const defaultPaths: Array<PathItem> = [
  { label: 'Dashboard', href: '/dashboard', icon: <DashboardIcon /> },
]

const BreadCrumbAdmin: React.FC<Props> = ({ paths }) => {
  const getPaths = (): Array<PathItem> => {
    const pathsValues: Array<PathItem> = [...defaultPaths, ...(paths || [])]
    if (pathsValues.length == 1) {
      return [{ ...pathsValues[0], href: undefined }]
    }

    return pathsValues
  }

  return (
    <BreadcrumbWrapper>
      <div className="Breadcrumb">
        <Breadcrumbs className="Breadcrumbs" aria-label="breadcrumb">
          {getPaths().map((item, index) => (
            <div className="breadcrumb-item" key={index}>
              {!item.href && (
                <Typography className="breadcrumb-text flex middle">
                  {item.icon}
                  <span className="ml-1">{item.label}</span>
                </Typography>
              )}

              {item.href && (
                <Link href={item.href} key={index} className="flex middle">
                  {item.icon}
                  <span className="ml-1">{item.label}</span>
                </Link>
              )}
            </div>
          ))}
        </Breadcrumbs>
      </div>
    </BreadcrumbWrapper>
  )
}

export default BreadCrumbAdmin
