import useSWR from 'swr';
import axios from 'axios';
import { bookmarkIcon, heartIcon, unicornIcon } from '../../svg';
import Reaction from './Reaction';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Reactions = ({ articleId }) => {
  const { data } = useSWR(`https://dev.to/reactions?article_id=${articleId}`, fetcher);

  return (
    <>
      <footer className='fixed z-40 inset-x-0 bottom-0 bg-gray-900 md:bg-transparent lg:bg-transparent h-16 md:h-auto lg:h-auto flex md:px-0 lg:px-0 justify-around  md:justify-center lg:justify-center md:flex md:flex-col lg:flex lg:flex-col  md:inset-y-0 md:left-0 lg:inset-y-0 lg:left-0   lg:space-y-4 md:space-y-4 md:mx-10 lg:mx-10 items-center text-gray-100 md:my-16 lg:my-16 md:w-16 lg:w-16 w-full'>
        <Reaction
          icon={heartIcon(24, 24)}
          iconColor='hover:text-red-600 hover:bg-red-500'
          reactionCount={data?.article_reaction_counts[0].count}
        />
        <Reaction
          icon={unicornIcon}
          iconColor='hover:text-cyan-400 hover:bg-cyan-400'
          reactionCount={data?.article_reaction_counts[2].count}
        />
        <Reaction
          icon={bookmarkIcon}
          iconColor='hover:text-indigo-500 hover:bg-indigo-500'
          reactionCount={data?.article_reaction_counts[1].count}
        />
      </footer>
    </>
  );
};

export default Reactions;
