import './globals.css'

import {Geist_Mono ,Montserrat} from 'next/font/google'


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
    subsets:['latin'],
    variable:"--font-montserrat",
     weight: ['300','400','500','600','700']
})



const RootLayout = ({children}) =>{
    return (
        <html lang="en">
            <body className={`${geistMono.variable} ${montserrat.variable} `} >
                {children}
            </body>
        </html>
    )
}

export default RootLayout;