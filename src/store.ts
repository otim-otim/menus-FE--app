import { atom } from 'recoil'


import { Menu } from './Types'

export const menusState = atom({
    key: 'menusState', // unique ID (with respect to other atoms/selectors)
    default: [
        
            // {
            //   id: 1,
            //   name: 'Menu 1',
            //   parent: null,
            //   depth: 1,
            //   children: [
            //     {
            //       id: 11,
            //       name: 'Menu 1.1',
            //       parent: 1,
            //       depth: 2,
            //       children: [
            //         {
            //           id: 111,
            //           name: 'Menu 1.1.1',
            //           parent: 11,
            //           depth: 3,
            //           children: [],
            //         },
            //         {
            //           id: 112,
            //           name: 'Menu 1.1.2',
            //           parent: 11,
            //           depth: 3,
            //           children: [],
            //         },
            //         {
            //           id: 113,
            //           name: 'Menu 1.1.3',
            //           parent: 11,
            //           depth: 3,
            //           children: [],
            //         },
            //       ],
            //     },
            //     {
            //       id: 12, // added id
            //       name: 'Menu 1.2',
            //       parent: 1,
            //       depth: 2,
            //       children: [
            //         {
            //           id: 121,
            //           name: 'Menu 1.2.1',
            //           parent: 12,
            //           depth: 3,
            //           children: [],
            //         },
            //         {
            //           id: 122,
            //           name: 'Menu 1.2.2',
            //           parent: 12,
            //           depth: 3,
            //           children: [],
            //         },
            //         {
            //           id: 123,
            //           name: 'Menu 1.2.3',
            //           parent: 12,
            //           depth: 3,
            //           children: [],
            //         },
            //       ],
            //     },
            //     {
            //       id: 13, // added id
            //       name: 'Menu 1.3',
            //       parent: 1,
            //       depth: 2,
            //       children: [],
            //     },
            //   ],
            // },
            // {
            //   id: 2,
            //   name: 'Menu 2',
            //   parent: null,
            //   depth: 1,
            //   children: [
            //     {
            //       id: 21,
            //       name: 'Menu 2.1',
            //       parent: 2,
            //       depth: 2,
            //       children: [],
            //     },
            //     {
            //       id: 22,
            //       name: 'Menu 2.2',
            //       parent: 2,
            //       depth: 2,
            //       children: [],
            //     },
            //     {
            //       id: 23,
            //       name: 'Menu 2.3',
            //       parent: 2,
            //       depth: 2,
            //       children: [],
            //     },
            //   ],
            // },
            // {
            //   id: 3,
            //   name: 'Menu 3',
            //   parent: null,
            //   depth: 1,
            //   children: [],
            // },
            // {
            //   id: 4,
            //   name: 'Menu 4',
            //   parent: null,
            //   depth: 1,
            //   children: [],
            // },
          
    ] as Menu[] // default value is an array of Menu objects with initial values
})

export const selectedMenuState = atom({
    key: 'selectedMenuState', // unique ID (with respect to other atoms/selectors)
    default: null as Menu | null // default value (aka initial value)
  })

  export const menuFetchingState = atom({
    key: 'menuFetchingState', // unique ID (with respect to other atoms/selectors)
    default: null as null | 'pending'| 'error' | 'success' // default value (aka initial value)
  })