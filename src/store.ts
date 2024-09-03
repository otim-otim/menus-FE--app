import { atom, selector } from 'recoil';
import { Menu } from './Types';
import AddMenuButton from './components/menus/AddMenuButton';

export const menusState = atom({
  key: 'menusState', // unique ID (with respect to other atoms/selectors)
  default: [] as Menu[], // default value is an array of Menu objects with initial values
});

// Define selectedParentMenuState
export const selectedParentMenuState = atom({
  key: 'selectedParentMenuState',
  default: selector({
    key: 'defaultSelectedParentMenu',
    get: ({ get }) => {
      const menus = get(menusState);
      return menus.length > 0 ? menus[0] : null;
    },
  }),
});

// Define selectedMenuState
export const selectedMenuState = atom({
  key: 'selectedMenuState',
  default: selector({
    key: 'defaultSelectedMenu',
    get: ({ get }) => {
      return get(selectedParentMenuState); // Initial default value is tied to selectedParentMenuState
    },
  }),
});

// Define a selector to synchronize selectedMenuState with selectedParentMenuState
export const synchronizedMenuState = selector({
  key: 'synchronizedMenuState',
  get: ({ get }) => {
    return get(selectedMenuState); // Get the current selectedMenuState
  },
  set: ({ get, set }) => {
    const selectedParentMenu = get(selectedParentMenuState);
    const currentSelectedMenu = get(selectedMenuState);

    // If selectedParentMenu changes, update selectedMenuState
    if (currentSelectedMenu !== selectedParentMenu) {
      set(selectedMenuState, selectedParentMenu);
    }
  },
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

export const addMenuButtonState = atom({
  key: 'addMenuButtonState',
  default: false as boolean ,
});
