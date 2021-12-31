import Main from '../components/main/Main';
import PostCard from '../components/main/PostCard';
import Layout1 from '../components/main/Layout1';


const Sortby = () => {
    return (
    <>
      <PostCard />
    </>
  );
};

export default Sortby;

Sortby.getLayout = function getLayout(page) {
  
 return (
   
        <Main><Layout1>{page}</Layout1></Main>
      )

}

// import Main from './../../components/main/Main';
// import PostCard from './../../components/main/PostCard';
// import Layout1 from './../../components/main/Layout1';

// const Duration = () => {
//     return (
//     <>
//       <PostCard />
//     </>
//   );
// };

// export default Duration;

// Duration.getLayout = function getLayout(page) {
//  return (
   
//         <Main><Layout1>{page}</Layout1></Main>
//       )

// }