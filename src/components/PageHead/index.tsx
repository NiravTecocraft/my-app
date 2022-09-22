import Head from 'next/head';
import React from 'react';

export type Props = {
  title: any;
  content: any;
};

const PageHead: React.FC<Props> = ({ title, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
    </>
  );
};

export default PageHead;
