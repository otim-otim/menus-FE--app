import Header from "@/components/Header"
import Menus from "@/components/menus/Menus"
import PageTitle from "@/components/PageTitle"
import ParentMenuDropdown from "@/components/menus/ParentMenuDropdown"

export default function MenuPage() {
    return (
        <>
        <Header />
  <PageTitle />
  <ParentMenuDropdown />
    <Menus />
        </>
    )
}