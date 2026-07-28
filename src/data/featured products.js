import smartShop from "../assets/smartshop/smartmockup.png"
import { 
   LuBriefcaseBusiness,
   LuSigma,
   LuProjector

 } from "react-icons/lu"

export default [
    {
       id:1,
       img:smartShop,
       alt:'smart shop',
       title:'SmartShop',
       headline:'Sell Beyond Boundaries',
       bagde:'',
       use:'POS',
       description:`
         A fully customized e-commerce platform 
          designed for retailers who want to sell online without 
          compromising how they run their business.
          Whether you own a clothing boutique, electronics store, 
          pharmacy, supermarket, or any other retail business, 
          SmartShop is tailored to your products, branding, 
          workflows, and customer experience`,
       benefits:[
           { id:1, 
             icon:LuBriefcaseBusiness, 
             title:'Built for Your Business', 
             description:'Designed around your products, brand identity, and business processes.'
            },
           { id:2, 
             icon:LuSigma, 
             title:'Reach Customers Anywhere', 
             description:'Seamless shopping across mobile, tablet, and desktop devices.'
            },
           { id:3, 
             icon:LuProjector, 
             title:'Simplified Order Management', 
             description:'Track orders, manage inventory, and monitor sales from one dashboard.'
            },
       ]
    },
    
]