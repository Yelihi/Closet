import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { getServerSideProps as Login } from '../userlogin';
import { getServerSideProps as Overview } from '../closet/overview';
import { getServerSideProps as Store } from '../closet/store';
import { getServerSideProps as Add } from '../closet/add';
import { getServerSideProps as Price } from '../closet/reports/price';

const Health = () => {
  return <div>dummy</div>;
};

export default Health;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 'no-cache, no-store, max-age=0, must-revalidate');
  context.res.end('pong');
  return { props: {} };
}
