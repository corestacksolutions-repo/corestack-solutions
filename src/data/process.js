import {
  LuMessagesSquare,
  LuSearch,
  LuBlocks,
  LuRocket,
  LuTrendingUp,
} from "react-icons/lu";

const workProcess = [
  {
    id: 1,
    label: "Listen",
    title: "Listen & Understand",
    description:
      "Great solution starts with a conversation. We take the time to understand your business, your goals, and the challenges standing in your way before recommending any technology.",
    icon: LuMessagesSquare,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },

  {
    id: 2,
    label: "Discover",
    title: "Discover Opportunities",
    description:
      "Together, we identify opportunities to improve operations, strengthen customer experiences, and simplify everyday processes. The biggest wins usually come from solving the smallest hurdles.",
    icon: LuSearch,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },

  {
    id: 3,
    label: "Build",
    title: "Build the Right Solution",
    description:
      "Whether it's implementing SmartShop, developing custom software, or refining existing systems, every solution is designed around your business-not the other way around.",
    icon: LuBlocks,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },

  {
    id: 4,
    label: "Launch",
    title: "Launch with Confidence",
    description:
      "We guide you through setup, testing, and deployment, ensuring your team is comfortable and confident using the new solution from day one.",
    icon: LuRocket,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },

  {
    id: 5,
    label: "Grow",
    title: "Grow Together",
    description:
      "Our relationship doesn't end after launch. We continue to support, improve, and adapt your digital solutions as your business grows and new opportunities emerge.",
    icon: LuTrendingUp,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
];

export default workProcess;