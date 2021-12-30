

import LeftSideMenu from "../side/LeftSideMenu";
import RightSide from "../side/RightSide";
import Header from "../headers/mainheader/Header";
import { useState } from "react";


const Layout1 = ({children}) => {
   const [menuClicked, setMenuClicked] = useState(false);
    return <div className={menuClicked ? "fixed inset-0" : "relative"}>
     <Header menuClicked = {menuClicked} setMenuClicked = {setMenuClicked}/>
   <section>
        <main className={menuClicked ? "bg-black" : "bg-black mt-16 py-2"}>
        <main className="flex container mx-auto justify-center  space-x-4">
            <section className= {menuClicked ?"" : "hidden md:flex lg:flex md:w-64 lg:w-64"}>
           {menuClicked ?  <div className={menuClicked ? "bg-opacity-25 bg-gray-100 w-full absolute inset-0" : ""}>
           <div className="bg-black w-72 fixed h-screen overflow-auto">
               <header className="flex items-center px-4 py-2 justify-between  border border-gray-700 bg-gray-800 w-full">
               <div className=" text-gray-50  font-bold text-md">DEVS Community</div>
               <svg 
               onClick={() => setMenuClicked(!menuClicked)}
               fill = "currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" 
               className="cursor-pointer w-10 h-10 px-2 py-1 rounded-md hover:bg-gray-700 text-gray-50 hover:text-indigo-500 crayons-icon c-btn__icon"><title>Close</title><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
               </header>
               <LeftSideMenu />
                </div>
            </div> : <LeftSideMenu />}
          
            </section>
            <section className="w-full md:w-2/4 lg:w-2/4"> {children}</section>
            <section className="flex flex-col space-y-3 py-4 md:flex lg:flex hidden md:w-64 lg:w-64">
            <RightSide/>
            </section>
        </main>
           
        </main>

    </section>
    
    </div>
}

export default Layout1;