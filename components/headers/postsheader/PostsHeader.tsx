import Link from 'next/link';
import { useRouter } from 'next/router';

const tabs = ['relevant', 'latest', 'top'];
const rightTabs = ['week', 'month', 'year', 'infinity']

const PostsHeader = () => {
  const router = useRouter()
  const { sortby } = router.query
 
    return <>
    <header className="h-16 bg-black flex items-center pl-14 md:px-2 lg:px-2 justify-between ">
  <span> {tabs.map((tab, i) =>
   <Link key = {i} href={`/${tab}`}>
          <a  className= {(router.asPath === `/${tab}` || (tab === 'relevant' && router.asPath === `/`) || (tab === 'top' && router.asPath === `/top/${sortby && sortby[1]}`))? "capitalize focus:font-bold font-bold hover:text-indigo-400 hover:text-opacity-100 hover:bg-gray-900 hover:bg-opacity-25 text-gray-50 px-2 py-2 rounded-sm" : "capitalize hover:text-indigo-400 hover:text-opacity-100  hover:bg-gray-900 hover:bg-opacity-25 text-gray-50 px-2 py-2 rounded-sm"}>
            {tab}</a>
        </Link>)}</span>
       {(sortby && sortby[0] === 'top' || sortby && sortby[1] === 'week' || sortby && sortby[1] === 'month' || sortby && sortby[1] === 'year' )  &&  <span> {rightTabs.map((tab, i) => 
       <Link key = {i} href={`/top/${tab}`}>
          <a className= {router.asPath === `/top/${tab}` ? "capitalize focus:font-bold font-bold hover:text-indigo-400 hover:text-opacity-100 hover:bg-gray-900 hover:bg-opacity-25 text-gray-50 px-2 py-2 rounded-sm" :
           "capitalize hover:text-indigo-400 hover:text-opacity-100  hover:bg-gray-900 hover:bg-opacity-25 text-gray-50 px-2 py-2 rounded-sm"}>
             {tab}</a>
        </Link>)}</span>}
    </header>
</>
}

export default PostsHeader;