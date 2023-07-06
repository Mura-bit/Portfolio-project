import pulse from "../src/pages/img/pulse.png";
import daycare from "../src/pages/img/daycare.png";
import mka from "../src/pages/img/mka2.png";
import wordPress from "../src/pages/img/wordPress.png";
import imdb from "../src/pages/img/imdb.png";
import weather from "../src/pages/img/weather.png";

const logotext = "Murat";
const meta = {
    title: "Murat Baktybekov",
    description: "I'm Murat Front End engineer, currently working in Seattle",
};

const introdata = {
    title: "I’m Murat BAktybekov",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
    },
    description: "Learn, learn, learn and than start coding!",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "a bit about my self",
  aboutme:
    "Hi everyone, my name is Murat and I want to share how I got into this field.",
};

const skills = [
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Jquery",
        value: 30,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "I have a Figma cool projects that I have done with curious things.",
    },
];

const dataportfolio = [
  {
    img: `${pulse}`,
    description: "Pulse project, Run with us!",
    link: "https://glittery-seahorse-b74cc6.netlify.app/",
  },
  {
    img: `${daycare}`,
    description: "daycare stay with us!",
    link: "https://helenlucydaycare.netlify.app/",
  },
  {
    img: `${mka}`,
    description: "Building material web site",
    link: "https://bespoke-praline-c6f911.netlify.app/",
  },
  {
    img: `${wordPress}`,
    description:
      "WordPress web site",
    link: "https://spontaneous-kelpie-47e26c.netlify.app/",
  },
  {
    img: `${imdb}`,
    description:
      "Online web site",
    link: "https://melodic-paletas-9b801d.netlify.app/",
  },
  {
    img: `${weather}`,
    description:
      "Weather web site",
    link: "https://lucent-baklava-d62198.netlify.app/",
  },
];

const contactConfig = {
    YOUR_EMAIL: "mura.usa11@gmail.com",
    YOUR_FONE: "(304)246-2863",
    description: "leave your comment here, what do you think about my portfolio",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/Mura-bit",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/murat-baktybekov-703373263/",
  twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};