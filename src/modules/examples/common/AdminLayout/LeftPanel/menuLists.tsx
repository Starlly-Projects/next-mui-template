import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { Add } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import StarsIcon from '@mui/icons-material/Stars'
import StarRateIcon from '@mui/icons-material/StarRate'
import PeopleIcon from '@mui/icons-material/People'
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import { ROUTES } from '@/constants/site.routes'
import useWords from '@/modules/core/hooks/useWords'

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
   
  } = useWords()

  const NORMAL_MENU: Array<GroupItemProps> = [
    {
      menu: [
        {
          id: 'home',
          label: 'Para ti',
          href: ROUTES.HOME,
          icon: <HomeIcon />,
          active: true,
        },
        {
          id: 'popular',
          label: 'Popular',
          href: '/popular',
          icon: <StarsIcon />,
        },
        {
          id: 'popular',
          label: 'Suscrito',
          href: '/popular',
          icon: <CardMembershipIcon />,
        },
        {
          id: 'popular',
          label: 'Siguiendo',
          href: '/popular',
          icon: <PeopleIcon />,
        },
        {
          id: 'popular',
          label: 'Favoritos',
          href: '/popular',
          icon: <StarRateIcon />,
        },
      ],
    },
    {
      title: 'Comunidades',
      menu: [
        {
          id: 'new',
          label: 'Crear una comunidad',
          href: '/dashboard/plans/free',
          icon: <Add />,
        },
        {
          id: 'Free',
          label: 'Free',
          href: '/dashboard/plans/free',
          icon: <AcUnitOutlinedIcon />,
        },
        {
          id: 'Bussiness',
          label: 'Personas',
          href: '/dashboard/plans/business',
          icon: <ShoppingBagOutlinedIcon />,
        },
        {
          id: 'Startup',
          label: "Bussines text",
          href: '/dashboard/plans/startup',
          icon: <WorkspacePremiumOutlinedIcon />,
        },
      ],
    },
    {
      title: 'Géneros',
      menu: [
        // {
        //   id: 'profile',
        //   label: 'Todos',
        //   href: '/dashboard/profile',
        //   icon: <AccountCircleRoundedIcon />,
        // },
        {
          id: 'profile',
          label: 'Chicas',
          href: '/dashboard/profile',
          icon: <AccountCircleRoundedIcon />,
        },
        {
          id: 'links',
          href: '/dashboard/links',
          label: 'Chicos',
          icon: <AttachFileRoundedIcon />,
        },
        {
          id: 'facturation',
          href: '/dashboard/facturation',
          label: 'Cosplay',
          icon: <CategoryOutlinedIcon />,
        },
        {
          id: 'products',
          href: '/dashboard/products',
          label: 'LGTB',
          icon: <CategoryOutlinedIcon />,
        },
      ],
    },
    {
      title: "Más",
      menu: [
        {
          id: 'aboutwaref',
          href: '/dashboard/about',
          label: "Nosotros",
          icon: <InfoOutlinedIcon />,
        },
        {
          id: 'add',
          href: '/dashboard/publisher',
          label: "Publicar",
          icon: <DomainAddOutlinedIcon />,
        },
        {
          id: 'help',
          href: '/dashboard/help',
          label: "Soporte",
          icon: <HelpOutlineOutlinedIcon />,
        },
      ],
    },
  ]

  return { NORMAL_MENU }
}
