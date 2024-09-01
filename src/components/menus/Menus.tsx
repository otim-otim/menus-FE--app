import React, { useState } from 'react'
import { Menu } from '../../Types'

export default function Menus() {
  const [submenu1, setSubmenu1] = useState(false)

  const menus: Menu[] = [
    {
      id: 1,
      name: 'Menu 1',
      parent: null,
      depth: 1,
      children: [
        {
          id: 11,
          name: 'Menu 1.1',
          parent: 1,
          depth: 2,
          children: [
            {
              id: 111,
              name: 'Menu 1.1.1',
              parent: 11,
              depth: 3,
              children: [],
            },
            {
              id: 112,
              name: 'Menu 1.1.2',
              parent: 11,
              depth: 3,
              children: [],
            },
            {
              id: 113,
              name: 'Menu 1.1.3',
              parent: 11,
              depth: 3,
              children: [],
            },
          ],
        },
        {
          id: 12, // added id
          name: 'Menu 1.2',
          parent: 1,
          depth: 2,
          children: [
            {
              id: 121,
              name: 'Menu 1.2.1',
              parent: 12,
              depth: 3,
              children: [],
            },
            {
              id: 122,
              name: 'Menu 1.2.2',
              parent: 12,
              depth: 3,
              children: [],
            },
            {
              id: 123,
              name: 'Menu 1.2.3',
              parent: 12,
              depth: 3,
              children: [],
            },
          ],
        },
        {
          id: 13, // added id
          name: 'Menu 1.3',
          parent: 1,
          depth: 2,
          children: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Menu 2',
      parent: null,
      depth: 1,
      children: [
        {
          id: 21,
          name: 'Menu 2.1',
          parent: 2,
          depth: 2,
          children: [],
        },
        {
          id: 22,
          name: 'Menu 2.2',
          parent: 2,
          depth: 2,
          children: [],
        },
        {
          id: 23,
          name: 'Menu 2.3',
          parent: 2,
          depth: 2,
          children: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Menu 3',
      parent: null,
      depth: 1,
      children: [],
    },
    {
      id: 4,
      name: 'Menu 4',
      parent: null,
      depth: 1,
      children: [],
    },
  ]

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
      {menus.map((menu) => (
        <div key={menu.id}>{renderMenu(menu)}</div>
      ))}
    </div>
  )
}