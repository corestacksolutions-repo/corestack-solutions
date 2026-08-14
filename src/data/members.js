import {
  LiaFacebook,
  LiaLinkedin,
  LiaGlobeSolid,
  LiaWhatsapp,
  LiaPhoneSolid,
} from "react-icons/lia";

import smart from "../assets/images/team/smart.png";
import ray from "../assets/images/team/ray.png";

export default [
  {
    id: 1,
    img: smart,
    alt: "Ishmael Smart",
    name: "Ismart Kaunda",
    role: "Front-End Engineer | Co-Founder | Finances",
    description: `
      Curious by nature and guided by purpose,
      Ismart is an inquisitive thinker who enjoys learning new stuff,
      solving problems, and turning complex ideas into practical solutions.
      He believes technology should serve people, strengthen businesses, and
      create new opportunities.
    `,
    socials: [
      {
        label: "LinkedIn",
        icon: LiaLinkedin,
        url: "https://www.linkedin.com/in/ishmael-kaunda-748121321",
      },
      {
        label: "WhatsApp",
        icon: LiaWhatsapp,
        url: "https://wa.me/265981457286",
      },
      {
        label: "Phone",
        icon: LiaPhoneSolid,
        url: "tel:+265887914433",
      },
    ],
  },
  {
    id: 2,
    img: ray,
    alt: "Ray Kareem",
    name: "Ray Kareem",
    role: "FullStack Engineer | Co-Founder | Operations",
    description: `
      Business-focused technology enthusiast passionate about building digital solutions that create meaningful, lasting value. Driven by a vision to strengthen Malawi's business ecosystem, he combines technical expertise with strategic thinking to help organizations innovate, grow, and thrive through technology.
    `,
    socials: [
      {
        label: "LinkedIn",
        icon: LiaLinkedin,
        url: "https://www.linkedin.com/in/ray-kareem-4b1b84426",
      },
      {
        label: "Facebook",
        icon: LiaFacebook,
        url: "https://web.facebook.com/ray.jay.751318/",
      },
      {
        label: "Portfolio",
        icon: LiaGlobeSolid,
        url: "https://ray-portifolio.vercel.app/",
      },
    ],
  },
];