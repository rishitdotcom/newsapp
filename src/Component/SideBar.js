import { useState , useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ScienceIcon from '@mui/icons-material/Science';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Link} from 'react-router-dom';


function ResponsiveDrawer() {

 const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=us&apiKey=31284955a98346918ef56a37d02840c0")
      .then(response => {
        setData(response.data.articles);
      })
      .catch(err => {
        throw err;
      });
  }, []);




  return (
    <>
    
    <div  style={{  width:"20%", position:"absolute", top:"102px"  }}>
      <Sidebar style={{ height: "86vh", borderRight:"6px solid black" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>

          
          {/* <MenuItem  icon={<CalendarTodayOutlinedIcon />}>Calendar </MenuItem> */}
          <Box >
                <ul style={{ listStyle:"none", color:"black" }}>
                <li style={{margin:"6px"}}>{<HomeOutlinedIcon/>}< Link to='/home'> HOME</Link></li>
               <li style={{margin:" 6px"}} >{<AttachMoneyIcon />}< Link to='/buisness'> BUISNESS</Link></li>
               <li style={{margin:"6px" }}>{<SentimentVerySatisfiedIcon/>}< Link to='/entertainment'> ENTERTAINMENT</Link></li>
              
               <li style={{margin:"6px" }}>{< HealthAndSafetyIcon />}< Link to='/health'> HEALTH</Link></li>
               <li style={{margin:" 6px"}}>{<ScienceIcon/>}< Link to='/science'> SCIENCE</Link></li>
               <li style={{margin:" 6px"}}>{<SportsCricketIcon/>}< Link to='/sports'> SPORTS</Link></li>
               <li style={{margin:"6px" }}>{<DeveloperBoardIcon/>}< Link to='/technology'> TECHNOLOGY</Link></li>
        </ul> </Box>  
        </Menu>
      </Sidebar>
   
    {/* <Sidebar style={{ height: "70vh", borderRight:"6px solid black" }}>
    <div style={{ height: "50vh" ,marginRight:"1px" , borderRight:"6px solid black" }}>
<h2 style={{textAlign:"center"}}>WORLD TODAY</h2>
    <Box sx={{display:"grid",margin:"10px" }}>
      <Box  sx={{display:"grid",  gridTemplateColumns:"repeat(1,1fr)"}}>
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

            </Card>)
        }) : <Box sx={{ display: 'flex', marginLeft:"100%" }}>
        <CircularProgress /> 
      </Box>}
      </Box>
      </Box>
    </div>
    </Sidebar> */}
    </div>
    </>
  );
}

export default ResponsiveDrawer;