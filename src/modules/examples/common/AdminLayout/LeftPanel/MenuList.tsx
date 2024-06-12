import React, { Fragment, useState } from 'react'
import { List, ListItemButton, ListSubheader, ToolTipCustom } from './styles'
import classnames from 'classnames'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { GroupItemProps, MenuItemProps, useMenuList } from './menuLists'
import useRouterPath from '@/modules/core/hooks/useRouterPath'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const MenuItem = ({
  item,
  currentMenuId,
  comparePath,
}: {
  item: MenuItemProps
  currentMenuId?: string
  comparePath: any
}) => {
  return (
    <>
      <ListItemButton
        className={classnames({
          active: comparePath(item.href),
        })}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>

        <ListItemText primary={item.label} />

        <ToolTipCustom className='ToolTip'>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <span className='label'>{item.label}</span>
        </ToolTipCustom>

        {item.menu && <KeyboardArrowDownIcon className='caret-icon' />}
      </ListItemButton>

      {item?.menu && (
        <ul className='submenu'>
          {item.menu.map((menuItem, menuItemIndex) => (
            <li key={menuItemIndex}>
              <MenuItem
                item={menuItem}
                comparePath={comparePath}
                currentMenuId={currentMenuId}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

const MenuListComponent = ({ type }: any) => {
  const { comparePath } = useRouterPath()
  const { NORMAL_MENU } = useMenuList()
  const isNormal = type === 'NORMAL'
  const menuList: Array<GroupItemProps> = NORMAL_MENU
  const [currentMenuItemId, setCurrentMenuItemId] = useState<string>()

  return (
    <>
      {menuList.map((group: any, index: any) => (
        <Fragment key={index}>
          <List
            subheader={
              group.title ? (
                <ListSubheader>{group.title}</ListSubheader>
              ) : undefined
            }
          >
            {group.menu.map((item: MenuItemProps, menuIndex: any) => (
              <Fragment key={menuIndex}>
                <li>
                  {item?.href && (
                    <Link href={item.href || '/'} className='text-undecorated'>
                      <MenuItem
                        item={item}
                        comparePath={comparePath}
                        currentMenuId={currentMenuItemId}
                      />
                    </Link>
                  )}
                  {!item?.href && (
                    <MenuItem
                      item={item}
                      comparePath={comparePath}
                      currentMenuId={currentMenuItemId}
                    />
                  )}
                </li>
                {!isNormal && group.menu.length - 1 !== menuIndex && (
                  <Divider />
                )}
              </Fragment>
            ))}
          </List>

          {index !== menuList.length - 1 && <Divider />}
        </Fragment>
      ))}
    </>
  )
}

export default MenuListComponent
