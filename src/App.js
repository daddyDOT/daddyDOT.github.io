import './App.css';
import { GithubCard } from "github-user-repo-card";
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'

import { SiAboutdotme } from 'react-icons/si';
import { AiOutlineProject, AiOutlineArrowUp, AiOutlineQuestion } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import fetchRepoCount from './hooks/fetchRepoCount';

const App = () => {
  const [Projects, setProjects] = useState(0);

  useEffect(() => {
    const Function = async () => {
      setProjects(await fetchRepoCount());
    }
    Function();
  }, [])
  
  return (
    <div className='Root'>
      {/* navbar */}
      <nav>
        <p>😎 daddyDOT.github.io</p>
        <div className='Break'></div>
        <ul>
          <li><Link activeClass="active" to="Upper" spy={true} smooth={true} duration={500}>Top</Link></li>
          <li><Link activeClass="active" to="About" spy={true} smooth={true} duration={500}>About me</Link></li>
          <li><Link activeClass="active" to="Projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
          <li><Link activeClass="active" to="Footer" spy={true} smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <div className='Menu'>
          <Link activeClass="active" to="Upper" spy={true} smooth={true} duration={500}><AiOutlineArrowUp /></Link>
          <Link activeClass="active" to="About" spy={true} smooth={true} duration={500}><SiAboutdotme /></Link>
          <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={500}><AiOutlineProject /></Link>
          <Link activeClass="active" to="Footer" spy={true} smooth={true} duration={500}><AiOutlineQuestion /></Link>
        </div>
      </nav>
      
      {/* upper */}
      <div className='Upper' name='Upper'>
        <div className='Heading'>
          <p className='Description'>A passionate and hard-working individual, interested in programming</p>
          <div className='Image'></div>
          <hr />
          <h1>Hello there!</h1>
          <h5>My name is Ahmed Spahić</h5>
          <p className='Unnecessary'>or daddyDOT, if you like it more 😏</p>
        </div>

        <div className='Image'>
          <img src={require('./assets/images/pic.png')} alt='Portrait' className='Portrait'></img>
        </div>
      </div>

      {/* disclaimer */}
      <p className='Disclaimer'>This portfolio is always under development 😊</p>

      <hr />

      {/* about me */}
      <div className='About' name='About'>
        <div className='Text'>
          <div className='Info'>
            <h5>ABOUT ME</h5>
            <h2>As mentioned, a passionate and hard-working individual</h2>
            <p>My name is Ahmed Spahić and I am a high school graduate from the First gymnasium in Zenica. As an individual looking forward to learn and gain more experience in IT sector, I looked for many ways to get more knowledge and to show-off myself and my skills. Since my goal is to be fully suitable for a position in a IT company, but also for a continious progress at work, I can be seen in many sections of this sector such as web design, algorithms, computer science, UI/UX design and so on.</p>
            <p>During all of my four years of high school studies, I developed my interest in practical work in the IT sector. My desire for practical knowledge led me to the CSS 2023 competition, where I learned not only about the web development, but also about several Firm's such as AtlantBH while consultating with other, already employed, coleagues.</p>
            <p>Many positions in this sectors are challenging. However, I look forward to them.  Even if there is someone who is way more experienced than me, I will work hard and try my best to be worthy of that position, because I don't only care about me and my own future, but also about my future Firm's way to become more and more prestigious and well-known, in addition to helping my job coleagues and developing positive and healthy relationships.</p>
          </div>
          <div className='Images'>
            <div className='Card' style={{backgroundImage: `url(${require('./assets/images/githubpic.jpg')})`}}></div>
            <div className='Card' style={{backgroundImage: `url(${require('./assets/images/portrait.jpg')})`}}></div>
          </div>
        </div>
      </div>

      {/* projects */}
      <div className='Projects' name='Projects'>
        <div className='Info'>
          <h5>PROJECTS</h5>
          <h2>There are currently {Projects} repositories signed as<br /><i>#project</i></h2>
          <p>As an individual who is always seeking new challenges and opportunities, I find myself constantly intrigued by innovative projects. The thrill of diving into uncharted territory and pushing the boundaries of what is possible truly captivates my spirit. I am driven by a relentless desire to grow both personally and professionally, and I believe that engaging in exciting new ventures is the key to unlocking my full potential.</p>
          <p>While I take immense pride in my accomplishments, I also recognize the value of teamwork and collaboration. I believe that great projects are the result of a collective effort, where each individual brings their unique strengths to the table. I actively seek opportunities to engage with like-minded professionals, fostering an environment of open communication and shared aspirations. Together, we can achieve remarkable things.</p>
          <p>In conclusion, my unwavering enthusiasm for new projects, coupled with my strong work ethic and commitment to excellence, positions me as an ideal candidate for any undertaking. I am ready to embrace the unknown, break new ground, and demonstrate the depth of my capabilities. Together, let us embark on a journey of innovation, leaving a lasting legacy in the projects we undertake.</p>
          <p>All of my public projects are listed on my github profile which you can find at the bottom of this page.</p>
        </div>

        <div className='Repositories'>
          <div className='Repo'><GithubCard name="daddyDOT" type="repo" repository="top-gear" /></div>
          <div className='Repo'><GithubCard name="daddyDOT" type="repo" repository="daddyDOT.github.io" /></div>
        </div>
      </div>

      {/* footer */}
      <div className='Footer' name='Footer'>
        <div className='Socials'>
          <div className='Icons'>
            <a href='https://www.linkedin.com/in/ahmed-spahi%C4%87-0b5016260/'><div className='Icon'><FaLinkedin /></div></a>
            <a href='https://github.com/daddyDOT'><div className='Icon'><FaGithub /></div></a>
            <a href='https://facebook.com/daddyBALKANSAMP'><div className='Icon'><FaFacebook /></div></a>
            <a href='https://www.instagram.com/aspahic3/'><div className='Icon'><FaInstagram /></div></a>
          </div>
          <p>Made with <i>♥</i> by Ahmed Spahić</p>
        </div>
        
        <hr />

        <div className='Info'>
          <h5>CONTACT</h5>
          <h2>See you again soon! 👋</h2>
          <p>This portfolio is powered by <a href='https://pages.github.com/'>pages.github.com</a></p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
