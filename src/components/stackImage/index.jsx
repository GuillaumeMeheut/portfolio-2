import css from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export const StackImage = ({ src, name }) => {
  return (
    <motion.div className={css.img}>
      <Image src={src} alt={name} layout="fill" />
    </motion.div>
  );
};
