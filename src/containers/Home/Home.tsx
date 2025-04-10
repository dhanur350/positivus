import { Button, ServiceCard, SvgIcons } from "@/components";
import { CUSTOM_ICON_REF } from "@/components/SvgIcons/CustomIconRef";
import { companyData, onWorkingProgress, servicesdata } from "@/utils/homepagedata";
import { useState } from "react";

function Home() {

  const [toggleIndex, setToggleIndex] = useState<number | null>(0);

  const renderCompanyData = (item: any, index: number) => <img src={item} key={index} alt={`index - ${index}`} className="lg:mx-[50px] max-[1000px]:mx-[20px] max-[1000px]:my-[20px]" />;

  const renderServicesData = (item: any, index: number) => <ServiceCard key={index} index={index} {...item} />;

  const renderWorkingProgress = (item:any, index:number) => {
    const isOpen: boolean = index === toggleIndex;
    
    const handleToggleIndex = (selectedindex:number) => {    
      if(selectedindex === toggleIndex) {
        setToggleIndex(null);
      } else {
        setToggleIndex(selectedindex)
      }
    }
    return(
      <div onClick={() => handleToggleIndex(index)} className={`border-b-4 border-[1px] p-4 rounded-[16px] mb-4 ${isOpen ? "primary-theme-bg" : "ternery-theme-bg"}`}>
        {isOpen && <div className="border-[1px] w-full my-4"></div>}
        <span>{item.text}</span>
        <div className="flex pt-4 text-[30px] font-bold">
          <span className="pr-4">0{index + 1}</span>
          <span>{item.title}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col max-[1000px]:p-[50px] max-[400px]:p-[20px] lg:px-[100px]">

      <div className="flex max-[1000px]:flex-col lg:justify-between items-center">

        <div className="flex flex-col max-[1000px]:items-center max-[1000px]:w-full lg:w-1/3">
          <h1 className="text-[45px] pb-8">Navigating the digital landscape for success</h1>
          <SvgIcons name={CUSTOM_ICON_REF.MainScreenIllustration} baseClassname="w-full lg:hidden max-[1000px]:block" />
          <h3 className="pb-8">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</h3>
          <Button baseClassname="w-full">Book a Consultation</Button>
        </div>

        <SvgIcons name={CUSTOM_ICON_REF.MainScreenIllustration} baseClassname="w-[550px] lg:block max-[1000px]:hidden" />
      </div>

      <div className="flex lg:justify-between max-[1000px]:justify-start pt-[100px] overflow-hidden">{companyData.map(renderCompanyData)}</div>

      <div className="flex max-[1000px]:flex-col items-center pt-[100px]">
        <h1 className="primary-theme-bg secondary-theme-text text-3xl font-semibold p-2 rounded-xl">Services</h1>
        <span className="lg:pl-16 max-[1000px]:pt-10 max-[1000px]:text-center lg:w-1/2">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</span>
      </div>

      <div className="flex lg:justify-evenly max-[1000px]:flex-col max-[1000px]:items-center pt-20">{servicesdata.map(renderServicesData)}</div>

      <div className="flex items-center">
        <h3 className="primary-theme-bg secondary-theme-text p-2 rounded-xl text-2xl font-semibold">On Working Process</h3>
        <div className="flex flex-col lg:pl-16 max-[1000px]:pt-10 max-[1000px]:text-center">
          <span>Step-by-Step Guide to Achieving</span>
          <span>Your Business Goals</span>
        </div>
      </div>

      <div className="flex flex-col pt-12">{onWorkingProgress.map(renderWorkingProgress)}</div>
    </div>
  )
}

export default Home;
