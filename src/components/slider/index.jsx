import css from "./style.module.scss";
import { ImgSlider, Project } from "..";
import { forwardRef, useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

export const Slider = forwardRef(
  ({ projects, translateX, selectedId, setSelectedId }, ref) => {
    const [middle, setMiddle] = useState(null);

    const [middleImg, setMiddleImg] = useState(1);

    useEffect(() => {
      setMiddle(window.innerWidth / 2);
      // projects.forEach((project) => projects.push(project));
    }, []);

    return (
      <>
        <motion.h3 layoutId="title" className={css.title}>
          {projects[middleImg - 1].title}
        </motion.h3>
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
              {projects.map((project) => {
                return (
                  <ImgSlider
                    key={project.id}
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
            <Project
              key={project.id}
              project={project}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
          );
        })}
      </>
    );
  }
);
