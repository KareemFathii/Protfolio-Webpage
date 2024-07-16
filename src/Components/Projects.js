import Nav from 'react-bootstrap/Nav';
import { Tab } from 'react-bootstrap'; 
import projimg7 from '../images/proj7.jpeg'
import projimg8 from '../images/proj8.jpeg'
import projimg3 from '../images/proj3.jpeg'
import projimg4 from '../images/proj4.jpeg'
import projimg5 from '../images/proj5.jpeg'
import projimg6 from '../images/proj6.jpeg'


import Projectcard from './Projectcard';
const Projects = () =>{
    const projects = 
        [{
            title : "France traviler" ,
            describ : "Places should visit in France" ,
            imgurl : projimg7

        },
        {
            title : "Pallagrism Detection" ,
            describ : "Using MOSS algorthim" ,
            imgurl : projimg3
 
            
        },
        {
            title : "Project management" ,
            describ : "Project management process" ,
            imgurl :projimg4
            
        },
        {
            title : "Machine learning Models" ,
            describ : "Developing house rent detection with ML algorthims" ,
            imgurl :projimg5
 
            
        },
        {
            title : "Gym Website" ,
            describ : "Building a great UI gym webdesign" ,
            imgurl : projimg6
            
        },
        {
            title : "Software developing life cycle" ,
            describ : "Project management with scrum process using jira" ,
            imgurl :projimg8
 
            
        },
    ]
    
    

    return (
        <section className="sec3" id='projects'>
            
            <div className="sec3part1">
                    <h2>Projects</h2>
                 <p>You can see my latest projects  </p>
         
        <Tab.Container defaultActiveKey="one" id="projects-tabs">
            <Nav variant="pills">
            <Nav.Item>
                <Nav.Link eventKey="one">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="two">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="three" >   Tab 3 </Nav.Link>    
            </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="one">
                    {/* <div className='cardsec row row-cols-lg-auto' > */}
                    <div className="grid-container  row-cols-lg-auto">
                {
                    projects.map((project , index)=>{
                        return(
                            <Projectcard 
                            key={index}  title={project.title} description={project.describ}  imgurl={project.imgurl}
                            />
                        )
                    })
                }
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="two">

                </Tab.Pane>
                <Tab.Pane eventKey="three" >
                    <p className='tab-3'> Hello i am kareem fathii how r u going !</p>
                </Tab.Pane>

            </Tab.Content>
        </Tab.Container>

            
            </div>

        </section>
    )
}
export default Projects