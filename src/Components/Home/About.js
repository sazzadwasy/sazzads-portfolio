import React from 'react';
import aboutImg from '../../images/about.jpeg'


const About = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={aboutImg} alt="" class="lg:max-w-lg md:max-w-full sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-4xl font-bold text-cyan-700">Sazzad Hossain<br />Wasy</h1>
                    <p class="text-xl mt-5">Hello!My name is Sazzad Hossain.I am a Frontend Web Developer.I am an enthusiast in Technology, mainly in web and software based activities. I'm passionate about knowing and developing the workflow of internet. I've learned frontend web development for about 7 months. I am an expert in HTML5, CSS3, Bootstrap, Tailwind and JavaScript (ES6) for innovating a responsive design. I am comfortable with React.js, Node.js and familiar with MongoDB, Express.js, Firebase, Heroku etc.</p>
                </div>
            </div>
        </div>
    );
};

export default About;