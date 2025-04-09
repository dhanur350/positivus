import { Footer, Header } from "@/components"
import { Outlet } from "react-router-dom"

function HomeContainer() {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <Header />
      <div className="flex flex-col overflow-auto">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default HomeContainer
