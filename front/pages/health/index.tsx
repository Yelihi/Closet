import React from 'react';
import { GetServerSidePropsContext } from 'next';

const Health = () => {
  return <div>dummy</div>;
};

export default Health;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.end('pong');
  return { props: {} };
}
