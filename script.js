// ---------------- Typed.js ----------------
const typed = new Typed(".auto-type", {
  strings: ["Frontend Developer", "Programmer", "Author"],
  typeSpeed: 90,
  backSpeed: 40,
  backDelay: 1200,
  startDelay: 500,
  loop: true,
  smartBackspace: false,
  showCursor: true,
  cursorChar: "|",
});

// ---------------- Button Elements ----------------
const aboutBtn = document.querySelector('.about-btn');
const skillsBtn = document.querySelector('.skills-btn');
const educationBtn = document.querySelector('.education-btn');
const experienceBtn = document.querySelector('.experience-btn');
const projectsBtn = document.querySelector('.projects-btn');

// ---------------- Popup Elements ----------------
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.querySelector('.close-btn');

// ---------------- Content for Each Section ----------------
const contentData = {
  about: `
    <div class="about-content">
      <div class="about-left">
        <img src="profile.jpg" alt="Profile Picture">
      </div>
      <div class="about-right">
        <p>
          I am Piyush Kumar, a Self-Taught Software Engineer turned Author. I have more than 5 years of hands-on experience working as a software engineer. I am the author of 10 books, and my books have been published globally. I live by sharing my knowledge by working on various open-source platforms and help others grow in this technology space. I love coding and writing, allowing others to absorb complex ideas and making them fun, useful, and easy to grasp. I am an individual who is passionate about creating solutions to solve real-life problems by developing new technologies. I LOVE working with individuals who want to do something new and create something totally OUT-OF-THE-BOX, creating amazing digital products. Let’s connect and make something AMAZING together.
        </p>
      </div>
    </div>
  `,
  skills: `<ul>
            <li>Frontend: HTML, CSS, JavsScript(ES6+), TYpeSCript, Tailwind CSS, React, Next</li><br>
            <li>State & Data: Redux, Context API, Rest API, GraphQL </li><br>
            <li>Backend & Database: NodeJS, ExpressJS, MongoDB, MySQL</li><br>
            <li>Performance and Accessibility: WCAG Guidelines, Lighthouse Audits, Code Splitting, Lazy Loading</li> <br>
            <li>Testing & tools: Jest, React Testing Library, Chrome Dev Tools, Vite, npm </li><br>
            <li>DevOps: Git & Github, Docker, Render. 
          </ul>`,
  education: `<ul>
                 <li><b>Diploma :</b> Electronics & Communication Engineering.<br> Ranchi University, India(2009-2012)<br> First Class with 62% </li> <br>
                 <li><b>Degree :</b> History(Honors)<br> Vinoba Bhave University, India (2016-2019)<br> First Class with 64%
                </ul>`,
  experience: `<ul>
                 <li>Company : Promit & Company</li>GSTIN : 20ABBFP3869L1Z2 <br> ARN : AA201125025773P<br>Role : Frontend Developer<br>Duration : 2021-Present<br> Responsibilities : Developing rsponsive web application, Collaborating with Design & backend team, implementing new features using modern frontend technologies.
                 </ul>`,
  projects: `<ul>
        <li><a href="https://piyush-kumar.store/" class="project-link" target="_blank" rel="noopener noreferrer">
            Project 1 - Personal BookStore: secure PayPal payment integration
          </a> </li>

      <li><a href="https://addons.mozilla.org/en-US/firefox/addon/laughy/" class="project-link" target="_blank" rel="noopener noreferrer">
            Project 2 - Laughy: Firefox AddOn
          </a></li>

      <li><a href="https://realtime-wildfire-tracker.netlify.app/" class="project-link" target="_blank" rel="noopener noreferrer">
            Project 3 - Realtime-wildfire-Tracker
          </a> </li>
          
    <li>  <a href="https://www.npmjs.com/package/funny-error-excuse" class="project-link" target="_blank" rel="noopener noreferrer">
            Project 4 - Funny-error-excuse : npm Package
          </a> </li>
    <li>  <a href="https://mamanourish.netlify.app/" class="project-link" target="_blank" rel="noopener noreferrer">
            Project 5 - MamaNourish: Pregnancy Nutrient Calculator
          </a> </li>
             </ul>`
};

// Function to open popup
function openPopup(content) {
  popupText.innerHTML = content;
  popup.style.display = 'flex';
}

// Event listeners
aboutBtn.addEventListener('click', () => openPopup(contentData.about));
skillsBtn.addEventListener('click', () => openPopup(contentData.skills));
educationBtn.addEventListener('click', () => openPopup(contentData.education));
experienceBtn.addEventListener('click', () => openPopup(contentData.experience));
projectsBtn.addEventListener('click', () => openPopup(contentData.projects));

// Close popup
closeBtn.addEventListener('click', () => popup.style.display = 'none');

// Close popup on outside click
window.addEventListener('click', e => {
  if (e.target === popup) popup.style.display = 'none';
});
