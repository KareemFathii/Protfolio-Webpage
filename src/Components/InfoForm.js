import { useEffect, useState } from "react"
import alien1 from "../images/alien1.png"
const InfoForm =() => {
    const infodata ={
        fname :"",
        lname :"",
        phone :"",
        email : "",
        message :""
    }

    const [data , setData] =useState(infodata)
    const [submitbtn ,setsubmitbtn] = useState(false)
  
       const submit = () =>{
            setsubmitbtn(true)      
        }
        if(submitbtn){
            window.location.reload()
        }
      
       

    return (
    <>
    <section  className=" sec4 ">
        <div className="row">
          <div className="col-md-6 leftpartinfoo">
          <img className="alien1img" src={alien1}  alt="alien1" />
          </div>

          <div className="col-md-6 rightpart">
            <h2 className="get-touch"> Get in touch </h2>
            <input  type="text" placeholder="Enter your first name " className="input1" id="inputfname" onChange={(x)=>{
                setData( {...data , fname : x.target.value})  
            }} />
            <input  type="text" placeholder="Enter your last name "  className="input1"onChange={(x)=>{
              setData( { ...data ,lname : x.target.value})
             }} />
            <input  type="text" placeholder="Enter your Email"       className="input1"  onChange={(x)=>{
                setData( { ...data ,email : x.target.value})
            }}/>
            <input  type="text" placeholder="Enter your Phone "      className="input1" onChange={(x)=>{
                 setData( {...data , phone : x.target.value})
            }} />
            {/* <textarea id="textbox" rows="5" cols="30" className="textbox1" placeholder="Enter your message ...." onChange={(x)=>{
                setData( {...data  , message : x.target.value})
            }}></textarea>
            <button type="submit" className="submitbtn" onClick={submit} >   Submit   </button> */}

          </div>
        </div>
      </section>



    </>

)

}
export default InfoForm
