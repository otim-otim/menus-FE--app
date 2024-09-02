import { atom, selector } from 'recoil';
import { Menu } from './Types';

export const menusState = atom({
  key: 'menusState', // unique ID (with respect to other atoms/selectors)
  default: [] as Menu[], // default value is an array of Menu objects with initial values
});

export const selectedParentMenuState = atom({
  key: 'selectedParentMenuState', // unique ID (with respect to other atoms/selectors)
  default: selector({
    key: 'defaultSelectedParentMenu',
    get: ({ get }) => {
      const menus = get(menusState);
      return menus.length > 0 ? menus[0] : null;
    },
  }),
});

export const selectedMenuState = atom({
  key: 'selectedMenuState', // unique ID (with respect to other atoms/selectors)
  default: selector({
    key: 'defaultSelectedMenu',
    get: ({ get }) => {
      return get(selectedParentMenuState);
    },
  }),
});

export const menuFetchingState = atom({
  key: 'menuFetchingState', // unique ID (with respect to other atoms/selectors)
  default: null as null | 'pending' | 'error' | 'success', // default value (aka initial value)
});
export const menuStoringState = atom({
  key: 'menuStoringState', // unique ID (with respect to other atoms/selectors)
  default: null as null | 'pending' | 'error' | 'success', // default value (aka initial value)
});

export const parentMenuState = selector({
  key: 'parentMenuState',
  get: ({get}) => {
    const menus = get(menusState);

    return menus.filter((menu) => menu.parent === null);
  },
});
