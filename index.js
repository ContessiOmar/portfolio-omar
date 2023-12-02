const competencies = [
  { name: 'JavaScript', iconClass: 'fa-brands fa-js', text: 'JavaScript' },
  { name: 'React', iconClass: 'fa-brands fa-react', text: 'React.js' },
  { name: 'HTML5', iconClass: 'fa-brands fa-html5', text: 'HTML5' },
  { name: 'CSS3', iconClass: 'fa-brands fa-css3-alt', text: 'CSS3' },
  { name: 'Git', iconClass: 'fa-brands fa-git' },
  {  text: 'REDUX' },
  {  text: 'SEO' }
];

const projectsData = [
  {
    "title": "Sophie Bluel (OpenClassRooms project)",
    "description": "My role in this project was to transform the HTML5 codes that were provided to me into Javascript, define the Login routes, retrieve data from the api and send new data, set up the layout based on whether or not the user was authenticated.",
    "github": "https://github.com/Omar-Belalami/Sophie_Bluel",
    "url": "https://github.com/Omar-Belalami/Sophie_Bluel"
  },
  {
    "title": "Nina Carducci (OpenClassRooms project)",
    "description": "My role in this project was to improve the site. Specifically, maximizing all SEO, accessibility and Best Practices parameters.",
    "url": "https://omar-belalami.github.io/Nina-Carducci/",
    "github": "https://github.com/Omar-Belalami/Nina-Carducci"
  },
  {
    "title": "Argent Bank (OpenClassRooms project)",
    "description": "My role in this project was to implement Redux to manage the state of a banking application, create login logout logics, manage username changes, user data security, green code compliance, and create new possible ways for the Backend team to be able to manage transactions.",
    "github": "https://github.com/Omar-Belalami/Argent-Bank",
    "url": "https://github.com/Omar-Belalami/Argent-Bank"
  }
];

// Ici on trouve un menu pour naviguer dans le site.
function Header() {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
  
    const menuItems = ['About Me', 'Projects', 'Contact'];
  
    menuItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    nav.appendChild(ul);
    header.appendChild(nav);
  
    return header;
  }
  
  // Intro du site
  function Welcome() {
    const welcomeSection = document.createElement('section');
    welcomeSection.className = 'welcome-container';
  
    const h2 = document.createElement('h2');
    h2.textContent = 'Welcome on my Portfolio!';
  
    const p = document.createElement('p');
    p.textContent = "My name's Omar, and I'm a front-end developer!";
  
    welcomeSection.appendChild(h2);
    welcomeSection.appendChild(p);
  
    return welcomeSection;
  }
  
  

function Info() {
  const infoSection = document.createElement('section');
  infoSection.className = 'apropos-container';

  const titleInfo = document.createElement('h3');
  titleInfo.textContent = 'About me';

  const subtitleInfo = document.createElement('p');
  subtitleInfo.textContent = "What I love about my job is translating creative ideas into functional, modern web solutions.";

  const titleCompetence = document.createElement('h4');
  titleCompetence.textContent = 'My skills:';

  const competenceList = document.createElement('ul');
  competenceList.className = 'competence-list';

  competencies.forEach(competency => {
    const listItem = document.createElement('li');
    const icon = document.createElement('i');
    icon.className = `fa ${competency.iconClass}`;

    const competencyText = document.createElement('span');
    competencyText.textContent = competency.text;

    listItem.appendChild(icon);
    listItem.appendChild(competencyText);
    competenceList.appendChild(listItem);
  });

  infoSection.appendChild(titleInfo);
  infoSection.appendChild(subtitleInfo);
  infoSection.appendChild(titleCompetence);
  infoSection.appendChild(competenceList);

  return infoSection;
}  
  

 // Ici on aurait les projets et le liens pour mon GitHub.
