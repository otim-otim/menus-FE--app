import * as React from "react"
import { useRecoilState, useRecoilValue , useSetRecoilState} from 'recoil'
import { selectedParentMenuState, menusState } from '../../store'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from '../../Types'


export default function ParentMenuDropdown() {
  const [position, setPosition] = React.useState("bottom")

    const [selectedParentMenu, setSelectedParentMenu] = useRecoilState(selectedParentMenuState);
    const menus = useRecoilValue(menusState);

    const handleItemClick = (menuId: string) => {
      const menu: Menu | undefined = menus.find((menu: Menu) => menu.id === menuId);
      setSelectedParentMenu(menu);
    };

    return (
        <div className=" text-left" style={{ width: '349px', height: '74px', top: '204px', left: '312px', opacity: 1 }}>
          Menu

          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {selectedParentMenu?.name}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
        {menus.map(menu => (
    <DropdownMenuRadioItem
      key={menu.name}
      value={menu.id}
      onClick={() => handleItemClick(menu.id)}

    >
      {menu.name}
    </DropdownMenuRadioItem>
  ))}
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
       
      </div>
      

    )
}






