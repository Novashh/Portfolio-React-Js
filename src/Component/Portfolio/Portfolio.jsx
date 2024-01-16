import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/pro-1.png';
import IMG2 from '../../assets/pro-2-1.png';
import IMG3 from '../../assets/pro-6.png';
import IMG4 from '../../assets/pro-4-1.png';
import IMG5 from '../../assets/pro-5-2.png';
import IMG6 from '../../assets/pro-3-1.png';
import IMG7 from '../../assets/p3.png';
import IMG8 from '../../assets/p2.png';



const data = [

  {
    id:1,
    image:IMG1,
    title: 'Super Hero Search || Get Random ',
    dest:'Explore your favorite superhero. Click "Search" for a random superhero. Discover hero name, image, and powerful description instantly.',
    github:"https://github.com/Novashh/Super-Hero-Api",
    demo:"https://project-hero-01.netlify.app/"
  },
  {
    id:2,
    image:IMG2,
    title: 'Mini Project',
    dest:'Mini project showcasing products for sale with three color options, logo uploading feature on the product, and a loading spinner during the loading process.',
    github:"https://github.com/Novashh/Umberlla-min-project",
    demo:"https://project-umbrella-02.netlify.app"
  },
  {
    id:3,
    image:IMG3,
    title: 'Facebook-Clone',
    dest:'Facebook clone built with pure HTML, CSS, and JavaScript. Three distinct sections - menu, feeds, and events, complemented by a night mode switch.',
    github:"https://github.com/Novashh/Facebook-clone",
    demo:"https://github.com/Novashh/Facebook-clone"
  }
  ,
  {
    id:4,
    image:IMG4,
    title: 'Bootstrap Project With Three Section',
    dest:'Crafted mobile-responsive web pages with Bootstrap, HTML, and CSS.Additional pages include About, Contact, and a seamless Login option. ',
    github:"https://github.com/Novashh/Bootstrap-iEducation",
    demo:"https://creative-banoffee-784653.netlify.app"
  },
  {
    id:5,
    image:IMG5,
    title: 'DisneyPlus Home Page React ',
    dest:'Disney-Plus React.Js projects designed with Styled-Component, React-Slick Carousel, and React-Router. Tailored for smaller devices with updated GitHub files.',
    github:"https://github.com/Novashh/Disney-plus-React-Js",
    demo:"https://ornate-seahorse-1f4627.netlify.app"
  },
  {
    id:6,
    image:IMG6,
    title: 'Netflix-Clone React App',
    dest:'Netflix clone React app featuring a dynamic UI, a diverse range of movies, and various recommended lists powered by data from the OMDB API.',
    github:"https://github.com/Novashh/Netflix-clone--React-Js",
    demo:"https://github.com/Novashh/Netflix-clone--React-Js"
  },
  {
    id:7,
    image:IMG7,
    title: 'Todos React App',
    dest:'Todo React app where you can add tasks, mark them as completed with a click on the icon turning them green, and delete tasks as needed.',
    github:"https://github.com/Novashh/Todo-app",
    demo:"https://652e79cdf607d003e418fbca--animated-faloodeh-b7de50.netlify.app"
  },
  {
    id:8,
    image:IMG8,
    title: 'Nutrimite E-Commerce React App',
    dest:'Neutrimite: A ayurvedic wellness Hub! shop web page which shows latest products and weekly special offers. Explore a collections of diverse items, sorting list of various items. Stay informed with up-to-date blog posts.',
    github:"https://github.com/Novashh/Nutrimite-E-com",
    demo:"https://snazzy-puffpuff-7d195c.netlify.app"
  },
 




]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

<div className="container portfolio_container">

{
  data.map(({id, image, title,dest, github, demo })=>{
    return(
      <article key={id} className='portfolio_item'>
        <div className="portfolio_item-image">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{dest}</p>
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
 