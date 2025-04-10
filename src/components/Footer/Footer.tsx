import { headerMenu } from "@/utils/headerdata";
import { SvgIcons } from "..";
import { CUSTOM_ICON_REF } from "../SvgIcons/CustomIconRef";
import { Link } from "react-router-dom";
import { footerSocialmenus } from "@/utils/footerdata";

function Footer() {
  const renderHeaderMenu = (item: any, index: number) => (
    <Link to={item.link} key={index} className="lg:px-4 max-[800px]:p-4">{item.text}</Link>
  )

  const renderFooterSocialMenus = (item: any, index: number) => (
    <div key={index} className="rounded-full w-6 h-6 mx-4 secondary-theme-bg ternery-theme-text">
      <SvgIcons name={item.icon} baseClassname="w-8" />
    </div>
  )

  return (
    <div className="secondary-theme-bg ternery-theme-text rounded-tl-[30px] rounded-tr-[30px] p-12 lg:mx-12 max-[800px]:mx-4 mt-12">

      <div className="flex lg:justify-between max-[800px]:flex-col max-[800px]:items-center">
        <div className="flex max-[800px]:py-4">
          <SvgIcons name={CUSTOM_ICON_REF.Logo} baseClassname="w-8" />
          <span className="text-2xl pl-4">Positivus</span>
        </div>
        <div className="flex max-[800px]:flex-col lg:pl-4 max-[800px]:py-4">{headerMenu.map(renderHeaderMenu)}</div>
        <div className="flex lg:pl-4 max-[800px]:hidden">{footerSocialmenus.map(renderFooterSocialMenus)}</div>
      </div>

      <div className="flex lg:justify-between max-[800px]:flex-col max-[800px]:items-center py-4 pt-12">

        <div className="flex flex-col max-[800px]:items-center max-[800px]:w-full">
          <span className="p-2 rounded-xl w-fit primary-theme-bg secondary-theme-text font-bold text-xl">Contact us</span>
          <span className="pb-4 pt-4">Email: info@positivus.com</span>
          <span className="pb-4">Phone: 555-567-8901</span>
          <span className="">Address: 1234 Main St</span>
          <span>Moonstone City, Stardust State 12345</span>
        </div>

        <div className="flex lg:items-center max-[800px]:flex-col max-[800px]:mt-8 rounded-2xl p-4 bg-[#292A32] max-[800px]:w-full">
          <input placeholder="Email" className="lg:mr-4 max-[800px]:mb-4 p-3 rounded-xl border-[1px] border-white outline-none" />
          <button className="primary-theme-bg rounded-xl py-3 px-6 secondary-theme-text h-fit">Subscribe to news</button>
        </div>

      </div>

      <div className="max-[800px]:flex max-[800px]:justify-center max-[800px]:pt-4 lg:hidden lg:pl-4">{footerSocialmenus.map(renderFooterSocialMenus)}</div>

      <div className="border-white border-t-[1px] pt-12 pb-12 mt-12">
        <span className="">© 2023 Positivus. All Rights Reserved.</span>
        <Link className="pl-12 hover:underline" to={"#"}>Privacy Policy</Link>
      </div>

    </div>
  )
}

export default Footer;
