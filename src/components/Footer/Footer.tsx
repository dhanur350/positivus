import { headerMenu } from "@/utils/headerdata";
import { SvgIcons } from "..";
import { CUSTOM_ICON_REF } from "../SvgIcons/CustomIconRef";
import { Link } from "react-router-dom";
import { footerSocialmenus } from "@/utils/footerdata";

function Footer() {
  const renderHeaderMenu = (item: any, index: number) => (
    <Link to={item.link} key={index} className="px-4">{item.text}</Link>
  )

  const renderFooterSocialMenus = (item: any, index: number) => (
    <div key={index} className="rounded-full w-6 h-6 secondary-theme-bg ternery-theme-text">
      {/* <SvgIcons name="" baseClassname="" /> */}
    </div>
  )

  return (
    <div className="secondary-theme-bg ternery-theme-text rounded-tl-[30px] rounded-tr-[30px] p-12 mx-12 mt-12">
      
      <div className="flex justify-between">
        <div className="flex">
          <SvgIcons name={CUSTOM_ICON_REF.Logo} baseClassname="w-8" />
          <span className="text-2xl pl-4">Positivus</span>
        </div>
        <div className="flex pl-4">{headerMenu.map(renderHeaderMenu)}</div>
        <div className="flex pl-4">{footerSocialmenus.map(renderFooterSocialMenus)}</div>
      </div>

      <div className="flex justify-between py-4">

        <div className="flex">
          <span className="p-2 rounded-xl primary-theme-bg secondary-theme-text font-bold text-xl">Contact us</span>
        </div>
        <div className="flex"></div>

      </div>

    </div>
  )
}

export default Footer;
