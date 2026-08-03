
import { 
  LiaFacebook, 
  LiaLinkedin, 
  LiaTwitter,
  LiaWhatsapp,
  LiaPhoneSolid 
} 
from "react-icons/lia";
import smart from '../assets/images/team/smart.png'
import ray from '../assets/images/team/ray.png'

export default [
             {

                id:1,
                img:smart,
                alt:"Ishmael Smart",
                name:'Ismart Kaunda',
                role:'Front-End Engineer | Co-Founder | Finances',
                description:` 
                       Curious by nature and guided by purpose,
                       Ismart is an inquisitive thinker who enjoys learning new stuff, 
                       solving problems, and turning complex ideas into practical solutions.
                       He believes technology should serve people, strengthen businesses, and
                       create new opportunities.
                       `,
                social:{
                       Phone:LiaPhoneSolid,
                       WhatsApp:LiaWhatsapp,
                       Facebook:LiaFacebook,
                       LinkedIn:LiaLinkedin,
                       Twitter:LiaTwitter,
                }
             },
              {

                id:2,
                img: ray,
                alt:"Ray Kareem",
                name:'Ray Kareem',
                role:'FullStack Engineer | Co-Founder | Operations ',
                description:`
                     Business-focused technology enthusiast passionate about building digital solutions that create meaningful, lasting value. Driven by a vision to strengthen Malawi's business ecosystem, he combines technical expertise with strategic thinking to help organizations innovate, grow, and thrive through technology.`,
                social:{
                       Phone:LiaPhoneSolid,
                       WhatsApp:LiaWhatsapp,
                       Facebook:LiaFacebook,
                       LinkedIn:LiaLinkedin,
                       Twitter:LiaTwitter,
                }
             },
]