import { headerMenu } from "@/utils/headerdata";
import { Button, SvgIcons } from "..";
import { CUSTOM_ICON_REF } from "../SvgIcons/CustomIconRef";
import { Link } from "react-router-dom";
import { usePostivitusContext } from "@/store/usePositivusContext";

function Header() {
  const { handleToggleHeader } = usePostivitusContext();

  const renderHeaderMenus = (item: any, index: number) => (
    <Link key={index} to={item.link} className="px-6">{item.text}</Link>
  )

  return (
    <div className="flex justify-between py-4 lg:px-[100px] max-[1000px]:px-8">
      <div className="flex items-center">
        <SvgIcons name={CUSTOM_ICON_REF.Logo} baseClassname="w-6" />
        <h1 className="text-3xl font-bold pl-4">Positivus</h1>
      </div>
      <div className="flex items-center max-[1000px]:hidden">
        {headerMenu.map(renderHeaderMenus)}
        <Button primaryButton>Request a Quote</Button>
      </div>
      <button className="cursor-pointer lg:hidden" onClick={handleToggleHeader}>
        <SvgIcons name={CUSTOM_ICON_REF.Burger} baseClassname="w-6 text-black" />
      </button>
    </div>
  )
}

export default Header
