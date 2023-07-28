import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x,y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer' 
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{ x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once: true}}>
         {name}
         
        </motion.div>

    )

}

const Skills = () => {
  return (
    <>
        <h2 className=' font-bold text-8xl mt-64 w-full text-center'> Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute' 
        whileHover={{scale:1.05}}
        >
         Web
         
        </motion.div>
        <Skill name="CSS" x={"5vw"} y={"-10vw"}/>
        <Skill name="HTML" x={"10vw"} y={"2vw"}/>
        <Skill name="JavaScript" x={"20vw"} y={"4vw"}/>
        <Skill name="REACT JS" x={"0vw"} y={"12vw"}/>
        <Skill name="NEXT JS" x={"-20vw"} y={"-15vw"}/>
        <Skill name="FIGMA" x={"15vw"} y={"-12vw"}/>
        <Skill name="WEB DESIGN" x={"32vw"} y={"-5vw"}/>
        <Skill name="TAILWIND" x={"0vw"} y={"-20vw"}/>
        <Skill name="bOOTSTRAP" x={"-25vw"} y={"18vw"}/>
        <Skill name="DJANGO" x={"-13vw"} y={"18vw"}/>
        <Skill name="PYTHON" x={"-15vw"} y={"-15vw"}/>
        </div>
    </>
  )
}

export default Skills
