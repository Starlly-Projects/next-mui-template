import React, { Fragment } from 'react'
import { List, ListItemButton, ListSubheader, ToolTipCustom } from './styles'
import classnames from 'classnames'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { GroupItemProps, useMenuList } from './menuLists'
import useRouterPath from '@/modules/core/hooks/useRouterPath'

const MenuListComponent = ({ type }: any) => {
  const { comparePath } = useRouterPath()
  const { NORMAL_MENU } = useMenuList()
  const isNormal = type === 'NORMAL'
  const menuList: Array<GroupItemProps> = NORMAL_MENU

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
            {group.menu.map((item: any, menuIndex: any) => (
              <Fragment key={menuIndex}>
                <li>
                  <Link href={item.href || '/'} className="text-undecorated">
                    <ListItemButton
                      className={classnames({
                        active: comparePath(item.href),
                      })}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>

                      <ListItemText primary={item.label} />

                      <ToolTipCustom className="ToolTip">
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <span className="label">{item.label}</span>
                      </ToolTipCustom>
                    </ListItemButton>
                  </Link>
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
