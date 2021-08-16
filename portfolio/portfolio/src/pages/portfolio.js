import React from 'react';
import  Portfolio  from '../components/portfolio';

const projects = [
    {
     title: "Crumb",
     img: "../images/6.png",
     ghlink: "https://github.com/Drake-G/crumbs-food-app",
     deployed: "https://randy-chou.github.io/crumbs-food-app/"
    },
    {  
     title: "Day Planner",
     img: "../images/dayplanner.png",
     ghlink: "https://github.com/Drake-G/Day-Planner",
     deployed: "https://drake-g.github.io/Day-Planner/"
    },
    {  
     title: "Password Generator",
     img: "../images/Password generator.png",
     ghlink: "https://github.com/Drake-G/Password-Generator",
     deployed: "https://drake-g.github.io/Password-Generator/"
    },
    {  
     title: "TuneScope",
     img: "../images/album.jpg",
     ghlink: "https://github.com/Drake-G/TUNESCOPE-2",
     deployed: "https://mighty-ravine-55452.herokuapp.com"
    },
        {  
     title: "Horiseon Refactor",
     img: "../images/code.jpg",
     ghlink: "https://github.com/Drake-G/Horiseon",
     deployed: "https://drake-g.github.io/Horiseon/"
    }

]



export default function PortfolioPage () {
    return(
        <>
        < Portfolio projects={projects}/>
        </>
    )
}