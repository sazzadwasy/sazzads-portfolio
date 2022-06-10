import React from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('gmail', 'template_sendkyi', event.target, 'JelmUXXPKjRbmSt7F')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset()
    };
    return (
        <div class="hero min-h-screen py-6">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Get in touch</h1>
                    <p class="py-6">Send me an email if you think I can help you out with any of your web related projects.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={sendEmail} className="card-body">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" class="input input-bordered" name="name" />
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Your email" class="input input-bordered" name="email" />
                        <label class="label">
                            <span class="label-text">Subject</span>
                        </label>
                        <input type="text" placeholder="Subject" class="input input-bordered" name="subject" />
                        <label class="label">
                            <span class="label-text">Your Messege</span>
                        </label>
                        <textarea class="textarea textarea-bordered" placeholder="Your messege" name="messege"></textarea>
                        <input class="btn btn-accent mt-4" type="submit" value="Send Messege" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;