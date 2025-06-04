import {motion} from 'framer-motion';

const pageVariants = {
  initial: {opacity: 0.2, x: -100},
  animate: {opacity: 1, x: 0, transition: {duration: 0.3}},
  exit: {opacity: 0.2, x: 100, transition: {duration: 0.2}},
};

function PageWrapper({children}) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.div>
  );
}

export default PageWrapper;
