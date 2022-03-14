import React from 'react';
import Header from "../header";
import Breadcrumbs from "../breadcrumbs";
import Home from '../../../pages/home';
import Footer from "../footer";
import FixedNav from "../fixed-nav";

const Layout = () => {
    return (
        <>  <FixedNav/>
            <Header/>
            <Breadcrumbs/>
            <Home/>
            <Footer/>
        </>
    );
}

export default Layout;
