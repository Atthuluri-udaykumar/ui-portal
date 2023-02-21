import React from 'react';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const PublicLayout = ({ children }) => {
    return (
        <div>
            <Header/>
            {children}
            <Sidebar/>
            <Footer/>
        </div>
    );
};

export default PublicLayout;
