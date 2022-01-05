import Markdown from './Markdown';
const CommentCard = ({ comment }) => {
  return (
    <>
      <div className='flex space-x-2 '>
        <div className='pt-4'>
          <img
            className=' w-8 h-8 rounded-full'
            src={`${comment.user.profile_image}`}
            alt={`${comment.user.name}`}
          ></img>
        </div>
        <div className='ring-gray-700 ring-1 rounded-md p-4 h-auto w-full overflow-auto'>
          <header className='flex justify-between'>
            <span className='font-semibold text-gray-50'>{comment.user.name}</span>
            <span>...</span>
          </header>

          <Markdown bodyMarkdown={undefined} bodyHtml={comment} />
        </div>
      </div>
      {comment.children.map((k: {}, i: number) => (
        <CommentCard comment={k} key={i} />
      ))}
    </>
  );
};

export default CommentCard;
