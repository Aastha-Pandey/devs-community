import Link from 'next/link';
import { useRouter } from 'next/router';

const tabs = ['relevant', 'latest', 'top'];
const rightTabs = ['week', 'month', 'year', 'infinity'];

const PostsHeader = () => {
  const router = useRouter();

  return (
    <>
      <header className='h-16 bg-black flex items-center pl-14 md:px-2 lg:px-2 justify-between '>
        <span>
          {tabs.map((tab, i) => (
            <Link key={i} href={`/${tab}`}>
              <a
                className={
                  router.asPath === `/${tab}` ||
                  (tab === 'relevant' && router.asPath === `/`) ||
                  (tab === 'top' &&
                    (router.asPath === '/top/week' ||
                      router.asPath === '/top/month' ||
                      router.asPath === '/top/year'))
                    ? 'capitalize focus:font-bold font-bold hover:text-indigo-400 hover:text-opacity-100 hover:bg-gray-900 hover:bg-opacity-25 text-gray-50 px-2 py-2 rounded-sm'
                    : 'capitalize hover:text-indigo-400 hover:text-opacity-100  hover:bg-gray-900 hover:bg-opacity-25 text-gray-50 px-2 py-2 rounded-sm'
                }
              >
                {tab}
              </a>
            </Link>
          ))}
        </span>
        {(router.asPath === '/top' ||
          router.asPath === '/top/week' ||
          router.asPath === '/top/month' ||
          router.asPath === '/top/year') && (
          <span>
            {rightTabs.map((tab, i) => (
              <Link key={i} href={`/top/${tab}`}>
                <a
                  className={
                    router.asPath === `/top/${tab}` || (tab === 'week' && router.asPath === `/top`)
                      ? 'capitalize focus:font-bold font-bold hover:text-indigo-400 hover:text-opacity-100 hover:bg-gray-900 hover:bg-opacity-25 text-gray-50 px-2 py-2 rounded-sm'
                      : 'capitalize hover:text-indigo-400 hover:text-opacity-100  hover:bg-gray-900 hover:bg-opacity-25 text-gray-50 px-2 py-2 rounded-sm'
                  }
                >
                  {tab}
                </a>
              </Link>
            ))}
          </span>
        )}
      </header>
    </>
  );
};

export default PostsHeader;
