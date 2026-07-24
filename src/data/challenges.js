import {
  LuClipboardList,
  LuGlobe,
  LuMessagesSquare,
  LuWorkflow,
  LuTimerReset,
  LuLaptopMinimalCheck,
} from "react-icons/lu";

const businessChallenges = [
  {
    id: 1,
    title: "Too Much Paper Work",
    description:
      "Your team spends valuable time managing paperwork, spreadsheets, phone calls, and repetitive administrative work instead of focusing on growing the business.",
    icon: LuClipboardList,
  },

  {
    id: 2,
    title: "Limited Online Visibility",
    description:
      "Today's customers expect businesses to be visible online. Without a strong digital presence, you're missing opportunities to attract new customers and build lasting relationships.",
    icon: LuGlobe,
  },

  {
    id: 3,
    title: "Low Customer Engagement",
    description:
      "Without the right digital tools, following up with customers, managing enquiries, and encouraging repeat business becomes inconsistent and time consuming.",
    icon: LuMessagesSquare,
  },

  {
    id: 4,
    title: "Disconnected Systems",
    description:
      "Using multiple disconnected systems often leads to duplicated work, lost information, and unnecessary frustration for both staff and customers.",
    icon: LuWorkflow,
  },

  {
    id: 5,
    title: "Inefficient Operations",
    description:
      "Inefficient workflows reduce productivity and make it harder for your team to deliver a smooth customer experience as your business grows.",
    icon: LuTimerReset,
  },

  {
    id: 6,
    title: "Complex Technology",
    description:
      "Many businesses invest in software that doesn't match how they actually work. The right solution should support your processes, not force you to change everything.",
    icon: LuLaptopMinimalCheck,
  },
];

export default businessChallenges;