// skills.js

document.addEventListener('DOMContentLoaded', function () {
    fetch('skills.json')
      .then(response => response.json())
      .then(data => {
        const skillsContainer = document.querySelector('.skills-carousel');
  
        data.forEach(skill => {
          const figure = document.createElement('figure');
          figure.className = 'skills-slide';
  
          const img = document.createElement('img');
          img.src = skill.imgSrc;
          img.alt = skill.alt;
          img.className = skill.class;
          img.title = skill.title;
  
          figure.appendChild(img);
          skillsContainer.appendChild(figure);
        });
      })
      .catch(error => console.error('Error fetching skills data:', error));
  });
  