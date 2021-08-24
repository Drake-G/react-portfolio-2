import React from 'react';
import Logo from '../images/GOODING.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Navigation extends React.Component {
    render() {
        // const backgroundStyle = {backgroundColor:'rgb(216, 188, 253)', padding:50}
        const pages = ['About', 'Portfolio', 'Resume', 'Contact'];
        const navLinks = pages.map(page => {
         return (
             <a href={'/' + page} id='link' className='col-3'>
                 {page}
             </a>
          )
        });
        return (
            <header id="headerMenu">
            <div id="headerGrid"  className="logo">
                <img src={Logo} alt="Logo" />
            </div>
              <div className='container' fullWidth  >
             <nav id="nav" className='row'>{navLinks}</nav>
            </div>
        </header>
        )
  }
}


//found this very clever way of doing a NavBar in a Codecademy lesson

// import React from 'react';

// export class NavBar extends React.Component {
//   render() {
//     const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
//     const navLinks = pages.map(page => {
//       return (
//         <a href={'/' + page}>
//           {page}
//         </a>
//       )
//     });

//     return <nav>{navLinks}</nav>;
//   }
// }

//My code before bringing in the clever Codecademy way
// export class Navigation extends React.Component {
//     render() {
//     return (
//         <div className='container'>
//           <div id="nav" className='row'>
//             <img className='col-4' src='./GOODING.png' alt='name' />
//             <h3 className='col-2'><a href="#abut">About</a></h3>
//             <h3 className='col-2'><a href="#portfoh3o">Portfolio</a></h3>
//             <h3 className='col-2'><a href="#resume">Resume</a></h3>
//             <h3 className='col-2'><a href="#contact">Contact</a></h3>
//           </div>
//         </div>
//     );
//   }
// };