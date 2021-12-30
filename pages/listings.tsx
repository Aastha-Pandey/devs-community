import Main from '../components/main/Main';

import Layout2 from '../components/main/Layout2';

const Listing = () => {
    return (
    <>
     heloo
    </>
  );
};

export default Listing;

Listing.getLayout = function getLayout(page) {
 return (
   
        <Main><Layout2>{page}</Layout2></Main>
      )

}