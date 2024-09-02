import React, { useState } from 'react'
import { Menu } from '../../Types'
import { selectedParentMenuState } from '../../store'
import {
    useRecoilValue, 
} from 'recoil'

import { fetchMenus } from '../../services/Menus.service'

export default function Menus() {

    fetchMenus()
  const menu = useRecoilValue(selectedParentMenuState)

  const children = menu? menu.children : []
  // const [selectedParentMenu, setSelectedParentMenu] = useRecoilState(selectedParentMenuState);

//   const setMenuItem = useSetRecoilState(menusState)

  const renderChildMenu = (menu: Menu) => {
    const children = menu.children
    if(children.length === 0) return <li className="py-2 relative">{menu.name}</li>
    return (
      <li className="py-2 relative">{menu.name}
      <ul className="list-none p-0 m-0">
        {menu.name}
        {children.map((menu) => (
          renderChildMenu(menu)
          
          
        ))}
        </ul>
   </li>
     
 
    )
  }

  return (
    

<ul className="nested-list list-none p-0 m-0">{menu?.name}
{children.map((menu) => renderChildMenu(menu))}

</ul>
  )
}