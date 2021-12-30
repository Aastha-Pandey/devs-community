import useSWR from 'swr';
import axios from 'axios';
import CommentCard from './CommentCard';

const fetcher = url => axios.get(url).then(res => res.data)

const Comment = ({articleId, commentsCount}) => {
    const {data} = useSWR(`https://dev.to/api/comments?a_id=${articleId}`, fetcher);
    
    return <> <header className="bg-gray-800 font-bold text-xl text-gray-50 flex justify-between items-end">
        <span>Discussion ({commentsCount})</span>
        <button className="text-sm font-semibold px-4 py-2 rounded-md ring-2 ring-gray-700">Subscribe</button>



        </header>{
            
    data && data.map((comment, i) => <CommentCard comment = {comment}  key={i}/>)
}</>
}

export default Comment;