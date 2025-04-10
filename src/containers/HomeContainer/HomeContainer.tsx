import { Footer, Header } from "@/components"
import { usePostivitusContext } from "@/store/usePositivusContext"
import { headerMenu } from "@/utils/headerdata"
import { Link, Outlet } from "react-router-dom"

function HomeContainer() {

  const { openHeader } = usePostivitusContext();

  const renderHeaderMenu = (item:any, index:number) => (
    <Link to={item.link} key={index} className="px-6 py-4 rounded-xl hover:bg-slate-500">{item.text}</Link>
  )

  return (
    <div className="flex flex-col w-full h-full overflow-hidden relative">
      <Header />
      <div className="flex flex-col overflow-auto relative z-1">
      {openHeader && <div className="max-[1000px]:flex flex-col absolute top-0 right-0 rounded-xl shadow-lg bg-white lg:hidden">{headerMenu.map(renderHeaderMenu)}</div>}
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default HomeContainer;
