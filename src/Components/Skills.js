import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img92 from '../images/92.png'
import img51 from '../images/51.png'
import img64 from '../images/64.png'
import img38 from '../images/38.png'
import img80 from '../images/80.png'

const Skills =() =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className='sec2' id="skills">
            <div class=" text-white skills ">
                <h2>Skills</h2>
                <p>You can see my skills percentage</p>
                <Carousel responsive={responsive} infinite={true} className='carosel_skills'>
                    
                    <div className='item1'>
                        <img src={img92} alt='image'  />
                        <h5>Frontend developer</h5>
                    </div>

                    <div className='item1'>
                        <img src={img51} alt='image'  />
                        <h5>Backend developer</h5>
                    </div>

                    <div className='item1'>
                        <img src={img38} alt='image'  />
                        <h5>Cyber Security</h5>
                    </div>
                    
                    <div className='item1'>
                        <img src={img64} alt='image' />
                        <h5>Data analyst</h5>
                    </div>

                    <div className='item1'>
                        <img src={img80} alt='image' />
                        <h5>Data Science</h5>
                    </div>

                     </Carousel>
                     
            </div>

        </section>
    )
}
export default Skills