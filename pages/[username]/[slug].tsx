import Main from "../../components/main/Main";
import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

import Link from 'next/link';
import RightSideUserProfile from "../../components/side/RightSideUserProfile";
import Reactions from "../../components/side/Reactions";
import Header from "../../components/headers/mainheader/Header";
import Comment from "../../components/main/Comment";

const fetcher = url => axios.get(url).then(res => res.data)




const Post = () => {
    const router = useRouter()
    const { username, slug } = router.query
    
    const {data} = useSWR(`https://dev.to/api/articles/${username}/${slug}`, fetcher);

 
    
    return <>
      <main className="bg-black my-16 lg:mb-0 md:mb-0 lg:py-0 md:py-0 py-2">
        <main className="md:flex lg:flex flex-col container mx-auto justify-start lg:space-x-20 md:space-x-20">
          <Reactions articleId = {data?.id}/>
            <section className="w-full md:w-8/12 lg:w-8/12">   
            <section  className="bg-gray-800 rounded-md my-4 ">
     <img className="object-contain rounded-t-md  w-full" src = {`${data?.cover_image}`} alt = 'cover_image'></img>
     <div className="text-gray-100 flex flex-col space-y-4 rounded-md bg-gray-800  px-16 py-10">
       <header className="text-gray-100 flex space-x-3    items-center">
            <img className=" w-8 h-8 rounded-full" src = {`${data && data.user.profile_image}`} alt = {`${data && data.user.name}`}></img>
            <div className=" text-left "> 
            <span className="font-medium text-sm hover:bg-gray-600 hover:bg-opacity-25 hover:text-opacity-100 p-1 rounded-md">{data && data.user.name}</span>
              <div className="text-gray-400 text-xs hover:text-gray-50 px-1">Dec 16 (5 days ago)</div>
              </div>
           </header>
           <div className="text-gray-100  hover:text-indigo-500 text-5xl font-bold"> {data && data.title}</div>
         <div className="w-auto">  {
          data && data.tags.map((tag, i) => <Link key = {i} href = "/">
           <a className="border border-gray-800  hover:border-gray-600 px-2 py-1 text-gray-400 rounded-md text-sm">
               #{tag}
           </a>
           </Link>)
       }</div>
    <ReactMarkdown  className="flex flex-col space-y-4"  remarkPlugins={[remarkGfm]} components={{
    
 
    ul:({node, ...props}) => <ul className="list-disc  text-gray-100" {...props} />,
 
    h2: ({ node, ...props }) => {
      if(props.children.length !== 1) {
        return <></>
      }
     
     
      return <h2 className="text-xl font-bold text-gray-100" {...props} />
    },
     code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <Component match={match} >{children}</Component>
        ) : (
          <code className="bg-gray-800 bg-opacity-25 text-indigo-500 underline" {...props}>
            {children}
           
          </code>
        )
      }

    }}>
       {data && data.body_markdown}
      
  
    </ReactMarkdown>
    <Comment articleId = {data?.id} commentsCount = {data?.comments_count}/>
 </div>
 
 
     </section></section>
    
         <div> <RightSideUserProfile username = {data?.user.username}/></div>
        </main>
           
        </main>
       
   
   </>
}



const Component = (props: {
   match:any,
   children:any,
  
 }) => {
  
    return (
     <SyntaxHighlighter customStyle = {{
       backgroundColor:"black",
       padding:"1rem",
       borderRadius: "12px",
       borderColor:"black"
     }} language={props.match[1]} style={dark}>
     {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
    );
  };

Post.getLayout = function getLayout(page) {
 
    return (
     
        <Main> <Header menuClicked={undefined} setMenuClicked={undefined}/>{page}</Main>
         )
   
   }

  export default Post