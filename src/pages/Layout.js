import React from 'react';
import Footer from './Footer'

const Layout = (props) => {

    return (

        <React.Fragment>
                {props.children}
        </React.Fragment>
    )
}
 
export default Layout;