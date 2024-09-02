import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../axiosInstance'
import {
    
    useRecoilValue,
    useSetRecoilState
} from 'recoil'
import { menusState , menuFetchingState, menuStoringState} from '../store'

export function fetchMenus(){
    try {
        const setMenusState = useSetRecoilState(menusState)
        const setMenuFetchState = useSetRecoilState(menuFetchingState)
        const {data, status, error} = useQuery({
            queryKey: ['menus'],
            queryFn: fetchMenuList,
          })

          setMenuFetchState(status)
          if(status === 'success') 
            setMenusState(data?.data)
    } catch (error) {
        
    }
}

async function fetchMenuList() {
try {
    const response= await axiosInstance.get('/menus')
    return response
} catch (error) {
    
}
}

async function storeMenu(menuData : { name: string, parentId?: string }){
    try {
        const response= await axiosInstance.post('/menus', menuData)
        return response
    } catch (error) {
        
    }
}

export function storeNewMenu(reqData :{ name: string, parentId?: string } ){
    try {
        const menus = useRecoilValue(menusState)
        const setMenusState = useSetRecoilState(menusState)
        const setMenuStoringState = useSetRecoilState(menuStoringState)
        const {data, status, error} = useQuery({
            queryKey: ['store-menu'],
            queryFn: () =>  storeMenu(reqData),
          })

          setMenuStoringState(status)

          if(status === 'success') {
            const menu = data?.data
            if (menu.parent){
                const parent = menus.find( menu => menu.id ==  menu.parent)
                if(parent){
                    parent.children = [...parent?.children,menu]
                    const updatedMenu  = menus.map(menu => {
                        if(menu.id == parent.id)
                            return parent
                        return menu
                    })
                    setMenusState(updatedMenu)

                }
                
            }
            else 
              setMenusState([...menus,menu])
          }


    } catch (error) {
        
    }

}


async function updateMenu(menuId: string,menuData : { name: string }){
    try {
        const response= await axiosInstance.post(`/menus/${menuId}`, menuData)
        return response
    } catch (error) {
        
    }
}

export function updateSelectedMenu(menuId: string,updateReqData :{ name: string } ){
    try {
        const menus = useRecoilValue(menusState)
        const setMenusState = useSetRecoilState(menusState)
        const setMenuStoringState = useSetRecoilState(menuStoringState)
        const {data, status, error} = useQuery({
            queryKey: ['store-menu'],
            queryFn: () => updateMenu(menuId,updateReqData),
          })

          setMenuStoringState(status)

          if(status === 'success') {
            const menu = data?.data
            if (menu.parent){
                const parent = menus.find( menu => menu.id ==  menu.parent)
                if(parent){
                    parent.children = [...parent?.children,menu]
                    const updatedMenu  = menus.map(menu => {
                        if(menu.id == parent.id)
                            return parent
                        return menu
                    })
                    setMenusState(updatedMenu)

                }
                
            }
            else 
              setMenusState([...menus,menu])
          }


    } catch (error) {
        
    }

}

