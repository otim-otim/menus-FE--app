import React, { useState } from 'react'
import { Menu } from '../../Types'
import { menusState } from '../../store'
import {
    useRecoilValue, 
} from 'recoil'

import { fetchMenus } from '../../services/Menus.service'

export default function Menus() {

    fetchMenus()
  const menusItems = useRecoilValue(menusState)

//   const setMenuItem = useSetRecoilState(menusState)

  const renderMenu = (menu: Menu) => {
    return (
      <div key={menu.id}>
        <span>{menu.name}</span>
        {menu.children && menu.children.length > 0 && (
          <ul>
            {menu.children.map((child) => (
              <li key={child.id}>{renderMenu(child)}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  return (
    <div className="w-310 h-710 top-368 left-312 gap-0 border-t border-blue-gray-400 opacity-1">
      {menusItems.map((menu) => (
        <div key={menu.id}>{renderMenu(menu)}</div>
      ))}
    </div>
  )
}