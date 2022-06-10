import React from 'react';
import ImgA from '../../images/detailImg/pOneA.png'
import ImgB from '../../images/detailImg/pOneB.png'
import ImgC from '../../images/detailImg/pOneC.png'

const ProjectOne = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <div class="card-actions justify-center">
                        <a href='https://github.com/sazzadwasy/warehouse-project-client' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Client git</a>
                        <a href='https://github.com/sazzadwasy/project-warehouse-server' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Server git</a>
                        <a href='https://delightful-conkies-093666.netlify.app/' target='_blank' rel="noreferrer" class="btn btn-accent btn-sm">Live site</a>
                    </div>
                </div>
                <div>
                    <div class="carousel carousel-center h-96 max-w-lg sm:max-w-sm p-4 space-x-4 bg-neutral rounded-box mx-auto">
                        <div id="item1" class="carousel-item">
                            <img src={ImgA} alt="" class="rounded-box" />
                        </div>
                        <div id="item2" class="carousel-item">
                            <img src={ImgB} alt="" class="rounded-box" />
                        </div>
                        <div id="item3" class="carousel-item">
                            <img src={ImgC} alt="" class="rounded-box" />
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

export default ProjectOne;