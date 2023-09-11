 import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


import "./NewsItem.css";


export default function MediaCard(props) {


  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=31284955a98346918ef56a37d02840c0`)
      .then(response => {
        setData(response.data.articles);
      })
      .catch(err => {
        throw err;
      });
  }, [data, props]);
  return (

    <>
      <Box  sx={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", gap:"30px", width:"83%", marginLeft:"16.8%", marginTop:"1.15%"  }}>
        {data.length ? data.map((element, index) => {
          return ( 
            <Card  id="containertext" key={index} sx={{ Width: 800 }} >

              <CardMedia
                sx={{ height: 200 }}
                image={element.urlToImage}
              />
              <CardContent>
                {element.title}
                <Typography variant="body2" color="text.secondary">

                </Typography>

              </CardContent>

              <CardActions>
                <a href={element.url}> Read More</a>
              </CardActions>

            </Card>)
        }) : <Box sx={{ display: 'flex', marginLeft:"100%" }}> <CircularProgress/>    </Box>}
      </Box>
    </>
  );


}
