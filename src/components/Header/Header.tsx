import { Button } from "..";

function Header() {
  return (
    <div className="flex justify-between p-4">
      <div className="flex">
        <span></span>
      </div>
      <Button primaryButton>Request a Quote</Button>
    </div>
  )
}

export default Header
