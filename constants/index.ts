import { css3, mail, linkedin, github, instagram } from "../assests";
import racoon from '../public/daracoon.jpg'
import webpage from '../public/personal-webpage.png'
import bike from '../public/bike-maintenance.png'
import sorter from '../public/sorting-visualizer.png'
import highschool from '../public/highschool.png'

export const experiences = [
    {
      id: "experience-1",
      title: "Somethin Engineer",
      location: "Chihuahua, Mexico",
      company: "foo",
      link: "",
      period: "2021-2022",
      achievements: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.", 
        "Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis",
        "Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque"
      ]  
    },
    {
      id: "experience-2",
      title: "Somethin ENgineer Secured",
      location: "California, USA",
      company: "bar",
      link: "",
      period: "2019-2021",
      achievements: [
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa", 
        "quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
        "Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos"
      ]  
    },
    {
      id: "experience-3",
      title: "Somethin ENgineer",
      location: "CDMX, Mexico",
      company: "ada",
      link: "",
      period: "2018-2019",
      achievements: [
        "Qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet, consectetur, adipisci[ng] velit", 
        "sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam",
        "quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
      ]  
    },
  ];
  
export const projects = [
    {
      id: "project-1",
      title: "High School Testing App",
      tech: "Flask, Python, SQL",
      link: "https://github.com/Jay-DVT/high-school-app",
      image: highschool
    },
    {
      id: "project-2",
      title: "Bicycle Maintenance Tracker",
      tech: "ReactJS/Tailwind",
      link: "",
      image: bike,
    },
    {
      id: "project-3",
      title: "Personal Webpage",
      tech: "ReactJS/NextJS/Tailwind",
      link: "https://djay-dvt.netlify.app/",
      image: webpage,
    },
    {
      id: "project-4",
      title: "Algorithm Visualizer",
      tech: "Javascript",
      link: "",
      image: sorter,
    },
  ];
  
  export const media = [
    {
      id: "social-media-2",
      name: "Github",
      icon: github,
      link: "https://github.com/Jay-DVT",
    },
    {
      id: "social-media-3",
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/tvillanueva-diego/",
    },
  ];