import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Footer extends React.Component {
    render() {
    return (
        // <div className="col-md-3 mb-md-0 mb-3" >
        //   <ul id="footer" className='row'>
        //     <li ><a href="https://github.com/Drake-G">Github</a></li>
        //     <li ><a href="https://www.instagram.com/drake.gooding/">Instagram</a></li>
        //     <li ><a href="https://www.facebook.com/drake.gooding/">Facebook</a></li>
        //     <li ><a href="https://www.linkedin.com/in/drake-gooding-13a2591bb/">Linkedin</a></li>
        //   </ul>
        // </div>
        <div  style={{backgroundColor:'rgb(207, 166, 226)', width:'100%', position:'fixed', bottom:0, textAlign:'center'}}>
        <nav id="footer" className='row'>
            <a className='col-3' href="https://github.com/Drake-G">Github</a>
            <a className='col-3' href="https://www.instagram.com/drake.gooding/">Instagram</a>
            <a className='col-3' href="https://www.facebook.com/drake.gooding/">Facebook</a>
            <a className='col-3' href="https://www.linkedin.com/in/drake-gooding-13a2591bb/">Linkedin</a>
        </nav>
        </div>
    );
  }
};