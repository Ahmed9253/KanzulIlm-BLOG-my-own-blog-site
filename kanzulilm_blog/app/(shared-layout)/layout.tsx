import { ReactNode } from "react";
import Navbar from "@/components/CustomWeb/Navbar";
function SharedLayout({ children }: { children: ReactNode }) {
  return (
    <>  <Navbar />
    {children}
    </>
  )
}

export default SharedLayout