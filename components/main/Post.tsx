import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/router';
import RightSideUserProfile from './../side/RightSideUserProfile';
import Reactions from './../side/Reactions';
import Head from 'next/head';
import FullArticle from './FullArticle';

const fetcher = (url: '') => axios.get(url).then((res) => res.data);

const Post = () => {
  const router = useRouter();
  const { username, slug } = router.query;
  const { data } = useSWR(`https://dev.to/api/articles/${username}/${slug}`, fetcher);

  return (
    <>
      <Head>
        <title>{data && data.title} - DEVS Community</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <main className='bg-black my-16 lg:mb-0 md:mb-0 lg:py-0 md:py-0 py-2'>
        <main className='md:flex lg:flex flex-col container mx-auto justify-start lg:space-x-20 md:space-x-20'>
          <Reactions articleId={data?.id} />
          <FullArticle
            coverImage={data?.cover_image}
            profileImage={data && data.user.profile_image}
            userName={data && data.user.name}
            readablePublishDate={data && data.readable_publish_date}
            title={data && data.title}
            tags={data && data.tags}
            bodyMarkdown={data && data.body_markdown}
            articleId={data?.id}
            commentsCount={data?.comments_count}
          />

          <div>
            <RightSideUserProfile username={data?.user.username} />
          </div>
        </main>
      </main>
    </>
  );
};

export default Post;
