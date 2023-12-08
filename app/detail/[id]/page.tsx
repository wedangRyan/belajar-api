import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import Link from 'next/link'

async function getMovie(kode: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=6d4909482935f72087570c7ef36258aa&language=en-US&page=1/`)
  const data = res.json();
  return data;
}

export default function Page({ params }: { params: { id: string, original_title: string, title: string } }) {
  const getdata = getMovie(params.id)
  return (
    <>
      <div>My Post: {params.id}</div>
      <div>My Post: {params.title}</div>
      <main style={{padding: 100}}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {getdata.results?.map((value) => (
            <Grid xs={2} sm={4} md={4} key={value.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <Link href={`/detail/${value.id}`}>
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
      </main>
    </>
  );
}
