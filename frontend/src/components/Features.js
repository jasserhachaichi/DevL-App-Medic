import React from "react";
import Hero from "../components/Hero";

const Features = () => {
  return (

<section className="py-32 max-w-7xl mx-auto ">
  <div className="container">
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-1 text-zinc-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="lucide lucide-square-dashed-mouse-pointer size-5">
          <path d="M5 3a2 2 0 0 0-2 2"></path>
          <path d="M19 3a2 2 0 0 1 2 2"></path>
          <path d="m12 12 4 10 1.7-4.3L22 16Z"></path>
          <path d="M5 21a2 2 0 0 1-2-2"></path>
          <path d="M9 3h1"></path>
          <path d="M9 21h2"></path>
          <path d="M14 3h1"></path>
          <path d="M3 9v1"></path>
          <path d="M21 9v2"></path>
          <path d="M3 14v1"></path>
        </svg>
        <p>Utilities</p>
      </div>
      <a href="#" className="hover:text-gray-800 hover:underline">Learn more<svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2 inline-block size-4">
          <path d="m9 18 6-6-6-6"></path>
        </svg></a>
    </div>
    <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full mb-8 mt-3"></div>
    <div className="flex flex-col justify-between gap-6 md:flex-row">
      <h2 className="text-3xl font-medium md:w-1/2">What you can do with our utilities?</h2>
      <p className="md:w-1/2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae praesent, ad ullam quis
        cupiditate atque maxime alias eaque repellendus perferendis, nemo repudiandae.
      </p>
    </div>

    
    <div className="mt-11 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMDciW-VapWlEcKnrITOxuoCVKUY7J_6jyA&s" alt="Integrations"
          className="aspect-video w-full object-cover" />
        <div className="p-5">
          <p className="mb-1 font-medium">Integrations</p>
          <p className="text-zinc-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMDciW-VapWlEcKnrITOxuoCVKUY7J_6jyA&s" alt="Apps" className="aspect-video w-full object-cover" />
        <div className="p-5">
          <p className="mb-1 font-medium">Apps</p>
          <p className="text-zinc-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



  );
};

export default Features;
