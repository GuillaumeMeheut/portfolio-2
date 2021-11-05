import css from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { StackImage } from "..";
import { useState } from "react";

export const Project = ({ project, selectedId, setSelectedId }) => {
  const [image, setImage] = useState(project.img);

  return (
    <AnimatePresence>
      {selectedId === project.id && (
        <>
          <motion.div layoutId={selectedId} className={css.container}>
            <motion.div
              animate
              exit={{
                transition: {
                  type: "tween",
                  duration: 0,
                },
              }}
              className={css.back}
              onClick={() => setSelectedId(null)}
            >
              <motion.img src="/data/img/arrowBack.svg" />
              <motion.p>Back</motion.p>
            </motion.div>
            <motion.h3>{project.title}</motion.h3>
            <motion.h4>{project.subtitle}</motion.h4>
            <motion.div className={css.projectContainer}>
              <motion.div
                layoutId={`main-img-${project.id}`}
                src={image}
                className={css.img}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              >
                <Image
                  objectFit="cover"
                  layout="fill"
                  src={image}
                  alt={project.img}
                />
              </motion.div>
              <motion.div
                animate
                className={css.wrap}
                exit={{
                  display: "none",
                }}
              >
                <motion.div className={css.stackContainer}>
                  {project.stacks.map((stack) => {
                    return (
                      <StackImage
                        key={stack.name}
                        src={stack.src}
                        name={stack.name}
                      />
                    );
                  })}
                </motion.div>
                <motion.div className={css.picturesContainer}>
                  {project.pictures.map((src) => {
                    return (
                      <motion.div
                        key={src}
                        animate={{
                          filter:
                            src === image ? "grayscale(0)" : "grayscale(1)",
                        }}
                        whileHover={{
                          filter: "grayscale(0)",
                        }}
                      >
                        <Image
                          src={src}
                          layout="fill"
                          onClick={() => setImage(src)}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
                <motion.a
                  className={css.link}
                  href={project.link}
                  target="_blank"
                >
                  VIEW WEBSITE
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
