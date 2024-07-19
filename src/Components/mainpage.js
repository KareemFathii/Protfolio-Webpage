import { useState,useEffect } from "react"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ufoImage from '../images/ufo1.png'; 
const Mainpage =() =>{
    const [loopnum , setLoopnumber] = useState(0) // 3dad el lafat
    const [isdeleting , setDeleting] = useState(false) // check if it's deleting now or not 
    const [text ,setText] = useState("") // eh el text ely hytktb now f el page 
    const [delta , setDelte] = useState(200 - Math.random()*100) // it's used to detect the amount of time between transitions between words how fast each letter come fast after another letter // and when deleting the letters deleted faster than written  
    const datatowritten = ["Frontend Web Developer" , "Backend Web Developer" , "FullStack Web Developer"]
    const period = 2000

    useEffect ( ()=>{
        let ticker = setInterval(() => {
            tick()
        }, delta);
      return () => {clearInterval(ticker)}
      }, [text])

    const tick = () => {
        let i = loopnum % datatowritten.length
        let fulltxt = datatowritten[i] ;
        let updatedtext = isdeleting ? fulltxt.substring(0,text.length-1) : fulltxt.substring(0,text.length+1)
        setText(updatedtext)

        if (isdeleting){
            setDelte(delta => delta/2)
        } // yms7 bsor3a 3n lo baktb sor3a el da3f 

        if (!isdeleting && updatedtext === fulltxt){
            setDeleting(true)
            setDelte(period)
        }
        else if (isdeleting && updatedtext === ''){
            setDeleting(false)
            setLoopnumber(loopnum+1)
            setDelte(400)
        }
    }


    return (
        <section id="home" className=" container section1 ">
        <div className="row"> 
          <div className="col-md-6">
            <div className="title1div">
            <span className="title1"> Welcome in my protfolio </span>
            </div>
                <h1 className="completeing_sentence">{`Hi! I'm Kareem Fathii , I am ${text} `} </h1>
                  <p className="sec1desc">Hey Everyone This is my protfolio Web page using React .</p>
                  <button className="connectbutton" onClick={() => console.log('connect')}>Let’s Connect  <div className='arrowright'><FontAwesomeIcon className='iconmedia' icon={faArrowRight} size="lg" /></div>  </button>
               
          </div>
          <div className="col-md-6 rightpart">
         <img className="ufoimg" src={ufoImage} alt="UFO" />
          </div>
           </div> 
      </section>
      

    )
}
export default Mainpage
