import Layout from '@/Layout/Main.Layout';
import { About, Contact, Intro, Projects, Skills } from '@/components';

const Home = () => {
  return (
    <Layout>
      <Intro />
      <About />
      <Projects />
      <Skills />
      {/* <Blog Posts={Posts} /> */}
      <Contact />
    </Layout>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const Posts = await getPosts(data.username);

//   return {
//     props: {
//       Posts: Posts.publication.posts,
//     },
//     revalidate: 60 * 60 * 24,
//   };
// };
