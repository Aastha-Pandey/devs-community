import PostsHeader from '../headers/postsheader/PostsHeader';
import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { commentIcon, heartIcon } from '../../svg';
import PostCardHeader from '../headers/postsheader/PostCardHeader';
import PostCardFooter from '../footers/PostCardFooter';

type PostCardProps = {
  tags: any[];
};

type Post = {
  organization: {
    username: string;
  };
  user: {
    username: string;
    name: string;
    profile_image: string;
  };
  slug: string;
  cover_image: string;
  readable_publish_date: string;
  published_timestamp: string;
  title: string;
  positive_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
  tag_list: [];
};

const fetcher = (url: '') => axios.get(url).then((res) => res.data);

const PostCard = ({ tags }: PostCardProps) => {
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
      ? `https://dev.to/api/articles?tags=${tags.map((tag: { name: string }) => tag.name)}`
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
          data.map((post: Post, i: number) => (
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
                  <PostCardHeader
                    profile_image={post.user.profile_image}
                    username={post.user.name}
                    readable_publish_date={post.readable_publish_date}
                    published_timestamp={post.published_timestamp}
                  />

                  <div className='pl-10 w-full'>
                    <div className='text-left flex-col space-y-2 justify-start'>
                      <div className='text-gray-100  hover:text-indigo-500 text-2xl font-bold'>
                        {post.title}
                      </div>
                      <div className='flex space-x-2'>
                        {post.tag_list.map((tag: '', i: number) => (
                          <Link key={i} href='/'>
                            <a className='border border-gray-800  hover:border-gray-600 px-2 py-1 text-gray-400 rounded-md text-sm'>
                              #{tag}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <PostCardFooter
                      commentIcon={commentIcon}
                      heartIcon={heartIcon}
                      positive_reactions_count={post.positive_reactions_count}
                      comments_count={post.comments_count}
                      reading_time_minutes={post.reading_time_minutes}
                    />
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
