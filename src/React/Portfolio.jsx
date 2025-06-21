import React , {useEffect,useRef,useState} from 'react'
import './Portfolio.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import {faCircleDown,faCode,faCircle,faServer,faDatabase,faGear,faLink,faEnvelope,faPhone,faHeart,faCircleArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faPython,faGithub,faInstagram,faLinkedin,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import mesiya from '../ASSETS/Mesiya_FullStack_Resume1.pdf';
import bmi from '../ASSETS/bmi.png';
import crud from '../ASSETS/crud.png';
import gym from '../ASSETS/gym.png';
import port from '../ASSETS/port.png';
import spices from '../ASSETS/spices.png';
import todo from '../ASSETS/todo.png';
import tube from '../ASSETS/tube.png';
import studio from '../ASSETS/studio.png';
import weather from '../ASSETS/weather.png';
import joe from '../ASSETS/joe.jpg';
import joe4 from '../ASSETS/me1.JPG';
import emailjs from '@emailjs/browser';

import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Portfolio = () => {
  useEffect (() => {
    AOS.init({})
  },[])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nh1jltd', 'template_ubuxxlo', form.current, {
        publicKey: 'COh-m2KIXJAA0cFbb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ); 
      e.target.reset()
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
       <div className='portwidth'>
      <Navbar expand="lg"  className="  navba" >
      <Container >
        <Navbar.Brand href="#home" className='pot'>PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav "  >
          <Nav className="me-auto " >
            <Nav.Link href="#home" className='an'>HOME</Nav.Link>
            <Nav.Link href="#about" className='an'>ABOUT</Nav.Link>
            <Nav.Link href="#skills" className='an'>SKILLS</Nav.Link>
            <Nav.Link href="#projects" className='an'>PROJECTS</Nav.Link>
            <Nav.Link href="#contact" className='an'>CONTACT</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    <section id='home'>
       <div className='container-fluid'>
        <div className='row flr'>
            <div data-aos="fade-right" data-aos-duration="1000"  className='col-lg-6 col-md-12 col-12 hometext '><br/><br/><br/><br/><br/>
                <h1 className='text-center'>HI. I AM <span>MESIYA</span></h1>
                <h3 className='text-center'>PYTHON FULL-STACT DEVELOPER</h3>
                <h6  className='text-center'>Motivated and passionate Full Stack Developer with strong skills in React, Django,
                   and modern web technologies. Dedicated to delivering efficient, user-friendly applications and continuously learning to
                    grow in the software development industry.
                   Seeking to join a dynamic company where I can contribute my technical skills and enthusiasm for technology.</h6><br/>
                   <div className="butt"> <button  className='but hire'> <Nav.Link href="#contact">HIRE ME</Nav.Link></button> &nbsp;&nbsp; <button className=' more but'><Nav.Link href="#about">MORE INFO</Nav.Link> </button></div>
            </div>
            <div className='col-lg-6 col-md-12 col-12'><br/><br/><br/><br/>
              <img src={joe4} alt="homeimage"  className='img-fluid homeimg' data-aos="fade-down" data-aos-duration="1000"/>

            </div>
        </div>

       </div>
        
    </section>


    <section id='about'>
       <div className='container'>
        <h1 className='mark text-center subhead' data-aos="fade-down" data-aos-duration="1000">ABOUT <span>ME</span></h1>
        <div className='row abme'>
            <div className='col-lg-6 col-md-12 col-12 abbb'><br/><br/>
                <img className='img-fluid aboutimg' src={joe} alt='mesiyaa' data-aos="fade-right" data-aos-duration="1000" /><br/><br/>
                <h1 className='mes' data-aos="fade-right" data-aos-duration="1000">MESIYA</h1>
                <h4 className='fully'data-aos="fade-left" data-aos-duration="1000">PYTHON FULL-STACK DEVELOPER</h4>
                
                <button  className='filly' data-aos="fade-down" data-aos-duration="1000"><a href={mesiya}download="mesiya_resume" className='adown'>   DOWNLOAD RESUME <FontAwesomeIcon icon={faCircleDown}/> </a></button>
                
            </div>

            <div   className='col-lg-6 col-md-12 col-12 mooo'><br/>
                
                <h1 className='text-center moreab' data-aos="fade-left" data-aos-duration="1000">MORE ABOUT</h1><br/><br/>
                <h4 className='text-center' data-aos="fade-up" data-aos-duration="1000" >Technically proficient and driven Full Stack Developer with extensive expertise applications and technologies.
                     Equipped with knowledge of both front-end and back-end technologies, Eager to use technical know-how and excellent teamwork to
                      contribute to projects in an efficient manner while developing with the company. devoted to lifelong learning and technology
                       adaptation in order to provide effective, high-quality solutions that propel corporate success.</h4><br/>
            </div>


            
            <div  className='row edu'>
                <h1 className='text-center moreab' data-aos="zoom-in-down" data-aos-duration="1000"> EDUCATION</h1><br/><br/><br/><br/><br/>
            <div className='col-lg-4 col-md-6 col-12'>
            <Card style={{ width: '22rem' , height:'14rem',backgroundColor:'teal', border: '2px solid #fff'}} className='morecard'data-aos="fade-right" data-aos-duration="1000">
            
            <Card.Body className='cards' >
            <Card.Text className='tit' style={{color: "#fff",fontFamily:'monospace',fontWeight:'900',fontSize:'19px'}} >SSLC <br/>
              Don Bosco Hr.Sec School, <br/>
              Percentage : 66 %, <br/>
              Varadarajan Pet. <br/>
              2018 - 2019.
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>

            <div className='col-lg-4 col-md-6 col-12'>
            <Card style={{ width: '22rem' ,height:'14rem', backgroundColor:'teal', border: '2px solid #fff'}} className='morecard' data-aos="fade-left" data-aos-duration="1000">
            
            <Card.Body className='cards' >
            <Card.Text className='tit' style={{color: "#fff",fontFamily:'monospace',fontWeight:'900',fontSize:'19px'}} >HSC <br/>
              Don Bosco Hr.Sec School, <br/>
              Percentage : 77 %, <br/>
              Varadarajan Pet. <br/>
              2020 - 2021.
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>

            <div className='col-lg-4 col-md-6 col-12'>
            <Card style={{ width: '22rem' , height:'14rem' ,backgroundColor:'teal', border: '2px solid #fff'}} className='morecard' data-aos="fade-right" data-aos-duration="1000">
            
            <Card.Body className='cards' >
            <Card.Text className='tit' style={{color: "#fff",fontFamily:'monospace',fontWeight:'900',fontSize:'19px'}} >BACHELOR OF COMPUTER APPLICATION<br/>
              St.Joseph College Of Arts & Sciencs (Autonomous), <br/>
              CGPA : 6.7 , <br/>
              Cuddalore. <br/>
              2021 - 2024.
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>
            

            
            </div>


           
              
        </div>
        </div>
    </section>

    
    <section id='skills'>
      <div className='container'>
        <h1 className='mark text-center subhead' data-aos="fade-down" data-aos-duration="1000">MY <span>SKILLS</span></h1>
        <div className='row edu'>
        <h2 className='text-center uni' data-aos="fade-up" data-aos-duration="1000">Dynamic <span>Web</span> & Software <span>Development</span></h2><br/><br/><br/><br/>
        <div className='col-lg-6 col-md-12 col-12 cardskill'>
            <Card style={{ width: '25rem' ,height:'21rem', backgroundColor:'purple', border: '2px solid #00fefc'}} className='skillfi' data-aos="fade-right" data-aos-duration="1000">
            
            <Card.Body className='cards'>
            <Card.Text className='tit' style={{color: "#fff"}} ><h1 className='text-center'><FontAwesomeIcon icon={faCode} style={{color: "yellow"}}/> </h1><br/>
            <h3 className='text-center' >Web Development</h3>
            Motivated designer and developer with experience creating custom websites through HTML, CSS, JS, BOOTSTRAP, & REACT JS.
            Strong collabration skills and proven history of web development.
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>


            <div className='col-lg-6 col-md-12 col-12'>
            <Card style={{ width: '25rem' , height:'21rem', backgroundColor:'purple', border: '2px solid #00fefc'}} className='skillfi' data-aos="fade-left" data-aos-duration="1000">
            
            <Card.Body className='cards'>
            <Card.Text className='tit' style={{color: "#fff"}} ><h1 className='text-center'><FontAwesomeIcon icon={faPython} style={{color: "yellow"}}/> </h1><br/>
            <h3 className='text-center' >Python Backend Development</h3>
            Motivated designing with DjangoFrameWork for Backend Development like Object Oriented Models for Database and also provide a default Admin panal
            for CRUD OPERATIONS. Strong collabration skills and proven history of web development using MySQl, SQLLITE.
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>
       </div><br/><br/>
       <h2 className='text-center uni' data-aos="fade-down" data-aos-duration="1000">Tools  & <span>Technology</span></h2><br/><br/>
   <div  className='row'>
   <div className='col-lg-3 col-md-6 col-12 '>
            <Card style={{ width: '18rem' ,height:'16rem', backgroundColor:'black', border: '2px solid #00fefc'}} className='toolskill' data-aos="fade-right" data-aos-duration="1000">
            
            <Card.Body className='cards'>
            <Card.Text className='tit' style={{color: "#fff"}} ><h1 className='text-center'><FontAwesomeIcon icon={faCode} style={{color: "yellow"}}/> </h1>
            <h6 className='text-center'>Programing Languages & Web Development</h6>
              
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />  <span>   Html</span>  </h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />   <span>   Css</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Javascript</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Python</span></h6>
               
              
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>

            <div className='col-lg-3 col-md-6 col-12'>
            <Card style={{ width: '18rem' ,height:'16rem', backgroundColor:'black', border: '2px solid #00fefc'}} className='toolskill' data-aos="fade-left" data-aos-duration="1000">
            
            <Card.Body className='cards'>
            <Card.Text className='tit' style={{color: "#fff"}} ><h1 className='text-center'><FontAwesomeIcon icon={faServer} style={{color: "yellow"}}/> </h1>
            <h6 className='text-center'>FrameWorks & Libraries</h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Bootstrap</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   React JS</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Material UI</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />  <span>   Django</span>  </h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />   <span>  Django RestFramework</span></h6>
               
               
              
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>

            <div className='col-lg-3 col-md-6 col-12'>
            <Card style={{ width: '18rem' , height:'16rem',backgroundColor:'black', border: '2px solid #00fefc'}} className='toolskill'data-aos="fade-right" data-aos-duration="1000">
            
            <Card.Body className='cards'>
            <Card.Text className='tit' style={{color: "#fff"}} ><h1 className='text-center'><FontAwesomeIcon icon={faDatabase} style={{color: "yellow"}}/> </h1>
            <h6 className='text-center'>DataBase & Platform</h6>
              
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />  <span>   MY Sql</span>  </h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />   <span>   SqlLite</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Netlify</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Vercel</span></h6>
               
              
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>

            <div className='col-lg-3 col-md-6 col-12'>
            <Card style={{ width: '18rem' ,height:'16rem', backgroundColor:'black', border: '2px solid #00fefc'}} className='toolskill' data-aos="fade-left" data-aos-duration="1000">
            
            <Card.Body className='cards'>
            <Card.Text className='tit' style={{color: "#fff"}} ><h1 className='text-center'><FontAwesomeIcon icon={faGear} style={{color: "yellow"}}/> </h1>
            <h6 className='text-center'>Tools</h6>
              
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />  <span>   Git</span>  </h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />   <span>   GitHub</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Vs Code</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Postman</span></h6>
               <h6 > <FontAwesomeIcon icon={faCircle} style={{color: "#888b91",fontSize:'7px',paddingBottom:'2px'}} />    <span>   Pycharm</span></h6>
               
              
            </Card.Text>
            </Card.Body>
            </Card>
            
            </div>
   </div>
   
    </div>
    </section>
   



   
    <section id='projects'>
      <div className='container'>
        <h1 className='mark text-center subhead' data-aos="fade-down" data-aos-duration="1000">MY <span>PROJECTS</span></h1><br/><br/><br/>
        <div  className='row'>
        <div className='col-lg-4 col-md-6 col-12'>
                <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}} className='adjust' data-aos="fade-right" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={gym} />
                <Card.Body className='cards' style={{borderTop:"2px solid #00fefc",borderRadius:'3px'}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>LDRAGO FITNESS GYM</Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> HTML-CSS-BOOTSTRAP-REACT JS-EMAIL JS</Card.Title>
                <button className='btnweb web22'> <a href="https://gym-mesiyas-projects-6f56510b.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:'aqua'}}  /> Website </a></button><button className='btnweb web23'><a href="https://github.com/MESIYA05/Gym"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
        <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}}className='adjust'data-aos="fade-left" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={spices} />
                <Card.Body className='cards'  style={{borderTop:"2px solid #00fefc"}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>ORGANIC MASALA'S WEBSITE</Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> HTML-CSS-BOOTSTRAP</Card.Title><br/>
                <button className='btnweb web22'> <a href="https://organic-spicey-masala.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:'aqua'}}  /> Website </a></button><button className='btnweb web23'><a href="https://github.com/MESIYA05/Organic-spicey-masala"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>
        <div className='col-lg-4 col-md-6 col-12'>
        <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}} className='adjust'data-aos="fade-right" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={port} />
                <Card.Body className='cards' style={{borderTop:"2px solid #00fefc"}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>SMILER PORTFOLIO</Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> HTML-CSS-JAVASCRIPT</Card.Title><br/>
                <button className='web24'><a href="https://github.com/MESIYA05"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
        <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}} className='adjust'data-aos="fade-left" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={todo} />
                <Card.Body className='cards' style={{borderTop:"2px solid #00fefc"}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>TODO-LIST WEBAPP</Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> HTML-CSS-JAVASCRIPT-LOCAL HOST</Card.Title>
                <button className='btnweb web22'> <a href="https://todoapp-liart-eight.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:'aqua'}}  /> Website </a></button><button className='btnweb web23'><a href="https://github.com/MESIYA05/todoapp"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
        <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}}className='adjust'data-aos="fade-right" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={tube} />
                <Card.Body className='cards' style={{borderTop:"2px solid #00fefc"}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>YOUTUBE VIDEO DOWNLOADER</Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> HTML-CSS-DJANGO FRAMEWORK</Card.Title><br/>
                <button className='web24'><a href="https://github.com/MESIYA05/utube-vd-downloader"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
        <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}}className='adjust'data-aos="fade-left" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={crud} />
                <Card.Body className='cards' style={{borderTop:"2px solid #00fefc"}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>CRUD OPERATIONS</Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> HTML-CSS-BOOTSTRAP-DJANGO FRAMEWORK-MY SQL</Card.Title>
                <button className='web24'><a href="https://github.com/MESIYA05/crud-operations"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>


        <div className='col-lg-4 col-md-6 col-12'>
        <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}}className='adjust'data-aos="fade-right" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={bmi} />
                <Card.Body className='cards' style={{borderTop:"2px solid #00fefc"}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>BMI VALUE CALCULATION</Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> HTML-CSS-BOOTSTRAP-REACT JS</Card.Title><br/>
                <button className='btnweb web22'> <a href="https://calculatebmivalue.netlify.app/"><FontAwesomeIcon icon={faLink} style={{color:'aqua'}}  /> Website </a></button><button className='btnweb web23'><a href="https://github.com/MESIYA05/CalculateBmiValue"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>



        <div className='col-lg-4 col-md-6 col-12'>
        <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}}className='adjust'data-aos="fade-left" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={weather} />
                <Card.Body className='cards' style={{borderTop:"1px solid #00fefc",borderRadius:'2px'}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>CURRENT WEATHER FINDER</Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> HTML-CSS-BOOTSTRAP-JAVASCRIPT</Card.Title>
                <button className='btnweb web22'> <a href="https://weather-seven-orcin.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:'aqua'}}  /> Website </a></button><button className='btnweb web23'><a href="https://github.com/MESIYA05/weather"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>

        <div className='col-lg-4 col-md-6 col-12'>
        <Card style={{ width: '24rem' ,height:'22rem', backgroundColor:'black', border: '2px solid #00fefc',boxShadow:'1px 0px 7px 1px rgba(0,254,252,0.9)'}}className='adjust'data-aos="fade-right" data-aos-duration="1000">
                <Card.Img  className="text-center " variant="top" src={studio} />
                <Card.Body className='cards' style={{borderTop:"1px solid #00fefc",borderRadius:'2px'}}>
                <Card.Text className='text-center' style={{color:'#fff',fontFamily:'bold',fontWeight:'900'}}>TYSON STUDIO </Card.Text>
                <Card.Title className=' text-center tit' style={{color: "#fff"}} ><FontAwesomeIcon icon={faCircle} style={{color: "green",fontSize:'8px',paddingBottom:'5px'}} /> REACT-HTML-CSS-BOOTSTRAP-DJANGO RESTFRAMEWORK-MYSQL</Card.Title>
                <button className='btnweb web22'> <a href="https://tysonstudio.vercel.app/"><FontAwesomeIcon icon={faLink} style={{color:'aqua'}}  /> Website </a></button><button className='btnweb web23'><a href="https://github.com/MESIYA05/Tysonstudio"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'19px'}}  />    GitHub </a> </button>
                </Card.Body>
                </Card>
        </div>



       
          
        </div>
      </div>
    </section>
   
    <section id='contact'>
      <div className="container-fluid">
      <h1 className='mark text-center subhead' data-aos="fade-down" data-aos-duration="1000">CONTACT <span>US</span></h1>
        <div  className="row condiv">
          <div  data-aos="fade-right" className='col-lg-6 col-md-6 col-12 con1'>
           <h3 className='text-center' >Get in Touch Us</h3>
           <h4><a href="mailto:mesiya2002samy@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{color:'#fff',fontSize:'30PX'}} />  EMAIL</a></h4>
           <h4><a href="tel:9361726533"><FontAwesomeIcon icon={faPhone} style={{color:'#fff',fontSize:'30PX'}}  /> +919361726533</a></h4>
           <h4><a href="https://www.instagram.com/darkness_shadow_boy_05?igsh=ZG5zYTd5bGxsMXZq"><FontAwesomeIcon icon={faInstagram}style={{color:'#fff',borderRadius:'8px',fontSize:'30PX'}}  /> INSTAGRAM</a></h4>
           <h4><a href="https://github.com/MESIYA05"> <FontAwesomeIcon icon={faGithub} style={{color:'#fff',backgroundColor:'black',borderRadius:'50%',fontSize:'30PX'}}  />    GitHub </a> </h4>
           <h4><a href="https://www.linkedin.com/in/mesiya"><FontAwesomeIcon icon={faLinkedin} style={{color:'#fff',fontSize:'30PX'}} /> LINKEDIN</a></h4>
           <h4><a href="http://wa.me/+919361726533"><FontAwesomeIcon icon={faWhatsapp} style={{color:'darkgreen',fontSize:'30PX'}} />  WHATSAPP</a></h4>
          </div>
          <div data-aos="fade-left" className='col-lg-6 col-md-6 col-12 con2'>
          <h3 className='text-center' >Get in Touch For Collabrations</h3>
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="username" placeholder='Enter Full Name'minLength={3} maxLength={30} required/><br/>
              <input type="text" name="mobileno" placeholder='Enter Mobile Number' minLength={10} maxLength={10} required/><br/>
              <input type="email"  name="useremail" placeholder='Enter Email' required /><br/>
              <input type="text" name="subject"  placeholder='Subject'title='pls reply' required /><br/>
              <textarea name="message"  placeholder='Message' required ></textarea><br/>
              <button type="submit" value="Send" className='conbut'>GET IN TOUCH</button>
            </form>
          </div>

          
        </div>
        <div className=" row fixed bottom-4 right-4">
      {visible && (
        <button onClick={scrollToTop} className="p-3 rounded-full shadow-lg bg-blue-500 text-white" style={{backgroundColor:'black',border:'none'}}>
          <FontAwesomeIcon icon={faCircleArrowUp} style={{color:'#00fefc',fontSize:'2rem'}}/>
        </button>
      )}
    </div>
      
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-12 footer' >
            <h5 className='text-center' >Thank You For Visiting <FontAwesomeIcon icon={faHeart} style={{color: "red"}} />. </h5>

          </div>
        </div>
      </div>
    </section>
    </div>
    </>
  )
}

export default Portfolio
