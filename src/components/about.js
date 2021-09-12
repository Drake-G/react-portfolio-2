import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Fire from '../images/2.png';
// import Speech from '../images/1.png';
// import Coding from '../images/3.png';
// import Guitar from '../images/4.png';

export class About extends React.Component {
    render() {
        const paraStyle={margin:50}

    return (
        <div >
        {/* //     <h1>Let's play 3 truths and a lie! </h1>
        //  <div className='container'>
        //    <div id="footer" className='row'>
        //        <div  className="col-3" >
        //    <img  style={ iconStyle } className='truthpic' src={ Fire } alt="fire"/>
        //    <h3>One time, I lit my head on fire.</h3>
        //        </div>
        //        <div className="col-3" >
        //    <img style={ iconStyle } className='truthpic' src={ Speech } alt="speech"/>
        //    <h3>I did a TED talk</h3>
        //        </div>
        //        <div className="col-3" >
        //    <img style={ iconStyle } className='truthpic' src={ Coding } alt="coding"/>
        //    <h3>I'm a naturally gifted coder.</h3>
        //        </div>
        //        <div className="col-3" >
        //    <img style={ iconStyle } className='truthpic' src={ Guitar } alt="guitar"/>
        //    <h3>I'm a solid guitar player.</h3>
        //        </div>

        //   </div>
        // </div> */}
        <p style={paraStyle} id='about'>
            Hey there, how ya doing? My name is Drake Gooding and
            I'm currently learning to code while living in Mexico, so that's pretty cool. 
            I spend most of my time coding, training Muay Thai, practicing classical guitar, 
            running, or going to the beach. It's a pretty sweet life, if you ask me ;) 
            I am currently working on a few coding projects that I would like to have up and 
            running throughout the next few months. Of course, I'm just now learning to code 
            so I am hoping to build these projects as I learn more! My ultimate goal is to put my
            knowlege to the test through implimetation in my own business ventures - hoping ultimately
            to build a team and run a tech-startup in the music industry. I'd like to venture into 
            learning Swift as well as solidifying my fundamental coding skills. My music startup idea
            will be blockchain based, so that's something I'd like to get a broad grip on in order to communicate
            effectively with blockchain developers. Until then I'll be focused on
            building my skills on my own, working on coding projects, building my brand a session guitarist 
            for hip hop music, researching physics and calculus, etc. Lots of fun things to work on! 
            Life is full of so many wonderful opportunities and I'll be damned if I'm giong 
            to let any get away...although this does sometimes create issue when I overstuff my schedule!
        </p>
        </div>
    );
  }
};