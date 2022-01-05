import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import dark from 'react-syntax-highlighter/dist/cjs/styles/prism/dark';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import remarkGfm from 'remark-gfm';
import Comment from './Comment';
import Markdown from './Markdown';

const FullArticle = ({
  coverImage,
  profileImage,
  userName,
  readablePublishDate,
  title,
  bodyMarkdown,
  tags,
  articleId,
  commentsCount,
}) => {
  return (
    <>
      <section className='w-full md:w-8/12 lg:w-8/12'>
        <section className='bg-gray-800 rounded-md my-4 '>
          <img
            className='object-contain rounded-t-md  w-full'
            src={`${coverImage}`}
            alt='cover_image'
          ></img>
          <div className='text-gray-100 flex flex-col space-y-4 rounded-md bg-gray-800  px-16 py-10'>
            <header className='text-gray-100 flex space-x-3    items-center'>
              <img
                className=' w-8 h-8 rounded-full'
                src={`${profileImage}`}
                alt={`${userName}`}
              ></img>
              <div className=' text-left '>
                <span className='font-medium text-sm hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 p-1 rounded-md'>
                  {userName}
                </span>
                <div className='text-gray-400 text-xs hover:text-gray-50 px-1'>
                  Posted on {readablePublishDate}
                </div>
              </div>
            </header>
            <div className='text-gray-100  hover:text-indigo-500 text-5xl font-bold'>{title}</div>
            <div className='w-auto'>
              {' '}
              {tags &&
                tags.map((tag, i) => (
                  <Link key={i} href='/'>
                    <a className='border border-gray-800  hover:border-gray-600 px-2 py-1 text-gray-400 rounded-md text-sm'>
                      #{tag}
                    </a>
                  </Link>
                ))}
            </div>

            {bodyMarkdown && <Markdown bodyHtml={undefined} bodyMarkdown={bodyMarkdown} />}

            <Comment articleId={articleId} commentsCount={commentsCount} />
          </div>
        </section>
      </section>
    </>
  );
};

export default FullArticle;
