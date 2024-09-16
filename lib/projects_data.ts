import sam from "@/public/sam.png";
import cat from "@/public/cat.png";
import recipes from "@/public/voice/recipes-bg.png";
import box from "@/public/voice/box-trainer-bg.png";
import voice from "@/public/voice_devices.png";
import bot from "@/public/bot.png";
import dangerplanet from "@/public/challenges/danger-planet-bg.png";
import cielito from "@/public/challenges/cielito-cover.png";
import travelbot from "@/public/challenges/travel-bot.png";

export const AiProjects = [
    {
        project_name: "SAM",
        product_type: "AI Agent",
        description:"SAM (Santex AI Member) is an intelligent virtual assistant for a technology company specialized in digital transformation.",
        imageUrl: "/sam/sam-cover.png",
        url:"/sam-virtual-assistant",
    },
    {
        project_name: "AlVI",
        product_type: "AI Agent",
        description:"Alvi is a friendly and passionate viratual assitant, ready to answer all questions related to Club Atlético Talleres.",
        imageUrl: "/talleres/alvi-cover.png",
        url:"/club-atletico-talleres-en",
    },
    {
        project_name: "Travel Bot AI",
        product_type: "AI Agent",
        description:"Alvi is a friendly and passionate viratual assitant, ready to answer all questions related to Club Atlético Talleres.",
        imageUrl: "/sam/sam-cover.png",
        url:"/travel-bot-ai",
    },
] as const;

export const ConversationProjects = [
    {
        project_name: "Banking",
        product_type: "WhatsApp Bot",
        description:"",
        imageUrl: travelbot,
        url:"/banking",
    },
    {
        project_name: "Travel Bot",
        product_type: "Chatbot",
        description:"A bot to demonstrate understanding of chatbot functionalities and capabilities.",
        imageUrl: travelbot,
        url:"/travel-bot",
    },
    {
        project_name: "Cielito Querido",
        product_type: "WhatsApp Bot",
        description:"A bot to promote new coffee options",
        imageUrl: cielito,
        url:"/cielito-querido",
    },
] as const;

export const MultimodalProjects = [
    {
        project_name: "Danger Planet",
        product_type: "Multimodal",
        description:"A multimodal action focused in reinforcing the instructions that children already know about how to act on natural disasters and accidents at home.",
        imageUrl: dangerplanet,
        url:"/danger-planet",
    },
    {
        project_name: "Box Trainer",
        product_type: "Multimodal",
        description:"A voice-guided immersive multimodal experience to help users train box.",
        imageUrl: box,
        url:"/boxing",
    },
    {
        project_name: "Recipes",
        product_type: "Multimodal",
        description:"Voice assistant designed to provide recipes to users quickly and conveniently, enhancing the cooking experience.",
        imageUrl: recipes,
        url:"/recipes",
    },
    
] as const;