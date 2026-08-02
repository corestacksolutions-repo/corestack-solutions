import automation from "../assets/images/services/automation.jpeg"
import digitalTransformation from "../assets/images/services/digital-transformation.jpeg"
import eCommerce from "../assets/images/services/e-commerce-two.jpeg"
import digitalPlatform from "../assets/images/services/digital-platform.jpeg"
import systemSupport from "../assets/images/services/system-maintenance.jpeg"
import seo from "../assets/images/services/seo.jpeg"
import {
  LuWorkflow,
  LuWaypoints,
  LuShoppingBag,
  LuLayoutDashboard,
  LuShieldCheck,
  LuSearchCheck,
} from "react-icons/lu";
import { FiShield } from "react-icons/fi";
import { HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi2";
import { RiGlobalLine, RiShieldCheckFill, RiShieldCheckLine , RiShoppingBag2Line, RiShoppingBagFill, RiShoppingCart2Fill, RiShoppingCart2Line} from "react-icons/ri";

import { TbWorldSearch } from "react-icons/tb";
export default [
  {
    "id": 1,
    "image":automation,
    "alt":'automation',
    "icon": LuWorkflow,
    "title": "Business Process Automation",
    "description": "Automate repetitive operations, eliminate manual bottlenecks, and streamline business workflows through custom software solutions.",
    "deliverables": [
      "Workflow Automation",
      "Inventory Management Systems",
      "Reporting Dashboards"
    ],
    "businessImpact": "Reduce manual effort, improve accuracy, and increase operational efficiency.",
    "cta": "/services"
  },
   {
    "id": 2,
    "image":digitalTransformation,
    "alt":'digital-Transformation',
    "icon": LuWaypoints,
    "title": "Digital Transformation Consultancy",
    "description": "Evaluate your business processes to identify digital improvements that simplify operations and increase efficiency.",
    "deliverables": [
      "Corporate Websites",
      "Customer Portals",
      "Booking & Service Platforms"
    ],
    "businessImpact": "Improve customer experience and establish a stronger digital presence.",
    "cta": "/services"
  },
  
  {
    "id": 3,
    "image":eCommerce,
    "alt":'e-commerce',
    "icon": LuShoppingBag,
    "title": "E-Commerce Solutions",
    "description": `Sell products and services online through 
                    secure, scalable, and user-friendly 
                    commerce platforms.`,
    "deliverables": [
      "Online Stores",
      "Payment Integration",
      "Order & Inventory Management"
    ],
    "businessImpact": "Expand market reach and create additional revenue channels.",
    "cta": "/services"
  },
  {
    "id": 4,
    "image":digitalPlatform,
    "alt":'digital-platforms',
    "icon": LuLayoutDashboard,
    "title": "Custom Digital Platforms",
    "description": "Build professional digital touchpoints that strengthen customer trust, engagement, and business credibility.",
    "deliverables": [
      "Corporate Websites",
      "Customer Portals",
      "Booking & Service Platforms"
    ],
    "businessImpact": "Improve customer experience and establish a stronger digital presence.",
    "cta": "/services"
  },
  {
    "id": 5,
    "image":systemSupport,
    "alt":'system-support',
    "icon":  LuShieldCheck ,
    "title": "System Maintenance & Technical Support",
    "description": "Ensure business systems remain secure, reliable, updated, and continuously available for daily operations.",
    "deliverables": [
      "System Monitoring",
      "Security Updates",
      "Technical Support"
    ],
    "businessImpact": "Minimize downtime and maintain business continuity.",
    "cta": "/services"
  },
  {
    "id": 6,
    "image":seo,
    "alt":'seo/geo/aeo',
    "icon": LuSearchCheck,
    "title": "Online Visibility Optimization",
    "description": "Improve your business's online presence so potential customers can discover, trust, and engage with your brand more easily.",
    "deliverables": [
      "SEO Strategy",
      "AEO Optimization",
      "Performance Monitoring"
    ],
    "businessImpact": "Help customers find your business at the moment they need your services.",
    "cta": "/services"
  }
]