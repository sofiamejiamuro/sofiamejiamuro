import React from "react";
import { PiRobot } from "react-icons/pi";
import { IoCodeOutline } from "react-icons/io5";
import sam from "@/public/sam.png";
import cat from "@/public/cat.png";
import herdez from "@/public/herdez.png";
import guru from "@/public/guru.png";
import box from "@/public/box.png";
import voice from "@/public/voice_devices.png";
import bot from "@/public/bot.png";
import dangerplanet from "@/public/danger-planet.png";
import labo from "@/public/laboworkshop.png";
import manual from "@/public/manual.png";
import conference from "@/public/conference.png";
import wivmex from "@/public/wivmex.png";


export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Resources",
    hash: "/#resources",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
] as const;

export const projectsData = [
  {
    title: "Conversational AI",
    description:
    "SAM and ALVI. AI agents powered by an LLM.",
    tags: ["Prompt Engineering", "Conversational AI", "ChatGPT", "Product Design", "UX Design"],
    imageUrl: sam,
    url:"/conversational-ai",
    hash:"#conversational-ai"
  },
  {
    title: "Challenges",
    description:
      "A variety of challenges designed for job applications",
    tags: ["Conversation Design", "Chatbots", "UX Research", "DialogFlow", "API", "Code"],
    imageUrl: guru,
    url:"/challenges",
    hash:"#challenges"
  },
  /**
  {
    title: "SAM Talleres",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Prompt Engineering", "Conversational AI", "ChatGPT", "Product Design", "UX Design"],
    imageUrl: cat,
    url:"/club-atletico-talleres"
  },

  {
    title: "Herdez",
    description:
      "Voice assistant designed to provide recipes to users quickly and conveniently, enhancing the cooking experience.",
    tags: ["Dialog Flow", "Product Design", "UX","Prompt Engineering", "Conversational AI", "Gemini", "project"],
    imageUrl: herdez,
    url:"/recipes",
    hash:"#herdez"
  },
  **/
] as const;
export const projectsData_2= [
  {
    title: "Voice Projects",
    description:
      "Voice and Multimodal experiences.",
    tags: ["Conversation Design", "VIU", "UX Research", "DialogFlow","Alexa Skills", "Multimodal", "LLM" , "Conversational AI"],
    imageUrl: voice,
    url:"/voice-projects",
    hash:"#voice-projects"
  },
  {
    title: "LLMs Playground",
    description:
      "Experimentation on different Large Language Models",
    tags: ["Prompt Engineering", "ChatGPT", "Gemini", "Conversational AI",],
    imageUrl: bot,
    url:"/llm-playground",
    hash:"#playground"
  },
  
  /*
    {
    title: "Travel Guru",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Conversation Design", "UX Research", "DialogFlow", "UX Writing"],
    imageUrl: guru,
    url:"/travel-guru"
  }, 
  
  {
    title: "Box Trainer",
    description:
      "A voice-guided immersive multimodal experience to help users train box.",
    tags: ["Conversation Design", "VIU", "UX Research", "DialogFlow", "multimodal"],
    imageUrl: box,
    url:"/boxing",
    hash:"#box-trainer"
  },
  {
    title: "Danger Planet",
    description:
      "A multimodal action focused in reinforcing the instructions that children already know about how to act on natural disasters and accidents at home.",
    tags: ["Conversation Design", "VIU", "UX Research", "DialogFlow", "multimodal", "hackathon"],
    imageUrl: dangerplanet,
    url:"/danger-planet",
    hash:"#danger-planet"
  },
  */
  
] as const;

