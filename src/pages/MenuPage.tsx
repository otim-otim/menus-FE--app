import Header from "@/components/Header"
import Menus from "@/components/menus/Menus"
import PageTitle from "@/components/PageTitle"
import ParentMenuDropdown from "@/components/menus/ParentMenuDropdown"
import CreateMenu from "@/components/menus/CreateMenu"

export default function MenuPage() {
    return (
        <>
        <Header />
  <PageTitle />
  <ParentMenuDropdown />
  <div className="flex justify-between">
    <div className="w-1/2" >
  <Menus  />

    </div>
    <div className="w-1/2" >
  <CreateMenu />

    </div>
</div>
        </>
    )
}