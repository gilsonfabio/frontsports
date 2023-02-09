import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
	//Array of Images
	const images = [
        "http://localhost:3000/images/image01.jpg", 
        "http://localhost:3000/images/image02.jpg", 
        "http://localhost:3000/images/image03.jpg", 
        "http://localhost:3000/images/image04.jpg", 
        "http://localhost:3000/images/image05.jpg", 
    ];
    
	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px", marginRight: "-20px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "30px", marginLeft: "20px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};
	return (
		<div className="w-screen h-144 m-0">			
			<Zoom {...zoomInProperties}>
    		    {images.map((each, index) => (
				    <div key={index} className="flex  w-full ">
					    <img
						    className="w-full h-144 object-cover rounded-lg shadow-xl"
						    src={each}
					    />
						<span className="font-serif flex flex-auto absolute text-white text-4xl md:text-6xl mt-28 md:ml-32 items-center p-2 md:items-start justify-start">
							SECRETÁRIA DE ESPORTE, 
						</span>
						<span className="font-serif flex flex-auto absolute text-white text-4xl md:text-6xl mt-56 md:mt-48 md:ml-32 items-center p-2 md:items-start justify-start">
							LAZER E JUVENTUDE
						</span>
				    </div>
			    ))}
			</Zoom>
		</div>
	);
};

export default Slideshow;