
import { 
  LiaFacebook, 
  LiaLinkedin, 
  LiaTwitter,
  LiaWhatsapp,
  LiaPhoneSolid 
} 
from "react-icons/lia";
import smart from '../assets/images/team/smart.png'

export default [
             {

                id:1,
                img:smart,
                alt:"Ishmael Smart",
                name:'Ishmael Smart Kaunda',
                role:'Front-End Engineer | Co-Founder | Finance',
                description:` 
                       Leads the design and 
                       development of user interfaces while contributing
                       to the financial planning and business growth. His 
                       work focuses on creating digital experiences that are
                       clear, practical, and aligned with business objectives. 
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
                img:smart,
                alt:"Gaddaf Ayub",
                name:'Gaddaf Ayub',
                role:'FullStack Engineer | Co-Founder | Operations ',
                description:`
                       As Frontend Engineer, Ishmael 
                       leads the design and 
                       development of intuitive, 
                       responsive, and engaging 
                       user interfaces.`,
                social:{
                       Phone:LiaPhoneSolid,
                       WhatsApp:LiaWhatsapp,
                       Facebook:LiaFacebook,
                       LinkedIn:LiaLinkedin,
                       Twitter:LiaTwitter,
                }
             },
]