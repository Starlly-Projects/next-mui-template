import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import DashboardIcon from '@mui/icons-material/Dashboard'
import useWords from '@/hooks/useWords'

export interface MenuItemProps {
  id: string
  label: string
  href?: string
  icon: any
  active?: boolean
}

export interface GroupItemProps {
  title?: string
  menu: Array<MenuItemProps>
}

export const useMenuList = () => {
  const {
    LEFT_PANEL: {
      ADMINISTRATOR: {
        ADMINISTER_TEXT,
        PROFILE_TEXT,
        LINKS_TEXT,
        PRODUCTS_TEXT,
        INVOICE_TEXT,
      },
      PLANS: {
        PLANS_TEXT,
        SINGLE_TEXT,
        PREMIUM_TEXT,
        BUSINESS_TEXT,
      },
      MORE: {
        MORE_TITLE,
        NAME_PAGE,
        ADVERTISE_TEXT,
        ASSISTANCE,
      }
    },
  } = useWords()

  const NORMAL_MENU: Array<GroupItemProps> = [
    {
      menu: [
        {
          id: 'admin',
          label: 'Dashboard',
          href: '/dashboard',
          icon: <DashboardIcon />,
          active: true,
        },
      ],
    },
    {
      title: ADMINISTER_TEXT,
      menu: [
        {
          id: 'profile',
          label: PROFILE_TEXT,
          href: '/dashboard/profile',
          icon: <AccountCircleRoundedIcon />,
        },
        {
          id: 'links',
          href: '/dashboard/links',
          label: LINKS_TEXT,
          icon: <AttachFileRoundedIcon />,
        },
        {
          id: 'products',
          href: '/dashboard/products',
          label: PRODUCTS_TEXT,
          icon: <CategoryOutlinedIcon />,
        },
        {
          id: 'facturation',
          href: '/dashboard/facturation',
          label: INVOICE_TEXT,
          icon: <CategoryOutlinedIcon />,
        },
      ],
    },
    {
      title: PLANS_TEXT,
      menu: [
        {
          id: 'Free',
          label: SINGLE_TEXT,
          href: '/dashboard/plans/free',
          icon: <AcUnitOutlinedIcon />,
        },
        {
          id: 'Bussiness',
          label: PREMIUM_TEXT,
          href: '/dashboard/plans/business',
          icon: <ShoppingBagOutlinedIcon />,
        },
        {
          id: 'Startup',
          label: BUSINESS_TEXT,
          href: '/dashboard/plans/startup',
          icon: <WorkspacePremiumOutlinedIcon />,
        },
      ],
    },
    {
      title: MORE_TITLE,
      menu: [
        {
          id: 'aboutwaref',
          href: '/dashboard/about',
          label: NAME_PAGE,
          icon: <InfoOutlinedIcon />,
        },
        {
          id: 'add',
          href: '/dashboard/publisher',
          label: ADVERTISE_TEXT,
          icon: <DomainAddOutlinedIcon />,
        },
        {
          id: 'help',
          href: '/dashboard/help',
          label: ASSISTANCE,
          icon: <HelpOutlineOutlinedIcon />,
        },
      ],
    },
  ]

  return { NORMAL_MENU }
}
