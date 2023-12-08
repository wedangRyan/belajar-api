import { useEffect, useState } from "react";

export async function Belajar() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6d4909482935f72087570c7ef36258aa&language=en-US&page=1')
    const data = await res.json()
   
    return data
  }