import smartShop from "../assets/smartshop/smartshop.png"
import { 
   LuMapPin,
   LuSettings2,
   LuClipboardList

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
          A customized platform that enable
          business owners to sell products online.
          Whether it's a clothing boutique, an electronics store, 
          pharmacy, or any other retail business, SmartShop is 
          tailored to your products, branding, and customer experience`,
       benefits:[
           { id:1, 
             icon:LuSettings2, 
             title:'Built for You', 
             description:'Designed around your products, brand identity, and business processes.'
            },
           { id:2, 
             icon:LuMapPin, 
             title:'Reach every location', 
             description:'Seamless shopping across mobile, tablet, and desktop devices.'
            },
           { id:3, 
             icon:LuClipboardList, 
             title:'Manage orders easily', 
             description:'Track orders, manage inventory, and monitor sales from one dashboard.'
            },
       ]
    },
    
]