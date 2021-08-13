import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fire from '../images/2.png';
import Speech from '../images/1.png';
import Coding from '../images/3.png';
import Guitar from '../images/4.png';
import Fire2 from '../images/2c.png';
import Speech2 from '../images/1c.png';
import Coding2 from '../images/3c.png';
import Guitar2 from '../images/4c.png';
import { facts } from './fact.js'





export class ThreeTruth extends React.Component {
    render() {
        let truth = "";
        function refreshPage() {
            window.location.reload(false);
          }
// const factText = <h3>{truth === "" ? "Click the icons below to reveal the lie!" : truth}</h3>

function picSwitch(e) {
    const selectedIcon = e.target.alt;
    console.log(selectedIcon)

     
     if (selectedIcon === 'Guitar') {
        e.target.setAttribute('src', Guitar2);
        e.target.setAttribute('style', { iconStyle });
        e.target.setAttribute('className', 'truthpic');
        e.target.setAttribute('alt', 'guitar2');
        const iconFact = facts[selectedIcon];
        truth = iconFact.fact;
        console.log(truth);
        document.getElementById('inst').innerHTML = truth;
     } else if (selectedIcon === 'Fire') {
        e.target.setAttribute('src', Fire2);
        e.target.setAttribute('style', { iconStyle });
        e.target.setAttribute('className', 'truthpic');
        e.target.setAttribute('alt', 'fire2');
        const iconFact = facts[selectedIcon];
        truth = iconFact.fact;
        console.log(truth);
        document.getElementById('inst').innerHTML = truth;
     } else if (selectedIcon === 'Coding') {
        e.target.setAttribute('src', Coding2);
        e.target.setAttribute('style', { iconStyle });
        e.target.setAttribute('className', 'truthpic');
        e.target.setAttribute('alt', 'coding2');
        const iconFact = facts[selectedIcon];
        truth = iconFact.fact;
        console.log(truth);
        document.getElementById('inst').innerHTML = truth;
     } else if (selectedIcon === 'Speech')  {
        e.target.setAttribute('src', Speech2);
        e.target.setAttribute('style', { iconStyle });
        e.target.setAttribute('className', 'truthpic');
        e.target.setAttribute('alt', 'speech2');
        const iconFact = facts[selectedIcon];
        truth = iconFact.fact;
        console.log(truth);
        document.getElementById('inst').innerHTML = truth;
     } else {
        window.location.reload(false)
     }
    //  e.target.setAttribute('src', iconFact.image);
    //  e.target.setAttribute('style', 'iconStyle' );
    //  e.target.setAttribute('className', 'truthpic');
    //  e.target.setAttribute('alt', iconFact.image);
}

        const iconStyle={width:200}
        const iconDivStyle={margin:50}
        const title={margin:30}
        const label={margin:20}
        // function fireSwitch(e) {
        //     e.target.setAttribute('src', Fire2);
        //     e.target.setAttribute('style', { iconStyle });
        //     e.target.setAttribute('className', 'truthpic');
        //     e.target.setAttribute('alt', 'fire2');
        // }
        // function speechSwitch(e) {
        //     e.target.setAttribute('src', Speech2);
        //     e.target.setAttribute('style', { iconStyle });
        //     e.target.setAttribute('className', 'truthpic');
        //     e.target.setAttribute('alt', 'speech2');
        // }
        // function codingSwitch(e) {
        //     e.target.setAttribute('src', Coding2);
        //     e.target.setAttribute('style', { iconStyle });
        //     e.target.setAttribute('className', 'truthpic');
        //     e.target.setAttribute('alt', 'coding2');
        // }
        // function guitarSwitch(e) {
        //     e.target.setAttribute('src', Guitar2);
        //     e.target.setAttribute('style', { iconStyle });
        //     e.target.setAttribute('className', 'truthpic');
        //     e.target.setAttribute('alt', 'guitar2');
        // }

        return (
            <div style={ iconDivStyle } >
            <h1 className="d-flex justify-content-center" style={ title } >Let's play 3 truths and a lie! </h1>
            <h3 className="d-flex justify-content-center" id='inst' style={ title } >Click the icons below to reveal the lie!!</h3>
         <div className='container'>
           <div className='row'>
               <div  className="col-3" >
           <img  style={ iconStyle } className='truthpic' src={ Fire } alt="Fire" onClick={picSwitch} />
           <h3 style={label} >One time, I lit my head on fire.</h3>
               </div>
               <div className="col-3" >
           <img style={ iconStyle } className='truthpic' src={ Speech } alt="Speech"  onClick={picSwitch}/>
           <h3 style={label} >I did a TED talk.</h3>
               </div>
               <div className="col-3" >
           <img style={ iconStyle } className='truthpic' src={ Coding } alt="Coding"  onClick={picSwitch}/>
           <h3 style={label} >I'm a naturally gifted coder.</h3>
               </div>
               <div className="col-3" >
           <img style={ iconStyle } className='truthpic' src={ Guitar } alt="Guitar"  onClick={picSwitch}/>
           <h3 style={label} >I'm a solid guitar player.</h3>
               </div>

          </div>
        </div>
        </div>
        )
    }
}