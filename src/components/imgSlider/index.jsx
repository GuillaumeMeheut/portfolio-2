import css from "./style.module.scss";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export const ImgSlider = ({
  project,
  translateX,
  middle,
  middleImg,
  setMiddleImg,
  setSelectedId,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const xItem = ref.current.getBoundingClientRect().left;
    if (middle >= xItem && middle <= xItem + 200) setMiddleImg(project.id);
  }, [translateX]);

  const returnWidth = () => {
    if (middleImg === project.id) return 250;
    else if (middleImg === project.id - 1 || middleImg === project.id + 1)
      return 125;
    else return 100;
  };
  const returnHeight = () => {
    if (middleImg === project.id) return 600;
    else if (middleImg === project.id - 1 || middleImg === project.id + 1)
      return 525;
    else return 450;
  };

  return (
    <motion.div layoutId={project.id}>
      <motion.div
        layoutId={`main-img-${project.id}`}
        onClick={() => setSelectedId(project.id)}
        className={css.img}
        ref={ref}
        animate={{
          width: returnWidth(),
          height: returnHeight(),
          filter: middleImg === project.id ? "grayscale(0)" : "grayscale(1)",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 1000, mass: 2 }}
        whileHover={{
          filter: "grayscale(0)",
        }}
      >
        <Image
          objectFit="cover"
          layout="fill"
          src={project.img}
          alt={project.img}
        />
      </motion.div>
    </motion.div>
  );
};
