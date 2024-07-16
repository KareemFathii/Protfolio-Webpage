import { Col } from "react-bootstrap"
const Projectcard = ({title , description , imgurl}) => {


    return (
        // <Col sm={6} md={4}>
             <div className="grid-item">
          {/* <div className="cardd ">  */}
            <div className="imgbx" >
                <img src={imgurl} alt="image1" className="imgproj" />
            <div className="card_descr">
                  <h4> {title}</h4>
                  <p> {description}  </p>
            </div>

            </div>
             </div>
              

    )
}
export default Projectcard


