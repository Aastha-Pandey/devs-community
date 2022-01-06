import Link from 'next/link';
import { hamburgerMenu, notificationIcon, searchIcon } from '../../../svg';
import Search from './Search';

type HeaderProps = {
  menuClicked: boolean;
  setMenuClicked: Function;
};

const Header = ({ menuClicked, setMenuClicked }: HeaderProps) => {
  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('current_user'));

  return (
    <>
      <header
        className={
          menuClicked
            ? 'relative inset-x-0 top-0 bg-gray-800 h-16 flex  px-16 justify-between'
            : 'fixed inset-x-0 top-0 bg-gray-800  h-16 flex px-2 md:px-16 lg:px-16 justify-between'
        }
      >
        <span className='flex space-x-3 items-center'>
          <button
            className='md:hidden lg:hidden cursor-pointer w-10 h-10 px-2 py-1 rounded-md hover:bg-gray-700 text-gray-50 hover:text-indigo-500 crayons-icon'
            onClick={() => setMenuClicked(!menuClicked)}
          >
            {hamburgerMenu}
          </button>

          <Link href='/'>
            <a className='font-bold text-xl bg-gray-100 rounded-md px-1 py-2 tracking-tighter'>
              DEVS
            </a>
          </Link>
          <Search />
        </span>
        <span className='flex space-x-3 items-center'>
          {searchIcon}
          {user ? (
            <>
              <button className='hidden md:flex lg:flex md:hover:bg-indigo-400 hover:text-gray-900 hover:underline text-indigo-400 border border-indigo-400 rounded-md px-4 py-2 font-medium'>
                Create Post
              </button>
              {notificationIcon}
              <img
                className=' w-8 h-8 rounded-full'
                src={`${user.profile_image}`}
                alt={`${user.name}`}
              ></img>
            </>
          ) : (
            <>
              <Link href='/login'>
                <a className='ring-2 hover:bg-indigo-500 hover:bg-opacity-25 hover:text-opacity-100 hover:text-gray-100 ring-indigo-500 text-indigo-500 rounded-md px-2 py-1'>
                  Login
                </a>
              </Link>
            </>
          )}
        </span>
      </header>
    </>
  );
};

export default Header;
