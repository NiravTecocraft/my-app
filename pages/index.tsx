import type { NextPage } from 'next';
import Layout from '../src/container/Layout';
import { PageHead } from '../src/components';

const Home: NextPage = () => {
  return (
    <>
      <PageHead title={'Home Page'} content={undefined} />
      <Layout>
        <h1>Hello</h1>
      </Layout>
    </>
  );
};

export default Home;
