import { motion } from "framer-motion";
import { leaf, leafWrapper } from "variants";

const Leaf = ({className, imageUrl, animationSpeed}) => {
  return (
    <motion.div variants={leafWrapper} initial="initial" animate="animate" className={className}>

          <motion.img custom={animationSpeed} variants={leaf} initial="initial" animate="animate" className="leaf" src={imageUrl}/>
          
    </motion.div>
  );
};

export default Leaf;