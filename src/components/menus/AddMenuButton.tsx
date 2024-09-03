import {
    useRecoilValue,
    useSetRecoilState,
    useRecoilState
} from 'recoil'
import {
    addMenuButtonState,
    selectedMenuState
} from '@/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import {Menu } from '@/Types'

interface Props {
    menu: Menu;
  }

export default function AddMenuButton({menu }: Props) {
    const  setAddMenuButtonState = useSetRecoilState(addMenuButtonState)
    const  selectedMenu = useRecoilValue(selectedMenuState)

    const handleClick = () => {
        setAddMenuButtonState(true)
        // setSelectedMenuState(menu)
    }

    if(menu === selectedMenu)
    
        return (
            <>
            <FontAwesomeIcon icon={faCirclePlus} size="xl" className='text-blue-600 ml-3' onClick={handleClick} />
                
            </>
        )

    return null
}