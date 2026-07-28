// Placeholder Images
import storefrontImg from "../assets/smartshop/storefront.png";
import productImg from "../assets/smartshop/product.png";
import checkoutImg from "../assets/smartshop/checkout.png";
import dashboardImg from "../assets/smartshop/dashboard.png";



const smartShopSlides = [
    {
        id: 1,

        button: "Storefront",

        title: "A Storefront That Turns Visitors Into Customers",

        description:
            "Create a beautiful online storefront that showcases your products professionally, builds trust with shoppers, and makes buying effortless from any device.",

        image: storefrontImg,

        features: [
            "Professionally branded online storefront",
            "Fully responsive across phones, tablets and desktops",
            "Easy navigation that helps customers find products faster",
        ],
    },

    {
        id: 2,

        button: "Product Page",

        title: "Products That Sell Themselves",

        description:
            "Present every product with clear images, pricing, descriptions and variations, giving customers all the information they need before making a purchase.",

        image: productImg,

        features: [
            "High-quality product galleries",
            "Organized categories and collections",
            "Product variants like size, colour and stock availability",
        ],
    },

    {
        id: 3,

        button: "Checkout",

        title: "A Checkout Experience Built For Conversion",

        description:
            "Reduce abandoned carts with a fast, intuitive checkout process that keeps customers moving smoothly from product selection to order confirmation.",

        image: checkoutImg,

        features: [
            "Simple step-by-step checkout",
            "Secure order placement",
            "Quick confirmation for every purchase",
        ],
    },

    {
        id: 4,

        button: "Admin Dashboard",

        title: "Everything You Need To Run Your Store",

        description:
            "Manage products, monitor orders, track inventory and understand your business performance from one powerful dashboard designed for everyday operations.",

        image: dashboardImg,

        features: [
            "Real-time order management",
            "Inventory and product control",
            "Business insights through an intuitive dashboard",
        ],
    },
];

export default smartShopSlides;