export const experiencesData = [
  {
    title: "SANTEX - Conversational AI Designer",
    /*
    location: "Remote, USA",
    description:
      "I optimize chatbots powered by Language Models (LLM) to enhance user experiences with human-like and context-aware responses. I conduct UX research, create bot personas, and develop engaging conversational flows and system prompts. I establish testing methodologies, design guidelines, analyze usage data, and continuously improve AI performance.",
  
    */
    description: "Conversational AI Design | UX Research | UX Writing | Prompt Engineering | Data Analysis | Dashboard Design | User Acceptance Testing",
    icon: React.createElement(PiRobot),
    date: "May 2023 - present",
  },
  {
    title: "ESPRESSIVE - Sr Conversational AI Analyst - Partner Success",
    /*location: "Remote, USA",
    description:
    "I analyze and optimize chatbot interactions for customer-facing scenarios, ensuring they meet customer requirements and enhance user experiences. I customize chatbots, troubleshoot issues, and collaborate with Customer Success teams to drive performance improvement. My role includes managing bot implementation from UAT to launch, analyzing usage metrics with Excel and Python.",
    */
    description: "Conversational AI | Data Analysis | Bot Training | Customer Management",
    icon: React.createElement(PiRobot),
    date: "Apr 2021 - Oct 2023",
  },
  {
    title: "ESPRESSIVE - Conversational AI Analyst",
    /*
    location: "Remote, USA",
    description: "",
    */
    description: "Conversational AI | Data Analysis | Bot Training | Customer Management",
    icon: React.createElement(PiRobot),
    date: "Oct 2021 - Mar 2023",
  },
  {
    title: "AURONIX - Conversational Designer",
    /*
     location: "Mexico City, MX",
    description:
    "As a seasoned professional in product design and conversational experience management, I led the creation of engaging chatbot interactions across multiple platforms, integrating creative strategy with technical expertise. I managed the entire design lifecycle, conducted UX research, developed conversational flows, and deployed chatbots on platforms like WhatsApp and Facebook Messenger. Additionally, I established guidelines for conversational design and led initiatives to optimize performance and resolve technical issues.",
    */
    description:"Conversation Design | UX Writing | UX Reasearch | Bot Building | API Implementation",
    icon: React.createElement(PiRobot),
    date: "May 2021 - Sept 2021",
  },
  {
    title: "PEFAI - Front-end Developer",
    /*
    location: "Mexico City, MX",
    description:
    "As a Front-end Developer, I have significantly contributed to the development of SaaS products from inception to modernization, enhancing performance, scalability, and user experience. Proficient in JavaScript, TypeScript, CSS, HTML, and Git-GitHub, I spearheaded the evolution of a SaaS product and adopted modern technologies like React, Node, and Emotion.",
    */
    description:"JavaScript | TypeScript | CSS | HTML | Git | Github",
    icon: React.createElement(IoCodeOutline),
    date: "Dec 2019 - May 2021",
  },
] as const;

export const skillsData = [
  "Conversational AI Design",
  "Content Design",
  "Bot Persona Creation",
  "Prompt Engineering",
  "Voice User Interface Design",
  "Content Strategy",
  "UX Research",
  "UX Design",
  "UX Writing",
  "Usability Testing",
  "User Acceptance Testing",
  "Python",
  "JavaScript",
  "TypeScript",
  "REST",
  "React",
  "CSS",
  "HTML",
  "Alexa Dev Console",
  "Dialog Flow",
  "Amazon Lex",
  "Spreadsheets",
  "Miró",
  "Figma",
  "Voiceflow",
  "Guidelines creation",
  "Documentation",
] as const;

export const resourcesData = [
  {
    title: "Manual - Design and Develop of Conversational Products (es)",
    description: "",
    tags: ["Manual","Conversation Design", "Skills", "Product Design", "Portfolio"],
    imageUrl: manual,
    url:"https://sofiamejia.notion.site/Designing-and-Developing-Conversational-Products-Manual-es-128c4ffceba24995879ec1f4105d8e28"
  },
  {
    title: "Conference - Convo design changes implementing LLMs? (es)",
    description:"",
    tags: ["Speaker","Conference", "LLMs", "Conversation Design"],
    imageUrl: conference,
    url:"https://www.youtube.com/watch?v=hOSfF1P6QBo&t=1s"
  },

] as const;

export const resourcesData_2 = [
   {
    title: "Workshop - Conversational Interfaces: Chatbots and voicebots (es)",
    description:"",
    tags: ["Sepaker","Conversation Design", "VIU", "UX Research", "DialogFlow"],
    imageUrl: labo,
    url:"https://www.linkedin.com/posts/activity-6945901114911322112-vvsS?utm_source=share&utm_medium=member_desktop"
  },
  {
    title: "Ambassador - Women in Voice Mexico",
    description:"",
    tags: ["Women Empowerment", "Mentoring", "Networking", "Community"],
    imageUrl: wivmex,
    url:"https://www.linkedin.com/company/womeninvoicemx"
  },
] as const;