import React from 'react'
import './experience.css';
import {MdLibraryAddCheck} from 'react-icons/md';

const Experience = () => {
  return (
    <section className='exp' id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>CSS/SASS</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>Jquery</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Beginner</small>
            </div>

            </article>
          </div>
        </div>

<div className="experience_otherskills">
  <h3>Backend Development</h3>
  <div className="experience_content">

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon'/>
            <div>
            <h4>Node.Js</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>Express.Js</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>Redux</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>
          </div>

</div>

<div className="experience_otherskills">
  <h3>Interpersonal skills / Languages</h3>
  <div className="experience_content">

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon'/>
            <div>
            <h4>Adaptability</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>Teamwork</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>Passionate</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>English</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon' />
            <div>
            <h4>Hindi</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='experience_details'>
            <MdLibraryAddCheck className='experience_details-icon'/>
            <div>
            <h4>Marathi</h4>
            <small className='text-light'>Native</small>
            </div>

            </article>
          </div>

</div>



      </div>
    </section>
  )
}

export default Experience;
