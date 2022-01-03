import Layout1 from '../components/main/Layout1';
import Main from '../components/main/Main';
import PostCard from '../components/main/PostCard';

const Latest = () => {
  return (
    <>
      <PostCard tags={undefined} />
    </>
  );
};

export default Latest;

Latest.getLayout = function getLayout(page) {
  return (
    <Main>
      <Layout1>{page}</Layout1>
    </Main>
  );
};
