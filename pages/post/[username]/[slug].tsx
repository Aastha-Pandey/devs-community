import Header from '../../../components/headers/mainheader/Header';
import Main from '../../../components/main/Main';
import Post from '../../../components/main/Post';

const Slug = () => {
  return (
    <>
      <Post />
    </>
  );
};

export default Slug;

Slug.getLayout = function getLayout(page) {
  return (
    <Main>
      {' '}
      <Header menuClicked={undefined} setMenuClicked={undefined} />
      {page}
    </Main>
  );
};
