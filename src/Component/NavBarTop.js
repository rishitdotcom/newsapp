

import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function ClockBox() {
    let clock = document.getElementById('clock');
  

 
    const dateVar = new Date();
    const month =["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"]
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let timeformat;
    let hours = dateVar.getHours();
    let date = dateVar.getDate();
    let minutes = dateVar.getMinutes();
    let seconds = dateVar.getSeconds();
    if (hours > 12) {
                hours = hours % 12;
                timeformat = "PM"
            }
            else {
                timeformat = "AM"
            }


    let mminutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let sseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let day = weekday[dateVar.getDay()];
    let monthday = month[dateVar.getMonth()];
 
    if (clock) {        
        clock.innerHTML = `${monthday} ${date} | ${day} | ${hours}:${mminutes}:${sseconds} ${timeformat}`
    }
    

setInterval(() => {
   ClockBox();
}, 1000) 

    return (
        <>
            <nav style={{ width: "100%", height:"25px", border:"4px solid violet",display:"flex", backgroundColor:"red",position:"fixed", top:"0",zIndex:"10"   }}>
          <div id="clock" style={{border:"2px solid black",backgroundColor:"red"}} ></div>
          <div style={{border:"2px solid black"}}><LocationOnIcon fontSize='20px'/> DELHI</div>
          <div id ="movingtitle" style={{width:"50%"}}><marquee>hlw</marquee></div>
          <div>
          <ul style={{display:"flex",justifyContent:"space-around", marginTop:"2px",marginLeft:"90%" , listStyleType:"none"}}>
                    <li>< FacebookIcon/></li>
                    <li><TwitterIcon/></li>
                    <li><LinkedInIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><GoogleIcon/></li>
                    <li><YouTubeIcon/></li>
                    
                    
                </ul>
                </div>
          </nav>
        </>

    )
}
   
