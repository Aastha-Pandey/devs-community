import { formatDistance } from 'date-fns';

const PostCardHeader = ({
  profile_image,
  username,
  readable_publish_date,
  published_timestamp,
}) => {
  return (
    <>
      <header className='text-gray-100 flex pl-9 md:pl-0 lg:pl-0 space-x-3  items-center'>
        <img className=' w-8 h-8 rounded-full' src={`${profile_image}`} alt={`${username}`}></img>
        <div className=' text-left '>
          {' '}
          <span
            id='post_username'
            className='font-medium text-sm hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 p-1 rounded-md'
          >
            {username}
          </span>
          <div className='text-gray-400 text-xs hover:text-gray-50 px-1'>
            {readable_publish_date} (
            {formatDistance(new Date(published_timestamp), Date.now(), {
              addSuffix: true,
            })}
            )
          </div>
        </div>
      </header>
    </>
  );
};

export default PostCardHeader;
