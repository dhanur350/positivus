import { headerMenu } from "@/utils/headerdata";
import { Button, SvgIcons } from "..";
import { CUSTOM_ICON_REF } from "../SvgIcons/CustomIconRef";
import { Link } from "react-router-dom";

function Header() {
  const renderHeaderMenus = (item: any, index: number) => (
    <Link key={index} to={item.link} className="px-6">{item.text}</Link>
  )
  return (
    <div className="flex justify-between py-4 px-8">
      <div className="flex items-center">
        <SvgIcons name={CUSTOM_ICON_REF.Logo} baseClassname="w-6" />
        <h1 className="text-3xl font-bold pl-4">Positivus</h1>
      </div>
      <div className="flex items-center">
        {headerMenu.map(renderHeaderMenus)}
        <Button primaryButton>Request a Quote</Button>
      </div>
    </div>
  )
}

export default Header
