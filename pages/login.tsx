import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [api_key, setapi_key] = useState('');
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (user) {
      router.push({
        pathname: './',
      });
    }
  }, [user, router]);

  return (
    <>
      <div className='flex flex-col w-screen h-screen space-y-4 justify-center items-center bg-black'>
        <input
          onChange={(event) => setapi_key(event.target.value)}
          auto-focus
          type='text'
          className='text-sm text-gray-100 border border-gray-600 placeholder-gray-400 bg-gray-800 w-1/4 h-10 px-2 caret-indigo-500 focus:ring-2 focus:ring-indigo-500 rounded-md focus:outline-none'
          placeholder='Enter token'
        />
        <button
          onClick={async () => {
            const response = await axios.post('http://localhost:3000/api/hello', {
              api_key: api_key,
            });
            localStorage.setItem('current_user', JSON.stringify(response.data));
            localStorage.setItem('api_key', api_key);
            setUser(true);
          }}
          className='ring-2 hover:bg-indigo-500 hover:bg-opacity-25 hover:text-opacity-100 hover:text-gray-100 ring-indigo-500 text-indigo-500 rounded-md px-2 py-1'
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
