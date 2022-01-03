import Layout1 from '../../components/main/Layout1';
import Main from '../../components/main/Main';
import PostCard from '../../components/main/PostCard';

const Duration = () => {
  return (
    <>
      <PostCard tags={undefined} />
    </>
  );
};

export default Duration;

Duration.getLayout = function getLayout(page) {
  return (
    <Main>
      <Layout1>{page}</Layout1>
    </Main>
  );
};
