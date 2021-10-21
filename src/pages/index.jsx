export default function Home({ projects }) {
  return <div></div>;
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/projects.json`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}
