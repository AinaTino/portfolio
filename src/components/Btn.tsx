import {motion} from "framer-motion";
interface props_btn{
    text:string,
    className:string,
}

function Btn(props:props_btn){
    return (
    <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 1.2}}
        className={props.className}>
        {props.text}
    </motion.button>
    )
}
export default Btn