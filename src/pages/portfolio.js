import React from 'react';
import  Portfolio  from '../components/portfolio';
import CrumbImg from '../images/6.png'
import PlannerImg from "../images/dayplanner.png";
import PasswordImg from "../images/Password generator.png";
import TuneImg from "../images/album.jpg";
import HoriseonImg from "../images/code.jpg";

const projects = [
    {
     title: "Crumb",
     img: CrumbImg,
     ghlink: "https://github.com/Drake-G/crumbs-food-app",
     deployed: "https://randy-chou.github.io/crumbs-food-app/"
    },
    {  
     title: "Day Planner",
     img: PlannerImg,
     ghlink: "https://github.com/Drake-G/Day-Planner",
     deployed: "https://drake-g.github.io/Day-Planner/"
    },
    {  
     title: "Password Generator",
     img: PasswordImg,
     ghlink: "https://github.com/Drake-G/Password-Generator",
     deployed: "https://drake-g.github.io/Password-Generator/"
    },
    {  
     title: "TuneScope",
     img: TuneImg,
     ghlink: "https://github.com/Drake-G/TUNESCOPE-2",
     deployed: "https://mighty-ravine-55452.herokuapp.com"
    },
        {  
     title: "Horiseon Refactor",
     img: HoriseonImg,
     ghlink: "https://github.com/Drake-G/Horiseon",
     deployed: "https://drake-g.github.io/Horiseon/"
    }

]



export default function PortfolioPage () {
    return(
        <div style={{backgroundColor:'white', alignItems:'center'}}>
        < Portfolio projects={projects}/>
        </div>
    )
}