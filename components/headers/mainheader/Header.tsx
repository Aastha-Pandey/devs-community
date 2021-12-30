



import Search from "./Search";


const Header = ({menuClicked, setMenuClicked}) => {
    return <>
    <header className={menuClicked ? "relative inset-x-0 top-0 bg-gray-800 h-16 flex  px-16 justify-between" :
     "fixed inset-x-0 top-0 bg-gray-800  h-16 flex px-2 md:px-16 lg:px-16 justify-between"}>
    <span className="flex space-x-3 items-center">
    <svg 
    onClick={() => setMenuClicked(!menuClicked)}
    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ac28huxf6wggcq7mx4ybbrk0io353ugg" className="md:hidden lg:hidden cursor-pointer w-10 h-10 px-2 py-1 rounded-md hover:bg-gray-700 text-gray-50 hover:text-indigo-500 crayons-icon"><title id="ac28huxf6wggcq7mx4ybbrk0io353ugg">Navigation menu</title>
    <path
    fill='currentColor'
    d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
</svg>
    <button className="font-bold text-xl bg-gray-100 rounded-md px-1 py-2 tracking-tighter">DEVS</button>
    <Search/>
    </span>
    <span className="flex space-x-3 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a55i6fyknmbq1kgyr3lctg123nto4kw3" 
    className="md:hidden lg:hidden cursor-pointer w-10 h-10 px-2 py-1 rounded-md hover:bg-gray-700 text-gray-50 hover:text-indigo-500 crayons-icon"><title id="a55i6fyknmbq1kgyr3lctg123nto4kw3">Search</title>
    <path fill='currentColor' d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"></path>
</svg>
    <button className="hidden md:flex lg:flex md:hover:bg-indigo-400 hover:text-gray-900 hover:underline text-indigo-400 border border-indigo-400 rounded-md px-4 py-2 font-medium">Create Post</button>
   

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="ake6qip3anjrxz77yom7h6buxw4z8wzt" 
className="cursor-pointer w-10 h-10 px-2 py-1 rounded-md hover:bg-gray-700 text-gray-50 hover:text-indigo-500 crayons-icon"><title id="ake6qip3anjrxz77yom7h6buxw4z8wzt">Notifications</title>
    <path  fill='currentColor' d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
</svg>
    <button className="bg-indigo-400 w-8 h-8 rounded-full"/>
    </span>
    </header>
</>
}

export default Header;