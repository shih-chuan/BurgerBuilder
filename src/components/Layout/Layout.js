import React from 'react';
import classes from './Layout.module.sass'
import Wrapper from '../../hoc/Wrapper';

const layout = (props) => {
    return (
        <Wrapper>
            <div>Header, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Wrapper>
    )
}

export default layout;