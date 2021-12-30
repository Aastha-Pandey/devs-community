import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data)

const RightSideUserProfile = ({username}) => {
    const { data } = useSWR(`https://dev.to/api/users/by_username?url=${username}`, fetcher);
   
    return <>
       <section className="flex flex-col space-y-3 md:mr-12 md:my-20 md:w-80 lg:mr-12 lg:my-20 lg:w-80 lg:fixed md:fixed md:inset-y-0 md:right-0 lg:inset-y-0 lg:right-0">
        <div className="w-full flex flex-col  text-gray-50 bg-gray-800 rounded-md border border-gray-700 ">
        <div className="bg-black h-8 rounded-t-md relative"></div>
      
            <img className=" w-10 h-10 rounded-full absolute m-4" src = {`${data?.profile_image}`} alt = {''}></img>
            <span className="font-bold text-lg hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 ml-16 rounded-md">{data?.name}</span>
            <div className='p-4  flex flex-col space-y-2'> 
           
        <button className="bg-indigo-500 text-gray-900 text-md font-semibold rounded-md py-2">Follow</button>
        <div className="text-gray-300">{data?.summary}</div>
        <div><div className="text-gray-400 text-xs font-medium">JOINED</div>
        <div className="text-gray-50 text-md ">{data?.joined_at}</div></div></div>
       
    </div>
       
           </section>
           
    </>
}

export default RightSideUserProfile;