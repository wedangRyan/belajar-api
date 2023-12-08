"use client";
import { useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import Link from 'next/link'
interface value {
  id: number
  poster_path: string
  original_title: string
  overview: string
}
export default function BelajarApi() {
  const [data, setData] = useState<value[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=6d4909482935f72087570c7ef36258aa&language=en-US&page=1"
      );
      const data = await response.json();
      setData(data.results);
    };

    fetchData();
  }, []);
  return (
    <div>
      <main>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.map((value) => (
            <Grid xs={2} sm={4} md={4} key={value.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <Link href={{pathname: `/detail`,query: {id: value.id, value: JSON.stringify(value)}}}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={'http://image.tmdb.org/t/p/w185'+value.poster_path}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {value.original_title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {value.overview}
                    </Typography>
                  </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <a href="/detail">awokawokwaos</a>
      </main>
    </div>
  );
}