import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
var decode = require('decode-html');
const TurndownService = require('turndown').default;

const turndownService = new TurndownService();


const CommentCard = ({comment}) => {
   
    return <>
   
   <div className="flex space-x-2 ">
        <div className="pt-4"><img className=" w-8 h-8 rounded-full" src = {`${comment.user.profile_image}`} alt = {`${comment.user.name}`}></img></div>
            <div className="ring-gray-700 ring-1 rounded-md p-4 h-auto w-full overflow-auto">
             <header className="flex justify-between">
                 <span className="font-semibold text-gray-50">{comment.user.name}</span>
                 <span>...</span>
             </header>
         
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
       {turndownService.turndown(decode(comment.body_html))}
      
  
    </ReactMarkdown>
                </div>
                </div>
                {
                    comment.children.map((k, i) => <CommentCard  comment = {k} key = {i}/>)
                }
     </>
}

export default CommentCard;

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