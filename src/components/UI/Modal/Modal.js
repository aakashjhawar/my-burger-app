import React from 'react';
import classes from './Modal.module.css';
import { transform } from '@babel/core';

const modal = (props) => (
  <div 
    className={classes.Modal}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', // vh = viewport height
      opacity: props.show ? '1' : '0'
    }}>
    {props.children}
  </div>
);

export default modal;