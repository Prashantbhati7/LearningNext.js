


import { Footer,Navbar } from "@/components"

export default function RootLayout({ children }) {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
     </>
  )
};
