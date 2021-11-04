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
          {/* <motion.div
            style={{
              backgroundImage: `url(${project.img})`,
            }}
            className={css.imgSide}
            animate={{
              width: 110,
              height: 450,
            }}
          /> */}
          <motion.div
            layoutId={selectedId}
            className={css.container}
            initial={false}
            animate={{
              width: "100%",
              height: "100%",
              opacity: 1,
            }}
            transition={{
              type: "spring",
              duration: 0,
            }}
            exit={{
              transition: {
                type: "tween",
                duration: 0,
              },
            }}
          >
            <motion.div
              layoutId="topLeft"
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
            <motion.h3
              layoutId="title"
              animate={false}
              exit={{
                opacity: 0,
                transition: {
                  type: "tween",
                  duration: 0,
                },
              }}
            >
              {project.title}
            </motion.h3>
            <motion.h4
              initial={{
                translateY: 30,
              }}
              animate={{
                translateY: 0,
              }}
            >
              {project.subtitle}
            </motion.h4>
            <motion.div className={css.projectContainer}>
              <motion.div
                layoutId={`main-img-${project.id}`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
                className={css.img}
                initial={false}
                animate={{
                  width: "100%",
                  height: 500,
                }}
                transition={{
                  duration: 0,
                }}
              />
              <motion.div animate className={css.wrap}>
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
