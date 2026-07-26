import {motion} from "framer-motion";
import Btn from "./components/Btn.tsx"
import SkillsBanner from "./components/SkillBanner.tsx";

function App() {
    const mySkills = [
        "React", "TypeScript", "Tailwind", "Framer Motion",
        "Communication", "Travail d'équipe", "Node.js", "Figma",
        "Résolution de problèmes", "Git"
    ];

    return (
    <>

        <Btn
            text={"Get my resume"}
            className="fixed top-4 right-4
            px-2 py-2 font-serif bg-stone-200/30 text-amber-950  border border-amber-700 z-[9999]"
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

    </>
  )
}

export default App
