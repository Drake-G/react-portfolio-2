import React from 'react';

export default function Portfolio(props) {

    const projectStyle = {height:300, width:'100%', border:'2px black', borderRadius:15, justifyContent:'center'}
    const buttonStyle = {backgroundColor:'rgb(207, 166, 226)', fontSize:20, borderRadius:10, padding:10, color:'white', margin:10}
    return(
      < container direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>
       {props.projects.map((project) => {
           return(
               <div style={projectStyle}>
                   <h1 style={{textAlign:'center'}}>{project.title}</h1>
                   <img style={{width:400, height:150, display:'flex', margin:'auto'}}alt={project.title} src={project.img} />
                   <div style={{display:'flex', justifyContent:'center'}}><button style={buttonStyle}><a href={project.ghlink}>GitHub Repo</a></button>
                   <button style={buttonStyle}><a href={project.deployed}>Deployed Site</a></button></div>
               </div>
           )
       })}
      </ container>
    )
}

{/* <div className = "grid-item" id="grid-item-horiseon" ><a href="https://randy-chou.github.io/crumbs-food-app/"> Crumb </a></div>
<div className = "grid-item" id="grid-item-space" ><a href="https://drake-g.github.io/Horiseon/">Horiseon Refactor</a></div>
<div className = "grid-item" id="grid-item-kicker" > <a href="https://drake-g.github.io/Password-Generator/"> Password Generator</a></div>
<div className = "grid-item" id="grid-item-tunescope" ><a href="https://drake-g.github.io/TuneScope/"> TuneScope </a></div>
<div className = "grid-item" id="grid-item-maze" ><a href="https://drake-g.github.io/Day-Planner/"> Day Planner </a></div> */}