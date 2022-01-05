const PostCardFooter = ({
  comments_count,
  reading_time_minutes,
  positive_reactions_count,
  heartIcon,
  commentIcon,
}) => {
  return (
    <>
      <footer>
        <span className='flex justify-between items-center  '>
          <span className='flex space-x-2 pt-2'>
            <span className='flex space-x-2 text-gray-300 text-sm items-center hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 rounded-md px-2 py-1'>
              {heartIcon(20, 20)}
              <span>{positive_reactions_count} Reactions</span>
            </span>
            <span className='flex items-center text-gray-300 space-x-2 text-sm  hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 rounded-md px-2 py-1'>
              {commentIcon}
              <span>{comments_count} Comments</span>
            </span>
          </span>
          <span className='flex text-xs space-x-2 items-center text-gray-400'>
            <span>{reading_time_minutes} min read</span>
            <button className='bg-gray-600 hover:bg-gray-500 hover:text-gray-300 px-4 py-2 text-sm text-gray-200 rounded-md'>
              Save
            </button>
          </span>
        </span>
      </footer>
    </>
  );
};

export default PostCardFooter;
