import React, { useState } from "react";
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

// import './owl.css'; 

// import img1 from '../../images/SM-placeholder.png';
// import img2 from '../../images/flowers-276014_640.jpg';
// import img3 from '../../images/free-nature-images.jpg';
// import img4 from '../../images/images.jpeg';
// import img5 from '../../images/spring-images-min.jpg';

function ImageSlider() {


    return(
        // <img src={img5} />
//    <OwlCarousel 
//    className="owl-theme"
//    items="1"
// //    loop 
//    margin={10}
//    autoplay
//    nav
//    dots
//    >
//     <div className="item">
//         <img src={img1}/>
//     </div>
//     <div className="item">
//         <img src={img2}/>
//     </div>
//     <div className="item">
//         <img src={img3}/>
//     </div>
//     <div className="item">
//         <img src={img4}/>
//     </div>

//    </OwlCarousel>

                <div>  
    
              <div class='container-fluid' >      
    
               <div className="row title" style={{marginBottom: "20px"}} >      
    
               <div class="col-sm-12 btn btn-info">      
    
               Owl Carousel In React Application   
    
               </div>      
    
               </div>  
    
           </div>  
    
           <div class='container-fluid' >            
    
            <OwlCarousel items={3}  
    
              className="owl-theme"  
    
              loop  
    
              nav  
    
              margin={8} >  
    
               <div ><img  className="img" src= {'assets/images/img1.jpg'}/></div>  
    
               <div><img  className="img" src= {'assets/images/img2.jpg'}/></div>  
    
               <div><img  className="img" src= {'assets/images/img3.jpg'}/></div>  


          </OwlCarousel>  
  
          </div>  
   
      
   
          </div>
    )

}

export default ImageSlider;
// import React, { useState } from "react";
// import "./imageSlider.css";
// // import {  Carousel} from "react-bootstrap";
// // import Carousel from 'framer-motion-carousel'
// import { Carousel } from "react-responsive-carousel";
// function ImageSlider() {
//     const [current, setCurrent] =useState(0);
//     const images = ["https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/4091975/pexels-photo-4091975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];
//     const imageSlides = document.getElementsByClassName("slide-image");
//     const bubbles = document.getElementsByClassName("bubble-outer");
//     const nextImage = () => {
//       let newIndex = (current === images.length - 1 ? 0 : current + 1);
//       imageSlides[current].className = "slide-image leftOut";
//       imageSlides[newIndex].className= "slide-image leftIn";
//       updateBubbles(newIndex);
//       setCurrent(newIndex);
//     }
//     // const prevImage = () => {
//     //   let newIndex = (current === 0 ? images.length - 1 : current - 1);
//     //   imageSlides[current].className = "slide-image rightOut";
//     //   imageSlides[newIndex].className= "slide-image rightIn";
//     //   updateBubbles(newIndex);
//     //   setCurrent(newIndex);
//     // }
//     setInterval(()=>{
//         nextImage()
//     },3000
//     )
//     const jumpImage = (e) => {
//       let jumpIndex = parseInt(e.target.id);
//       if(jumpIndex === current) return;
//       if(jumpIndex - current >= 0) {
//         imageSlides[current].className = "slide-image leftOut";
//         imageSlides[jumpIndex].className = "slide-image leftIn";
//       } else {
//         imageSlides[current].className = "slide-image rightOut";
//         imageSlides[jumpIndex].className = "slide-image rightIn";
//       }
//       updateBubbles(jumpIndex);
//       setCurrent(jumpIndex);
//     }
//     const updateBubbles = (highlight) => {
//       bubbles[current].style.borderColor = "black";
//       bubbles[highlight].style.borderColor = "white";
//     }
//     React.useEffect(() => {
//       bubbles[current].style.borderColor="white";
//     }, []);
//     return (
//       <div className="gallery-container">
//         {/* <span className="button-prev" onClick={prevImage}>&#x3c;</span>
//         <span className="button-next" onClick={nextImage}>&#x3e;</span> */}
//         <div className="gallery-track">
//           {
//             images.map((image, index) => {
//               return <div className="slide-image" style={ (index === 0) ? { backgroundImage: `url(${image})`, transform:"translateX(0%)" } : { backgroundImage: `url(${image})`, transform:"translateX(100%)" }}></div>
//             })
//           }
//         </div>
//         <div className="gallery-footer">
//           {
//             images.map((image, index) => {
//               return <div className="bubble-outer" onClick={jumpImage} id={index}>
//                 <div className="bubble-inner" id={index}>
//                 </div>
//               </div>
//             })
//           }
//         </div>
//       </div>
//     )

// }

// export default ImageSlider;
