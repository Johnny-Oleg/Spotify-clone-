import { getSession } from 'next-auth/react';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">  
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div></div>
    </div>
  )
}

export default Home;

export async function getSeverSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  }
}