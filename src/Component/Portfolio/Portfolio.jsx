import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/pro-1.png';
import IMG2 from '../../assets/pro-2-1.png';
import IMG3 from '../../assets/pro-6.png';
import IMG4 from '../../assets/pro-4-1.png';
import IMG5 from '../../assets/pro-5-2.png';
import IMG6 from '../../assets/pro-3-1.png';
import IMG7 from '../../assets/pro7-2.png';



const data = [

  {
    id:1,
    image:IMG1,
    title: 'Super Hero Search || Get Random ',
    github:"https://github.com/Novashh/Super-Hero-Api",
    demo:"https://project-hero-01.netlify.app/"
  },
  {
    id:2,
    image:IMG2,
    title: 'Shows Product in Various Colors With Logo On It',
    github:"https://github.com/Novashh/Umberlla-min-project",
    demo:"https://project-umbrella-02.netlify.app"
  },
  {
    id:3,
    image:IMG3,
    title: 'Facebook-Clone Pure Html, Css, Javascript',
    github:"https://github.com/Novashh/Facebook-clone",
    demo:"https://github.com/Novashh/Facebook-clone"
  }
  ,
  {
    id:4,
    image:IMG4,
    title: 'Bootstrap Project With Three Section',
    github:"https://github.com/Novashh/Bootstrap-iEducation",
    demo:"https://creative-banoffee-784653.netlify.app"
  },
  {
    id:5,
    image:IMG5,
    title: 'Disney Plus-Clone React_Js',
    github:"https://github.com/Novashh/Disney-plus-React-Js",
    demo:"https://ornate-seahorse-1f4627.netlify.app"
  },
  {
    id:6,
    image:IMG6,
    title: 'Netflix-Clone React_Js',
    github:"https://github.com/Novashh/Netflix-clone--React-Js",
    demo:"https://github.com/Novashh/Netflix-clone--React-Js"
  },
  {
    id:7,
    image:IMG7,
    title: 'Portfolio React_Js',
    github:"",
    demo:""
  }
 




]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

<div className="container portfolio_container">

{
  data.map(({id, image, title, github, demo })=>{
    return(
      <article key={id} className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio_item-cta">
          <a href={github} rel='noreferrer' className='btn' target='_blank'>github</a>
          <a href={demo} rel='noreferrer' className='btn btn-prime' target='_blank'>Live Demo</a>
          
        </div>
      </article>
    )
  })
}

</div>

    </section>
  )
}

export default Portfolio;
 