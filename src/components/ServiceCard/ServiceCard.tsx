import { Link } from "react-router-dom";
import { SvgIcons } from "..";
import { CUSTOM_ICON_REF } from "../SvgIcons/CustomIconRef";

interface Props {
  title?: string;
  subTitle?: string;
  illusTrationIcon: any;
  link: string;
  index: number;
}

function ServiceCard(props: Props) {
  const { title, subTitle, illusTrationIcon, link, index } = props;
  const isEven: boolean = index === 1;
  return (
    <div className={`flex flex-col justify-between p-4 rounded-[40px] border-black border-[1px] lg:w-[520px] max-[1000px]:w-full min-h-[300px] mb-16 border-b-4 ${isEven && "primary-theme-bg"}`}>
      <div className="flex justify-between h-full">
        <div className="flex flex-col">
          <h3 className={`lg:text-3xl max-[1000px]:text-2xl max-[400px]:text-xl w-fit h-fit rounded-xl p-1 ${isEven ? "secondary-theme-text ternery-theme-bg" : "primary-theme-bg ternary-theme-text"} `}>{title}</h3>
          <h3 className={`lg:text-3xl max-[1000px]:text-2xl max-[400px]:text-xl w-fit h-fit rounded-xl p-1 ${isEven ? "secondary-theme-text ternery-theme-bg" : "primary-theme-bg ternary-theme-text"} `}>{subTitle}</h3>
        </div>
        <div className="flex items-end h-full">
          <SvgIcons name={illusTrationIcon} baseClassname="lg:w-[170px] max-[1000px]:w-[130px]" />
        </div>
      </div>
      <Link to={link} className="flex items-center">
        <SvgIcons name={CUSTOM_ICON_REF.ArrowAbove} baseClassname="w-12" />
        <span className="secondary-theme-text text-2xl pl-4 max-[1000px]:hidden">Learn more</span>
      </Link>
    </div>
  )
}

export default ServiceCard
