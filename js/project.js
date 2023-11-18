fetch('project.json')
      .then(response => response.json())
      .then(projects => {
        const container = document.getElementById('projectsContainer');

        // Créer les cartes dynamiquement
        projects.forEach(project => {
          const card = document.createElement('div');
          card.className = 'card';

          const img = document.createElement('img');
          img.src = project.imageSrc;

          const title = document.createElement('div');
          title.className = 'title';
          title.textContent = project.title;

          const icons = document.createElement('div');
          icons.className = 'icons';
          const linkKeys = Object.keys(project.links);
          linkKeys.forEach(linkKey => {
            const link = document.createElement('a');
            link.href = project.links[linkKey];
            link.target = '_blank';
            const icon = document.createElement('i');
            icon.className = linkKey === 'website' ? 'fa fa-link' : 'fab fa-github';
            link.appendChild(icon);
            icons.appendChild(link);
          });

          const popover = document.createElement('div');
          popover.className = 'popover';
          const description = document.createElement('p');
          description.innerHTML = project.description;
          popover.appendChild(description);

          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(icons);
          card.appendChild(popover);

          container.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching projects:', error));
