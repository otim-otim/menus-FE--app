import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../axiosInstance'
import {
    
    useSetRecoilState
} from 'recoil'
import { menusState , menuFetchingState} from '../store'

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


        //   console.log(result)

        // fetchMenuList()
    } catch (error) {
        
    }
}

export async function fetchMenuList() {
try {
    const response= await axiosInstance.get('/menus')
    console.log('response',response)
    return response
} catch (error) {
    
}
}