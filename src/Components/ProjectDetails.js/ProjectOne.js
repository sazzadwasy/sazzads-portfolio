import React from 'react';
import imgA from '../../images/detailImg/pOneA.png'
import imgB from '../../images/detailImg/pOneB.png'
import imgC from '../../images/detailImg/pOneC.png'

const ProjectOne = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl font-bold">Warehouse
                        <br />Project-11</h1>
                    <p class="text-lg py-6">● This is a bike warehouse project.Full responsive project with clear user interface.
                        <br />
                        ● In this website an user can create an account and see the warehouse stock bikes.
                        <br />
                        ● We have also shown our honorable Dealers what says about our business.</p>
                    <p className='text-xl'><span className='font-bold'> Technology : </span> React,firebase,tailwind,daisyUi,react firebase hooks,react-tostify,heroku</p>
                    <div class="card-actions justify-center mt-3">
                        <a href='https://github.com/sazzadwasy/warehouse-project-client' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Client git</a>
                        <a href='https://github.com/sazzadwasy/project-warehouse-server' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Server git</a>
                        <a href='https://delightful-conkies-093666.netlify.app/' target='_blank' rel="noreferrer" class="btn btn-accent btn-sm">Live site</a>
                    </div>
                </div>
                <div>
                    <div class="carousel carousel-center h-96 max-w-lg sm:max-w-sm p-4 space-x-4 bg-neutral rounded-box mx-auto">
                        <div id="item1" class="carousel-item">
                            <img src={imgA} alt="" class="rounded-box" />
                        </div>
                        <div id="item2" class="carousel-item">
                            <img src={imgB} alt="" class="rounded-box" />
                        </div>
                        <div id="item3" class="carousel-item">
                            <img src={imgC} alt="" class="rounded-box" />
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