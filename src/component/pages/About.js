import React, { Component } from 'react';



 function About(){ 
       return(
          //react fragmnt can be used when we dont need a html element linke div in the dom and thus actually dont appear in the DOM
        <React.Fragment>
            <h1>About</h1>
            <p>This is the ToDoLit app v1.00.It is part of a React demo</p>
        </React.Fragment>
        )
    }

export default About;