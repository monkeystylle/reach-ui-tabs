import styled from 'styled-components';
import type { NextPage } from 'next';
import Checkout from '../components/Checkout';
import TabSelect from '../components/TabSelect';

const Home: NextPage = () => {
  return (
    <>
      <PageWrapper>
        <Checkout />
        <TabSelect />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  height: 100%;
  display: grid;
  gap: 128px;
  place-content: center;
`;

export default Home;
