import React from 'react';
import NewResume from '../pages/images/newResume.pdf'

export class Resume extends React.Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
            <h2 id="contactMe">Resume</h2>
            <a href={NewResume} download="Resume">Download Resume</a>
            </div>  
        )
    }
}