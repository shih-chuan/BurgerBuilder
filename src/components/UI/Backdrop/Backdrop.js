import React from 'react';
import classes from './Backdrop.module.sass';

const backdrop = (props) => (
    props.show ? <div onClick={props.clicked} className={classes.Backdrop}></div> : null
)

export default backdrop;