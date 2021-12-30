
const Layout2 = ({children}) => {
  
    return <>
     <main className="bg-black mt-16">
        <main className="flex container mx-auto justify-center space-x-4">
        <section className="flex flex-col space-y-4 items-center text-gray-100  py-4 my-4 w-28">
    <div className="flex">
    <button className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-opacity-10 hover:text-red-600 hover:bg-red-500 hover:text-opacity-100">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>
    </button>
    </div>
<button className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-opacity-10 hover:text-cyan-700 hover:bg-cyan-500 hover:text-opacity-100">
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="  bi bi-lightning" viewBox="0 0 16 16">
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
</svg>
</button>
           </section>
            <section className="w-8/12"> {children}</section>
            <section className="flex flex-col space-y-3 bg-red-500 my-4 py-4 w-7/12">
           </section>
        </main>
           
        </main>
       
    </>
}

export default Layout2;