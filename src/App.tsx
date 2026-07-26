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
        title: "Backend / API",
        description: "Designing reliable services and APIs with strong architecture and data modeling.",
        skills: ["C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL", "REST APIs", "WebSockets", "Django REST", "Python"],
    },
    {
        title: "DevOps & Systems",
        description: "Shipping and operating software with automation, Linux systems, and repeatable deployment workflows.",
        skills: ["Docker", "Git", "GitHub Actions", "CI/CD", "Linux", "automation", "debugging", "deployment", "software architecture"],
    },
    {
        title: "Frontend",
        description: "Building polished interfaces with React, TypeScript, and modern UI tooling.",
        skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "Mobile & Other",
        description: "Creating mobile experiences and supporting product-focused tooling across projects.",
        skills: ["Kotlin/Jetpack Compose", "Flutter", "Riverpod", "Supabase", "Node.js", "Figma"],
    },
];

const mySkills = [
    "C#", "ASP.NET Core", "Docker", "Linux", "React", "TypeScript",
    "Tailwind CSS", "PostgreSQL", "GitHub Actions", "Problem-solving", "Teamwork", "Autonomy"
];

const experiences = [
    {
        number: "01",
        title: "Systems & Network Intern",
        description: "Oct 2025 – Jan 2026 • DGI, SSIF Ambohijatovo • Built a captive portal with pfSense and FreeRADIUS over LDAP.",
        image: "src/assets/hero.png",
    },
    {
        number: "02",
        title: "Mentor",
        description: "2024–2026 • C2E, ENI • Supported students through practical guidance and project-oriented mentoring.",
        image: "src/assets/pic.jpg",
    },
    {
        number: "03",
        title: "Staff",
        description: "HIU Hackathon • Helped run a national inter-university competition at ENI with a strong technical focus.",
        image: "src/assets/pic1.jpg",
    },
    {
        number: "04",
        title: "Organizing Team Member",
        description: "IndabaX Madagascar • Contributed to event coordination and community-facing logistics.",
        image: "src/assets/hero.png",
    },
];

const projects = [
    {
        title: "VirTrade",
        description: "Virtual stock-trading platform. I owned the Core layer and Orders controller, building the order book and matching engine.",
        tags: ["C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL"],
        image: "src/assets/hero.png",
        repoUrl: "https://github.com/AinaTino/VirTrade.git",
    },
    {
        title: "Materelia",
        description: "Materials management app with role-based access for admins, technicians, and users. I built the dashboard, assignments, and user management flows.",
        tags: ["Flutter", "Supabase", "Riverpod"],
        image: "src/assets/pic.jpg",
        repoUrl: "https://github.com/AinaTino/Materelia.git",
    },
    {
        title: "Scientific Calculator",
        description: "Calculator with a C++ backend implementing the Shunting Yard algorithm and a Qt Quick QML frontend.",
        tags: ["C++", "Qt5", "QML"],
        image: "src/assets/pic1.jpg",
        repoUrl: "https://github.com/z3r0Trust024/Calculator.git",
    },
    {
        title: "TaskCalendar",
        description: "Calendar and task app for planning routines and day-to-day work.",
        tags: ["Flask", "SQLite3", "React", "Vite", "Tailwind CSS"],
        image: "src/assets/hero.png",
        repoUrl: "https://github.com/AinaTino/TaskCalendar.git",
    },
    {
        title: "StopMiddlingMe",
        description: "Android app that detects MITM attacks on the device layer.",
        tags: ["Kotlin", "Jetpack Compose"],
        image: "src/assets/pic.jpg",
        repoUrl: "https://github.com/AinaTino/StopMiddlingMe.git",
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
            bio="I build reliable backend services and infrastructure around practical products, with a focus on clean APIs, systems thinking, and delivery. I enjoy turning ideas into working software through backend development, DevOps habits, and collaborative problem-solving."
            location="Antananarivo, Madagascar"
            education="L3 Informatique Générale, ENI"
        />

        <ExperienceSection experiences={experiences} />

        <ProjectsSection projects={projects} />

        <SkillsTimeline categories={skillCategories} />

        <ContactSection
            email="andriamananatino@gmail.com"
            linkedinUrl="https://www.linkedin.com/in/aina-tino-andriamanana"
            githubUrl="https://github.com/AinaTino"
        />

    </>
  )
}

export default App
