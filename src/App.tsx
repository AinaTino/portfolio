import {motion} from "framer-motion";

function App() {
  return (
    <>
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 1.2}}
            className="fixed top-4 right-4
            px-2 py-2 font-serif bg-transparent text-amber-950  border border-amber-700 "
        >
            Get my resume
        </motion.button>
        <div className="p-10 xl:p-20 bg-mist-50">
            <motion.div className="relative w-90">
                <div className="
                    absolute
                    top-5
                    left-5
                    w-full
                    h-full
                    rotate-3
                    bg-stone-200
                  "></div>
                {/*
                <div className="
                    absolute
                    inset-0
                    bg-amber-900
                    -rotate-3
                    scale-100
                  "></div>*/
                }
                {/* Card principale */}
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
        </div>
    </>
  )
}

export default App
