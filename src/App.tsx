import {motion} from "framer-motion";
import Btn from "./components/Btn.tsx"
import SkillsBanner from "./components/SkillBanner.tsx";
import AboutSection from "./components/AboutSection.tsx";
import ExperienceSection from "./components/ExperienceSection.tsx";
import ProjectsSection from "./components/ProjectSection.tsx";
import SkillsTimeline from "./components/SkillsTimeLine.tsx";
import ContactSection from "./components/ContactSection.tsx";
import Navbar from "./components/NavBar.tsx";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];


const skillCategories = [
    {
        title: "Frontend",
        description: "Building responsive, animated interfaces with clean state management.",
        skills: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    },
    {
        title: "Backend",
        description: "Designing APIs and business logic with a focus on clean architecture.",
        skills: ["C#", "ASP.NET Core", "Entity Framework"],
    },
    {
        title: "DevOps",
        description: "Automating builds and deployments to keep releases smooth and repeatable.",
        skills: ["Docker", "Git", "CI/CD"],
    },
    {
        title: "Networking",
        description: "Working with data exchange between client and server, sync and real-time.",
        skills: ["REST APIs", "WebSockets"],
    },
];

const mySkills = [
    "React", "TypeScript", "Tailwind", "Framer Motion",
    "Communication", "Travail d'équipe", "Node.js", "Figma",
    "Résolution de problèmes", "Git"
];

const experiences = [
    {
        number: "01",
        title: "Software Dev Intern",
        description: "Built and shipped features for a stock-trading platform, owning the core layer and orders logic.",
        image: "src/assets/exp1.jpg",
    },
    {
        number: "02",
        title: "Volunteer Dev",
        description: "Helped a local association build tools for materials management, working on Flutter + Supabase.",
        image: "src/assets/exp2.jpg",
    },
    {
        number: "03",
        title: "Hackathon Contributor",
        description: "Teamed up under time pressure to design and pitch a full product concept in 48 hours.",
        image: "src/assets/exp3.jpg",
    },
];

const projects = [
    {
        title: "VirTrade",
        description: "A virtual stock trading platform. I owned the Core layer and the Orders controller, building the order book and matching engine from scratch.",
        tags: ["C#", "ASP.NET Core", "Entity Framework", "PostgreSQL"],
        image: "src/assets/virtrade.jpg",
        repoUrl: "https://github.com/yourusername/virtrade",
    },
    {
        title: "Materelia",
        description: "A materials management app with role-based access (admin, technician, user). I built the dashboard, assignments, and user management features.",
        tags: ["Flutter", "Supabase", "Riverpod"],
        image: "src/assets/materelia.jpg",
        repoUrl: "https://github.com/yourusername/materelia",
    },
    {
        title: "VirTrade",
        description: "A virtual stock trading platform. I owned the Core layer and the Orders controller, building the order book and matching engine from scratch.",
        tags: ["C#", "ASP.NET Core", "Entity Framework", "PostgreSQL"],
        image: "src/assets/virtrade.jpg",
        repoUrl: "https://github.com/yourusername/virtrade",
    },
    {
        title: "Materelia",
        description: "A materials management app with role-based access (admin, technician, user). I built the dashboard, assignments, and user management features.",
        tags: ["Flutter", "Supabase", "Riverpod"],
        image: "src/assets/materelia.jpg",
        repoUrl: "https://github.com/yourusername/materelia",
    },
];


function App() {
    return (
    <>
        <Navbar links={navLinks} />

        <Btn
            text={"Get my resume"}
            className="fixed top-4 right-4 px-2 py-2 font-serif text-white border border-white z-[9999] mix-blend-difference"
        />
        <div className="flex flex-col md:flex-row gap-10 md:gap-40 items-stretch">
            <motion.div
                whileHover={{scale: 1.05}}
                className="relative w-90">
                <div className="
                    absolute
                    top-5
                    left-5
                    w-full
                    h-full
                    rotate-3
                    bg-stone-200
                  "></div>
                <div className="
                    relative
                    bg-white
                    shadow-2xl
                    overflow-hidden
                  ">
                    <img
                        src="src/assets/pic1.jpg"
                        alt={"Just my pic"}
                        className="h-full w-full object-cover"
                    />
                </div>
            </motion.div>

            <div className="relative flex flex-col w-100 md:min-h-[500px] xl:pt-20">
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Hey, I'm </h3>
                    <h1 className="text-5xl font-semibold pl-7"> Aina Tino</h1>
                    <h1 className="text-center font-bold text-5xl pl-7 text-amber-950">ANDRIAMANANA</h1>
                    <h1 className="text-center font-serif text-3xl pl-7 text-amber-950">DevOps | Backend Developer</h1>
                </div>
                <div className="pt-6 md:mt-auto flex gap-2 md:gap-15">
                    <Btn text={" Start a Project"}
                        className="
            px-5 py-2 font-serif text-2xl bg-white text-amber-950  border border-amber-950"
                    />

                    <Btn text={"About me"}
                        className="
            px-5 py-2 text-2xl font-serif bg-amber-950 text-amber-50  "
                    />
                </div>
            </div>
        </div>

        <SkillsBanner
            skills={mySkills}
            intervalMs={1400}
            maxVisible={6}
            className="mt-16"
        />

        <AboutSection
            bio="Student developer passionate about building collaborative projects, from web to mobile. I like crafting things that are clean, well thought-out, and a little stylish."
            location="Antananarivo, Madagascar"
            education="Software Development Student"
        />

        <ExperienceSection experiences={experiences} />

        <ProjectsSection projects={projects} />

        <SkillsTimeline categories={skillCategories} />

        <ContactSection
            email="ton.email@example.com"
            linkedinUrl="https://linkedin.com/in/tonprofil"
            githubUrl="https://github.com/tonusername"
        />

    </>
  )
}

export default App
