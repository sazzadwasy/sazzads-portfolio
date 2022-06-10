import React from 'react';
import Pimg from '../../images/portfolio.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={Pimg} alt="" class="sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Hi! I'm Sazzad</h1>
                    <h1 class="text-3xl font-bold mt-3">Frontend Developer</h1>
                    <p class="py-6"> I am an enthusiast in Technology, mainly in web and software based activities. I'm passionate about knowing and developing the workflow of internet. I've learned frontend web development for about 7 months. I am an expert in HTML5, CSS3, Bootstrap, Tailwind and JavaScript (ES6) for innovating a responsive design. I am comfortable with React.js, Node.js and familiar with MongoDB, Express.js, Firebase, Heroku etc. </p>
                    <a href='https://drive.google.com/file/d/1MhAsG89ZA034V0PXzj237gRbhkWtY486/view?usp=sharing' target='_blank' rel="noreferrer" class="btn btn-accent">Check Resume</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;