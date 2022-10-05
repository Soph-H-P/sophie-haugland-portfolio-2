import tracks from '../assets/images/tracks.png';
import paws from '../assets/images/paws.png';
import birds from '../assets/images/birds.png';

const projects = [
  {
    name: 'Tracks',
    description: 'E-commerce site displaying and selling shoes',
    imageSrc: tracks,
    type: 'Web development and design',
    externalLink: 'https://dapper-shoes.netlify.app',
    gitHub: 'https://github.com/Soph-H-P/app',
    longDescription:
      'Using a Strapi backend and React on the front end this was an e-commerce site for shoes. Through a series of user tests this site was checked for usability and accessibility. React gives quick loading times. Using styled components this website is fully responsive on all devices.',
  },
  {
    name: 'Paws Rescue',
    description: 'Rehoming homeless dogs',
    imageSrc: paws,
    type: 'Web development and design',
    externalLink: 'https://paws-animal-rescue.netlify.app/',
    gitHub: 'https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-Soph-H-P',
    longDescription:
      'This project React project, fetching data from an API. I chose to use the PetFinder API which allowed me to access data from dog rescue centers in America. I spent time designing an appealing website creating the graphics and choosing the colour palette carefully. This site has easy navigation, an intuitive design and fully responsive across all screen sizes. ',
  },
  {
    name: 'Birds of Østfold',
    description: 'Discover the birds around you.',
    imageSrc: birds,
    type: 'Web development and design',
    externalLink: 'https://birds-of-ostfold.netlify.app/',
    gitHub: 'https://github.com/Noroff-FEU-Assignments/project-exam-2-Soph-H-P',
    longDescription:
      'This is a simple app built using React with Typescript and Styled-Components. The Birds of Østfold site allows users to log bird sightings in their area as well as viewing other peoples sightings. A user can login which will give special access to "members only" bird sightings and to keep a log of their own sightings. They will also gain rank the more sightings they log. The hightest being a gold ranking birder. Admins for the site have the ability to add sightings themself, they can also moderate other peoples sightings. Before a sighting is available to the public it must be varified by an admin. An admin can also choose to delete a sighting if they deem it necessary. Admins can also add, edit and delete events that are happening in the area.',
  },
];

export default projects;
