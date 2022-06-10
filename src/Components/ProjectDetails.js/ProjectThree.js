import React from 'react';

const ProjectThree = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div class="card-actions justify-center">
                        <a href='https://github.com/sazzadwasy/manufacturing-parts-client' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Client git</a>
                        <a href='https://github.com/sazzadwasy/manufacturing-parts-server' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Server git</a>
                        <a href='https://splendorous-liger-f94130.netlify.app/' target='_blank' rel="noreferrer" class="btn btn-accent btn-sm">Live site</a>
                    </div>
                </div>
                <div>
                    <div class="carousel carousel-center h-96 max-w-lg sm:max-w-sm p-4 space-x-4 bg-neutral rounded-box mx-auto">
                        <div id="item1" class="carousel-item">
                            <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2" class="rounded-box" />
                        </div>
                        <div id="item2" class="carousel-item">
                            <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB" class="rounded-box" />
                        </div>
                        <div id="item3" class="carousel-item">
                            <img src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6" class="rounded-box" />
                        </div>

                    </div>
                    <div class="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" class="btn btn-xs">1</a>
                        <a href="#item2" class="btn btn-xs">2</a>
                        <a href="#item3" class="btn btn-xs">3</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectThree;