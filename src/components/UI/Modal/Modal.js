import React from 'react';
import classes from './Modal.module.sass';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = (props) => (
    <Wrapper>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translate(100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Wrapper>
);

export default modal;