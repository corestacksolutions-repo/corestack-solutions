import {
    LuMessageCircleMore,
    LuPackageSearch,
    LuBoxes,
    LuShoppingCart,
    LuUsers,
    LuTrendingUp,
} from "react-icons/lu";

const businessChallenges = [
    {
        id: 1,
        icon: LuMessageCircleMore,
        title: "Orders on WhatsApp",
        description:
            "Important orders get buried in chats and are easily missed.",
    },
    {
        id: 2,
        icon: LuPackageSearch,
        title: "Disorganized Products",
        description:
            "No clear catalog makes it hard for customers to find what they want.",
    },
    {
        id: 3,
        icon: LuBoxes,
        title: "Manual Inventory",
        description:
            "Tracking stock manually leads to errors and lost sales.",
    },
    {
        id: 4,
        icon: LuShoppingCart,
        title: "Confusing Checkout",
        description:
            "Customers drop off when the ordering process is not simple.",
    },
    {
        id: 5,
        icon: LuUsers,
        title: "Poor Customer Experience",
        description:
            "Slow response times and disconnected systems create frustrating customer experiences.",
    },
    {
        id: 6,
        icon: LuTrendingUp,
        title: "Hard to Scale",
        description:
            "Without the right system, growth becomes slow and stressful.",
    },
];

export default businessChallenges;