import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const RightSide = () => {
  const { data } = useSWR(`https://dev.to/api/listings`, fetcher);
  return (
    <>
      <section className='w-full p-4 text-gray-50 bg-gray-800 text-xl rounded-md border border-gray-700 font-bold'>
        DEV is built in the open via forem want to take part in discussion
      </section>

      <section className='flex flex-col divide-y divide-gray-900 text-gray-100 bg-gray-800 rounded-md border border-gray-700 '>
        <header className='flex justify-between py-2 px-5'>
          <span className='text-gray-50 text-lg font-bold flex'>Listings</span>
          <button className='text-blue-500 text-sm font-semibold'>See all</button>
        </header>
        <div className='flex flex-col divide-y divide-gray-900 '>
          {data &&
            data.map((listing, i) => (
              <div
                key={i}
                className=' py-2 px-5 flex flex-col hover:bg-black hover:text-indigo-500 cursor-pointer '
              >
                {listing.title}
                <span className='text-sm text-gray-200'>{listing.category}</span>
              </div>
            ))}
        </div>
        <footer className='flex cursor-pointer text-gray-100 hover:text-indigo-500 text-sm font-medium justify-center py-2 px-5'>
          Create a Listing
        </footer>
      </section>
    </>
  );
};

export default RightSide;
