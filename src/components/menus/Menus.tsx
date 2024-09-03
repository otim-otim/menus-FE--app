import React, { useState } from 'react'
import { Menu } from '../../Types'
import { selectedParentMenuState, selectedMenuState } from '../../store'
import {
    useRecoilValue, 
    useSetRecoilState
} from 'recoil'

import { fetchMenus } from '../../services/Menus.service'
import AddMenuButton from './AddMenuButton'

export default function Menus() {

    fetchMenus()
  const menu = useRecoilValue(selectedParentMenuState)

  const children = menu? menu.children : []
  // const [selectedParentMenu, setSelectedParentMenu] = useRecoilState(selectedParentMenuState);

  const setSelectedMenu = useSetRecoilState(selectedMenuState)

  const selectMenuItem = (menu: Menu) => {
    setSelectedMenu(menu)
  }

  const renderChildMenu = (menu: Menu) => {
    const children = menu.children
    if(children.length === 0) 
      return (
          <li className="py-2 relative" key={menu.id} onClick={() =>selectMenuItem(menu)}>
            {menu.name}
            <AddMenuButton menu={menu} />
            </li>)
    return (
      <li className="py-2 relative" key={menu.id} onClick={() =>selectMenuItem(menu)}>{menu.name}
      <ul className="list-none p-0 m-0">
        {menu.name}
        <AddMenuButton menu={menu} />
        {children.map((menu) => (
          renderChildMenu(menu)
          
          
        ))}
        </ul>
   </li>
     
 
    )
  }

  if(menu === null) return null

  return (
    

<ul className="nested-list list-none p-0 m-0">{menu?.name}
  <AddMenuButton menu={menu} />
{children.map((menu) => renderChildMenu(menu))}

</ul>
  )
}