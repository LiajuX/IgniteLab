import { GetServerSideProps } from 'next';
import { getAccessToken, useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user } = useUser();
  
  return (
    <div>
      <h1>Home</h1>

      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    console.log(getAccessToken(req, res));

    return {
      props: {},
    }
  }
});