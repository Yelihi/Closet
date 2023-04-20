import Head from 'next/head';

export interface WrapperProps {
  device: 'phone' | 'desktop';
}

const addHead = <P extends WrapperProps>(Components: React.ComponentType<P>, title: string, description: string) => {
  const HOC = (props: P) => (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Components {...props} />
    </>
  );

  return HOC;
};

export default addHead;
