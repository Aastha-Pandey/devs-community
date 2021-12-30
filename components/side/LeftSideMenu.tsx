import Link from 'next/link';

const tabs = {
    '🏠' : 'home',
    '🖨' : 'reading Lists',
    '📜' : 'listings',
    '🎙': 'podcasts',
    '🎥': 'videos',
    '🏷': 'tags',
    '💡': 'fAQ',
    '🛍': 'dEVS Shop',
    '❤': 'sponsors',
    '📝': 'about', 
    '☎': 'contact',
   
   
}

const LeftSideMenu = () => {
    return <>
    
    <aside className="flex  w-full flex-col space-y-2 py-4  items-start">
    {
        Object.keys(tabs).map((tab, i) =>
        {
       
            return <Link key = {i} href={`/${tabs[tab]}`}>
            <a className="space-x-3 capitalize hover:underline  text-gray-50 hover:text-opacity-100 hover:bg-opacity-10 hover:bg-indigo-900 hover:text-indigo-400 rounded-md w-full py-2 px-4 text-left">
               
                <span>{tab}</span>
                <span>{tabs[tab]}</span>
            </a>
            </Link>
            
        }
        )
    }
    </aside>
    </>
}

export default LeftSideMenu;