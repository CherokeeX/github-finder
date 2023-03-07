import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-primary'>
              <div className='container'>                                                      
                  <a href="/" className='navbar-brand'>
                      <i class={this.props.icon}> {this.props.title}

                      </i>
                  </a> 
              </div>       
      </nav>
    )
  }
}




Navbar.defaultProps ={
    icon: "bi bi-github",
    title: "Github Scanner !"
}

Navbar.propTypes =
{
icon: PropTypes.string.isRequired,
title : PropTypes.string.isRequired
}


export default Navbar;
