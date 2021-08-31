import Head from "next/head";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu-2</title>
      </Head>
      {/* Header */}

      {/* Nav */}

      {/* Results*/}
    </div>
  );
}

// Server rendered side
export async function getServerSideProps(context) {
  //get the genre from the url
  // const genre = context.query.genre;
  // const request = await fetch(
  //   `https://api.themoviedb.org/3${
  //     requests[genre]?.url || requests.fetchTrending.url
  //   }`
  // ).then((res) => res.json());
  // return {
  //   props: {
  //     results: request.results,
  //   },
  // };
}
