import React from 'react';
import Pimg from '../../images/portfolio.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={Pimg} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Hi! I'm Sazzad</h1>
                    <h1 class="text-3xl font-bold mt-3">Frontend Developer</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-info">Download Resume</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;