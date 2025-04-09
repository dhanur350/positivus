import { Button, SvgIcons } from "@/components";
import { CUSTOM_ICON_REF } from "@/components/SvgIcons/CustomIconRef";

function Home() {
  return (
    <div className="flex flex-col max-[1000px]:p-[50px] lg:p-[100px]">
      
      <div className="flex max-[1000px]:flex-col lg:justify-between items-center">
        
        <div className="flex flex-col max-[1000px]:w-full lg:w-1/3">
          <h1 className="text-[45px] pb-8">Navigating the digital landscape for success</h1>
          <h3 className="pb-8">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</h3>
          <Button baseClassname="w-fit">Book a Consultation</Button>
        </div>

        <SvgIcons name={CUSTOM_ICON_REF.MainScreenIllustration} baseClassname="w-[450px]" />
      </div>
    </div>
  )
}

export default Home;
