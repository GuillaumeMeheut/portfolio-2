import css from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export const RS = () => {
  return (
    <div className={css.container}>
      <motion.a
        href={"mailto:guillaume.meheutpro@gmail.com"}
        target="_blank"
        whileHover={{
          filter: "grayscale(0)",
        }}
        animate={{
          filter: "grayscale(1)",
        }}
      >
        <Image src="/data/img/gmail.png" width={32} height={24} />
      </motion.a>
      <motion.a
        href={"https://www.linkedin.com/in/guillaume-meheut-836b66199/"}
        target="_blank"
        whileHover={{
          filter: "grayscale(0)",
        }}
        animate={{
          filter: "grayscale(1)",
        }}
      >
        <Image src="/data/img/linkedin.png" width={24} height={24} />
      </motion.a>
      <motion.a
        href={"https://www.malt.fr/profile/guillaumemeheut"}
        target="_blank"
        whileHover={{
          filter: "grayscale(0)",
        }}
        animate={{
          filter: "grayscale(1)",
        }}
      >
        <Image src="/data/img/malt.png" width={24} height={24} />
      </motion.a>
    </div>
  );
};
