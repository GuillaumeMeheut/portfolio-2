import css from "./style.module.scss";
import { ImgSlider } from "..";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export const Slider = ({ projects, translateX, setTranslateX }) => {
  const ref = useRef(null);
  const [middle, setMiddle] = useState(0);

  const [middleImg, setMiddleImg] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setMiddle(window.innerWidth / 2);
    // projects.forEach((project) => projects.push(project));
  }, []);

  // useEffect(() => {
  //   const width = ref.current.offsetWidth;
  //   setTranslateX(width - selectedId * 125);
  // }, [selectedId]);

  return (
    <>
      <AnimateSharedLayout>
        <div className={css.mainContainer}>
          <div className={css.secondContainer}>
            <motion.ul
              ref={ref}
              className={css.slider}
              animate={{
                width: 115 * projects.length,
                transform: `translateX(${translateX}px)`,
              }}
              transition={{ duration: 0, type: "tween" }}
            >
              {projects.map((project, index) => {
                return (
                  <ImgSlider
                    key={index}
                    project={project}
                    translateX={translateX}
                    middle={middle}
                    middleImg={middleImg}
                    setMiddleImg={setMiddleImg}
                    setSelectedId={setSelectedId}
                    selectedId={selectedId}
                  />
                );
              })}
            </motion.ul>
          </div>
        </div>

        {projects.map((project) => {
          return (
            <AnimatePresence>
              {selectedId && (
                <motion.div
                  layoutId={selectedId}
                  style={{ position: "absolute", top: 0, zIndex: 15 }}
                >
                  <motion.div
                    style={{
                      backgroundImage: `url(${project.img})`,
                      width: 400,
                      height: 400,
                    }}
                  />
                  <motion.h2>{project.title}</motion.h2>
                  <motion.button onClick={() => setSelectedId(null)}>
                    X
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </AnimateSharedLayout>
    </>
  );
};
