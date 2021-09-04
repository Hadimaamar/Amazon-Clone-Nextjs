import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  console.log("products", products);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto ">
        <Banner />

        {/* Product Feed */}

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

// Server rendered side
export async function getServerSideProps(context) {
  //get the genre from the url
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  // const request = await fetch(
  //   `https://api.themoviedb.org/3${
  //     requests[genre]?.url || requests.fetchTrending.url
  //   }`
  // ).then((res) => res.json());
  return {
    props: {
      products,
    },
  };
}
