import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar navbar-dark bg-primary'>
                <a href="/" className='navbar-brand'>
                    <i class={this.props.icon}> {this.props.title}

                    </i>
                </a>        
        </div>
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
