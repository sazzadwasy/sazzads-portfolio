import React from 'react';

const ContactForm = () => {
    return (
        <div class="hero min-h-screen py-6">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Get in touch</h1>
                    <p class="py-6">Send me an email if you think I can help you out with any of your web related projects.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Messege</span>
                            </label>
                            <textarea class="textarea textarea-bordered" placeholder="Your messege"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-accent">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;