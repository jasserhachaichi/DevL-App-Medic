import React from "react";


const About = () => {
    return (
        <section className="py-32 px-6">
            <div className="container">
                <div
                    className="flex w-full flex-col overflow-hidden rounded-lg border border-border bg-zinc-100 md:rounded-xl lg:flex-row lg:items-center">
                    <div className="w-full shrink-0 self-stretch lg:w-1/2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUHullulxhYUx2fMpP7OVP-ugtrqRyuQXDw&s" alt="placeholder hero"
                            className="aspect-[3/2] w-full rounded-md object-cover" />
                    </div>
                    <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
                        <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">Feature name</h3>
                        <p className="mb-8 text-zinc-600 lg:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
                            omnis! Porro facilis quo animi consequatur. Explicabo.
                        </p>
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2">
                            Call to Action
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
