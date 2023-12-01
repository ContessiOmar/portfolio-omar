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
  
  
    return infoSection;
  }
  
  // Ici on aurait les projets
  function Projects(projects) {
    const projectsSection = document.createElement('section');
    projectsSection.className = 'projects-container';
  
  
    return projectsSection;
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
  const projectsData = [
    { id: 1, name: 'Project 1', description: 'Description 1', html_url: '#' },
  ];
  appDiv.appendChild(Projects(projectsData));
  appDiv.appendChild(Contact());
  