import { Button, ServiceCard, SvgIcons } from "@/components";
import { CUSTOM_ICON_REF } from "@/components/SvgIcons/CustomIconRef";
import { companyData, onWorkingProgress, servicesdata, testimonialsData } from "@/utils/homepagedata";
import { useState } from "react";
import Navigation from "./Navigation";

function Home() {

  const [toggleIndex, setToggleIndex] = useState<number | null>(0);

  const renderCompanyData = (item: any, index: number) => <img src={item} key={index} alt={`index - ${index}`} className="lg:mx-[50px] max-[1000px]:mx-[20px] max-[1000px]:my-[20px]" />;

  const renderServicesData = (item: any, index: number) => <ServiceCard key={index} index={index} {...item} />;

  const renderWorkingProgress = (item: any, index: number) => {
    const isOpen: boolean = index === toggleIndex;

    const handleToggleIndex = (selectedindex: number) => {
      if (selectedindex === toggleIndex) {
        setToggleIndex(null);
      } else {
        setToggleIndex(selectedindex)
      }
    }
    return (
      <div className={`border-b-4 border-[1px] p-4 rounded-[16px] mb-12 ${isOpen ? "primary-theme-bg" : "ternery-theme-bg"}`}>
        {isOpen &&
          <>
            <div className="border-[1px] w-full my-4"></div>
            <span>{item.text}</span>
          </>}
        <div className={`flex justify-between items-center ${isOpen ? "pt-4" : ""}`}>
          <div className={`flex text-[30px] font-bold ${isOpen && "pt-4"}`}>
            <span className="pr-4">0{index + 1}</span>
            <span>{item.title}</span>
          </div>
          <button onClick={() => handleToggleIndex(index)} className="flex justify-center items-center cursor-pointer rounded-full min-w-12 min-h-12 w-12 h-12 border-black border-[1px] text-[50px] font-bold">{isOpen ? "-" : "+"}</button>
        </div>
      </div>
    )
  }

  const rendertestimonialData = (item: any, index: number) => (
    <div key={index} className="flex flex-col p-12 relative min-w-[600px]">
      <div className="border-[#B9FF66] border-[1px] p-10 rounded-3xl">
        <span className="ternery-theme-text">{item.reviewDescription}</span>
      </div>
      <div className="absolute bottom-30 left-20">
        <div className="triangle-border relative">
          <div className="triangle-fill absolute"></div>
        </div>
      </div>
      <div className="flex flex-col pt-16 pl-12">
        <span className="primary-theme-text">{item.reviewerName}</span>
        <span className="ternery-theme-text">{item.reviewerJobtitle}</span>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col max-[1000px]:p-[20px] max-[400px]:p-[20px] lg:px-[100px]">

      <div className="flex max-[1000px]:flex-col lg:justify-between items-center pt-20">

        <div className="flex flex-col max-[1000px]:items-center max-[1000px]:w-full lg:w-1/3">
          <h1 className="lg:text-[45px] max-[800px]:text-[40px] pb-8">Navigating the digital landscape for success</h1>
          <SvgIcons name={CUSTOM_ICON_REF.MainScreenIllustration} baseClassname="w-full lg:hidden max-[1000px]:block" />
          <h3 className="pb-8">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</h3>
          <Button baseClassname="w-full">Book a Consultation</Button>
        </div>

        <SvgIcons name={CUSTOM_ICON_REF.MainScreenIllustration} baseClassname="w-[550px] lg:block max-[1000px]:hidden" />
      </div>

      <div className="flex lg:justify-between max-[1000px]:justify-start pt-[100px] overflow-hidden">{companyData.map(renderCompanyData)}</div>

      <div className="flex max-[1000px]:flex-col items-center pt-[100px]">
        <h1 className="primary-theme-bg secondary-theme-text text-[35px] font-semibold p-2 rounded-xl">Services</h1>
        <span className="lg:pl-16 max-[1000px]:pt-10 max-[1000px]:text-center lg:w-1/2">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</span>
      </div>

      <div className="flex lg:justify-evenly max-[1000px]:flex-col max-[1000px]:items-center pt-20">{servicesdata.map(renderServicesData)}</div>

      <div className="flex items-center max-[800px]:flex-col py-12">
        <h3 className="primary-theme-bg secondary-theme-text p-2 rounded-xl text-[35px] font-semibold">On Working Process</h3>
        <div className="flex flex-col lg:pl-16 max-[1000px]:pt-10 max-[1000px]:text-center">
          <span>Step-by-Step Guide to Achieving</span>
          <span>Your Business Goals</span>
        </div>
      </div>

      <div className="flex flex-col pt-12">{onWorkingProgress.map(renderWorkingProgress)}</div>

      <div className="flex max-[800px]:flex-col items-center pt-24">
        <h3 className="primary-theme-bg text-[35px] font-bold rounded-xl secondary-theme-text p-2">Testimonials</h3>
        <span className="lg:pl-12 lg:w-1/3 max-[800px]:pt-12 max-[800px]:text-center">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</span>
      </div>

      <div className="flex flex-col secondary-theme-bg rounded-[50px] mt-20 py-20">
        <div className="rounded flex overflow-auto no-scrollbar">{testimonialsData.map(rendertestimonialData)}</div>
        <div className="flex justify-center pt-12 px-20">
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Home;
