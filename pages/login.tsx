import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';



export default function Login() {
  const { user } = useUser();
  
  return (
    <>
      {user && (
        <Link href={`/api/auth/login`}>
          <a className='bg-green-500'>Login</a>
        </Link>
      )}
    </>
  );
}

Login.getLayout = function getLayout(page) {
  
  return (
    
       <div className='bg-blue-500 h-screen'>  {page}</div>
       )
 
 }