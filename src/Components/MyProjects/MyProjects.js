import React from 'react';
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'

const MyProjects = () => {
    return (
        <div className='px-12'>
            <h1 className='text-3xl text-gray-700 font-bold text-center mb-6'>My projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div class="card card-compact max-w-md bg-base-100 shadow-xl">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Warehouse-project-11</h2>

                        <p>This is a bike warehouse project.Full responsive project with clear user interface.
                            In this website an user can create an account and see the warehouse stock bikes.
                            We have also shown our honorable Dealers what says about our business.
                        </p>
                        <div class="card-actions justify-center">
                            <a href='https://github.com/sazzadwasy/warehouse-project-client' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Client git</a>
                            <a href='https://github.com/sazzadwasy/project-warehouse-server' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Server git</a>
                            <a href='https://delightful-conkies-093666.netlify.app/' target='_blank' rel="noreferrer" class="btn btn-info btn-sm">Live site</a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact max-w-md bg-base-100 shadow-xl">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Assignment-project-12</h2>
                        <p>Created a website for manufacturing car parts.Full responsive and user friendly.
                            Users can buy any products and pay.user can give reviews and feedback.
                            Created a dashboard with Admin panel.Admin can make any user to admin.Admin can delete any orders and reviews.Also can add new car parts for sell and export.
                        </p>
                        <div class="card-actions justify-center">
                            <a href='https://github.com/sazzadwasy/manufacturing-parts-client' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Client git</a>
                            <a href='https://github.com/sazzadwasy/manufacturing-parts-server' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Server git</a>
                            <a href='https://splendorous-liger-f94130.netlify.app/' target='_blank' rel="noreferrer" class="btn btn-info btn-sm">Live site</a>
                        </div>
                    </div>
                </div>
                <div class="card card-compact max-w-md bg-base-100 shadow-xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">React Dental Project</h2>
                        <p>It is a simple react website for dentists treatment.
                            Used firebase authentication to create user login users.
                            Login user can sign out and reset their password
                        </p>
                        <div class="card-actions justify-center">
                            <a href='https://github.com/sazzadwasy/Dentists-project' target='_blank' rel="noreferrer" class="btn btn-dark btn-sm">Client git</a>
                            <a href='https://rainbow-khapse-ca051f.netlify.app/' target='_blank' rel="noreferrer" class="btn btn-info btn-sm">Live site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;