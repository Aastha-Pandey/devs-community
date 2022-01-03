import axios from 'axios';
import { useState, useEffect } from 'react';
import Layout1 from '../components/main/Layout1';
import Main from '../components/main/Main';
import PostCard from '../components/main/PostCard';

const Relevant = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    async function getTags() {
      if (localStorage.getItem('api_key') !== null) {
        axios
          .post('http://localhost:3000/api/tag', {
            api_key: localStorage.getItem('api_key'),
          })
          .then((data) => setTags(data.data));
      }
    }
    getTags();
  }, []);
  return (
    <>
      <PostCard tags={tags} />
    </>
  );
};

export default Relevant;

Relevant.getLayout = function getLayout(page) {
  return (
    <Main>
      <Layout1>{page}</Layout1>
    </Main>
  );
};
