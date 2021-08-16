import React from 'react';

export default function Portfolio(props) {
    return(
      <>
       {props.projects.map((project) => {
           return(
               <div>
                   <h1>{project.title}</h1>
                   <img alt={project.title} src={project.img} />
                   <button><a href={project.ghlink}>GitHub Repo</a></button>
                   <button><a href={project.deployed}>Deployed Site</a></button>
               </div>
           )
       })}
      </>
    )
}

{/* <div className = "grid-item" id="grid-item-horiseon" ><a href="https://randy-chou.github.io/crumbs-food-app/"> Crumb </a></div>
<div className = "grid-item" id="grid-item-space" ><a href="https://drake-g.github.io/Horiseon/">Horiseon Refactor</a></div>
<div className = "grid-item" id="grid-item-kicker" > <a href="https://drake-g.github.io/Password-Generator/"> Password Generator</a></div>
<div className = "grid-item" id="grid-item-tunescope" ><a href="https://drake-g.github.io/TuneScope/"> TuneScope </a></div>
<div className = "grid-item" id="grid-item-maze" ><a href="https://drake-g.github.io/Day-Planner/"> Day Planner </a></div> */}