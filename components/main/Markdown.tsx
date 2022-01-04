import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
var decode = require('decode-html');

const TurndownService = require('turndown').default;

const turndownService = new TurndownService();

const Markdown = ({ bodyHtml, markdown }) => {
  return (
    <>
      <ReactMarkdown
        className='flex flex-col space-y-4'
        remarkPlugins={[remarkGfm]}
        components={{
          ul: ({ node, ...props }) => <ul className='list-disc  text-gray-100' {...props} />,

          h2: ({ node, ...props }) => {
            if (props.children.length !== 1) {
              return <></>;
            }

            return <h2 className='text-xl font-bold text-gray-100' {...props} />;
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <Component match={match}>{children}</Component>
            ) : (
              <code className='bg-gray-800 bg-opacity-25 text-indigo-500 underline' {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {turndownService.turndown(decode(bodyHtml && bodyHtml.body_html))}
      </ReactMarkdown>
    </>
  );
};

export default Markdown;

const Component = (props: { match: any; children: any }) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        backgroundColor: 'black',
        padding: '1rem',
        borderRadius: '12px',
        borderColor: 'black',
      }}
      language={props.match[1]}
      style={dark}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
};
