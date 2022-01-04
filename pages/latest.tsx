import HomePageLayout from '../components/main/HomePageLayout';
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
      <HomePageLayout>{page}</HomePageLayout>
    </Main>
  );
};