function Projects(projectsData) {
  const projectsSection = document.createElement('section');
  projectsSection.className = 'projects-container';
  const titleProjects = document.createElement('h2');
  titleProjects.textContent = 'Mes projets!';

  const projectsList = document.createElement('ul');

  projectsData.forEach(item => {
    const projectCard = document.createElement('li');

    const projectDetails = document.createElement('div');
    projectDetails.style.width = '100%';

    const title = document.createElement('h2');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    const buttonsContainer = document.createElement('div');

    const sourceCodeButton = createButton('Source Code', item.github);

    buttonsContainer.appendChild(sourceCodeButton);

    projectDetails.appendChild(title);
    projectDetails.appendChild(description);
    projectDetails.appendChild(buttonsContainer);

    projectCard.appendChild(projectDetails);
    projectsList.appendChild(projectCard);
  });

  projectsSection.appendChild(titleProjects);
  projectsSection.appendChild(projectsList);

  const githubContainer = document.createElement('div');
 githubContainer.className = 'github-container';

  const seeMoreSpan = document.createElement('span');
  seeMoreSpan.textContent = 'See More:';

  const githubIcon = document.createElement('i');
  githubIcon.className = 'fa-brands fa-github';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/Omar-Belalami';
  githubLink.target = '_blank';
  githubLink.rel = 'noreferrer';
  githubLink.appendChild(githubIcon);

  githubContainer.appendChild(seeMoreSpan);
  githubContainer.appendChild(githubLink);
  projectsSection.appendChild(githubContainer);

  return projectsSection;
}

  
  function createButton(text, link) {
    const buttonLink = document.createElement('a');
    buttonLink.href = link;
    buttonLink.target = '_blank';
    buttonLink.rel = 'noreferrer';
  
    const buttonText = document.createElement('span');
    buttonText.textContent = text;
  
    buttonLink.appendChild(buttonText);
  
    return buttonLink;
  }
  
  
  // Form de contact (mail)
function Contact() {
  const contactSection = document.createElement('section');
  contactSection.className = 'contact-container';

  const form = document.createElement('form');
  form.addEventListener('submit', handleSubmit);

  const labelName = createLabel('Name', 'name');
  const inputName = createInput('text', 'name');

  const labelEmail = createLabel('E-mail', 'email');
  const inputEmail = createInput('email', 'email');

  const labelMessage = createLabel('Message', 'message');
  const textareaMessage = document.createElement('textarea');
  textareaMessage.id = 'message';
  textareaMessage.name = 'message';

  const buttonSubmit = document.createElement('button');
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'Send';

  const errorMessage = document.createElement('p');
  errorMessage.className = 'error-message';

  form.appendChild(labelName);
  form.appendChild(inputName);

  form.appendChild(labelEmail);
  form.appendChild(inputEmail);

  form.appendChild(labelMessage);
  form.appendChild(textareaMessage);

  form.appendChild(buttonSubmit);

  form.appendChild(errorMessage);

  contactSection.appendChild(form);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: inputName.value,
      email: inputEmail.value,
      message: textareaMessage.value,
    };

    if (!formData.name || !formData.email || !formData.message) {
      errorMessage.textContent = 'Please fill in all fields.';
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/mdorrwlk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        errorMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        form.reset();
      } else {
        errorMessage.textContent = 'Error sending the form. Please try again later.';
      }
    } catch (error) {
      errorMessage.textContent = 'Error in the request. Please try again later.';
    }
  }

  function createLabel(text, htmlFor) {
    const label = document.createElement('label');
    label.textContent = text;
    label.htmlFor = htmlFor;
    return label;
  }

  function createInput(type, id) {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    return input;
  }

  return contactSection;
}

  
const appDiv = document.getElementById('app');

appDiv.appendChild(Header());
appDiv.appendChild(Welcome());
appDiv.appendChild(Info());

const projectsContainer = document.createElement('div');
projectsContainer.appendChild(Projects(projectsData));
appDiv.appendChild(projectsContainer);
appDiv.appendChild(Contact());

  