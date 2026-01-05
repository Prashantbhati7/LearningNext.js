


import { Navbar } from "@/components"

function authLaout({children}){
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default authLaout;