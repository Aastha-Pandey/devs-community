import PostsHeader from '../headers/postsheader/PostsHeader';
import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const PostCard = ({ tags }) => {
  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('current_user'));

  const router = useRouter();

  const [days, setDays] = useState(Number);
  useEffect(() => {
    if (router.asPath === '/top/week' || router.asPath === '/top') {
      setDays(7);
    } else if (router.asPath === '/top/month') {
      setDays(30);
    } else if (router.asPath === '/top/year') {
      setDays(365);
    }
  }, [router.asPath]);

  const { data } = useSWR(
    router.asPath === '/top' ||
      router.asPath === '/top/week' ||
      router.asPath === '/top/month' ||
      router.asPath === '/top/year'
      ? `https://dev.to/api/articles?top=${days}`
      : user && (router.asPath === '/relevant' || router.asPath === '/')
      ? `https://dev.to/api/articles?tags=${tags.map((tag) => tag.name)}`
      : router.asPath === '/relevant' || router.asPath === '/'
      ? `https://dev.to/api/articles`
      : `https://dev.to/api/articles${router.asPath}`,
    fetcher
  );

  return (
    <>
      <PostsHeader />
      <div className='flex flex-col space-y-2'>
        {data &&
          data.map((post, i) => (
            <Link
              href={
                post.organization
                  ? `/${post.organization.username}/${post.slug}`
                  : `/${post.user.username}/${post.slug}`
              }
              key={i}
            >
              <a className='focus:ring-4 focus:ring-indigo-500 rounded-md'>
                {i === 0 && (
                  <img
                    className='object-contain rounded-t-md  w-full'
                    src={`${post.cover_image}`}
                    alt='cover_image'
                  ></img>
                )}
                <div
                  className={
                    i === 0
                      ? 'bg-gray-800 flex flex-col space-y-4 p-6 h-auto rounded-b-md  w-full'
                      : 'bg-gray-800 flex flex-col space-y-4 p-6 h-auto rounded-md  w-full'
                  }
                >
                  <header className='text-gray-100 flex pl-9 md:pl-0 lg:pl-0 space-x-3  items-center'>
                    <img
                      className=' w-8 h-8 rounded-full'
                      src={`${post.user.profile_image}`}
                      alt={`${post.user.name}`}
                    ></img>
                    <div className=' text-left '>
                      {' '}
                      <span className='font-medium text-sm hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 p-1 rounded-md'>
                        {post.user.name}
                      </span>
                      <div className='text-gray-400 text-xs hover:text-gray-50 px-1'>
                        {post.readable_publish_date} (
                        {formatDistance(new Date(post.published_timestamp), Date.now(), {
                          addSuffix: true,
                        })}
                        )
                      </div>
                    </div>
                  </header>
                  <div className='pl-10 w-full'>
                    <div className='text-left flex-col space-y-2 justify-start'>
                      <div className='text-gray-100  hover:text-indigo-500 text-2xl font-bold'>
                        {' '}
                        {post.title}
                      </div>
                      <div className='flex space-x-2'>
                        {' '}
                        {post.tag_list.map((tag, i) => (
                          <Link key={i} href='/'>
                            <a className='border border-gray-800  hover:border-gray-600 px-2 py-1 text-gray-400 rounded-md text-sm'>
                              #{tag}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <span className='flex justify-between items-center  '>
                      <span className='flex space-x-2 pt-2'>
                        <span className='flex text-gray-300 space-x-2 text-sm items-center hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 rounded-md px-2 py-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                            className='crayons-icon'
                          >
                            <path
                              fill='currentColor'
                              d='M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z'
                            ></path>
                          </svg>
                          <span>{post.positive_reactions_count} Reactions</span>
                        </span>
                        <span className='flex items-center text-gray-300 space-x-2 text-sm  hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 rounded-md px-2 py-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            role='img'
                            aria-labelledby='a6hsif7p4m4f2z8m579jl0wxbgy8ojph'
                            className=' crayons-icon reaction-icon not-reacted'
                          >
                            <title id='a6hsif7p4m4f2z8m579jl0wxbgy8ojph'>Comment button</title>
                            <path
                              fill='currentColor'
                              d='M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z'
                            ></path>
                          </svg>
                          <span>{post.comments_count} Comments</span>
                        </span>
                      </span>
                      <span className='flex text-xs space-x-2 items-center text-gray-400'>
                        <span>{post.reading_time_minutes} min read</span>
                        <button className='bg-gray-600 hover:bg-gray-500 hover:text-gray-300 px-4 py-2 text-sm text-gray-200 rounded-md'>
                          Save
                        </button>
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </>
  );
};

export default PostCard;
