import type { InferGetServerSidePropsType } from "next";
type Todos = {
  id: string;
  original_title: string;
  overview: string;
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6d4909482935f72087570c7ef36258aa&language=en-US&page=1");
    const data: Todos[] = await res.json();
  
    // Pass data to the page via props
    return { props: { data } };
  }