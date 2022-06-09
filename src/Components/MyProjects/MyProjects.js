import React from 'react';

const MyProjects = () => {
    return (
        <div className='px-12'>
            <h1 className='text-3xl text-gray-700 font-bold text-center mb-6'>My projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div class="card card-compact max-w-md bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-dark btn-sm">Client git</button>
                            <button class="btn btn-dark btn-sm">Server git</button>
                            <button class="btn btn-info btn-sm">Live site</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact max-w-md bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-dark btn-sm">Client git</button>
                            <button class="btn btn-dark btn-sm">Server git</button>
                            <button class="btn btn-info btn-sm">Live site</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact max-w-md bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-dark btn-sm">Client git</button>
                            <button class="btn btn-dark btn-sm">Server git</button>
                            <button class="btn btn-info btn-sm">Live site</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;