import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import MyProjects from '../MyProjects/MyProjects';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;