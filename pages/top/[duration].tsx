import HomePageLayout from '../../components/main/HomePageLayout';
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
      <HomePageLayout>{page}</HomePageLayout>
    </Main>
  );
};
