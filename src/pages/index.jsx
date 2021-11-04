import { Projects } from "../data/projects.js";
import css from "./index.module.scss";
import Link from "next/link";
import { RS, Slider } from "../components";
import { useEffect, useRef, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

export const getStaticProps = async () => {
  return {
    props: {
      projects: Projects,
    },
  };
};

export default function Home({ projects }) {
  const slider = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [minTranslateX, setMinTranslateX] = useState(0);
  const [maxTranslateX, setMaxTranslateX] = useState(0);

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const width = slider.current.offsetWidth;
    setMinTranslateX(width - window.innerWidth / 2);
    setMaxTranslateX(-width + window.innerWidth / 2);
    setTranslateX(width - window.innerWidth / 2);
  }, [slider]);

  const updateTranslate = (deltaY) => {
    if (!selectedId) {
      if (translateX > maxTranslateX - 1 && translateX < minTranslateX + 1)
        setTranslateX(translateX - deltaY);
      else if (translateX + deltaY > minTranslateX + 20)
        setTranslateX(minTranslateX);
      else if (translateX + deltaY < maxTranslateX - 20)
        setTranslateX(maxTranslateX);
    }
  };
  return (
    <div className={css.page} onWheel={(e) => updateTranslate(e.deltaY)}>
      <AnimateSharedLayout>
        <header>
          <motion.h1 layoutId="topLeft" animate>
            Guillaume MEHEUT
          </motion.h1>
        </header>

        <main>
          <Slider
            projects={projects}
            translateX={translateX}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            ref={slider}
          />
        </main>

        <footer>
          <Link href="/about">
            <a>About</a>
          </Link>

          <RS />
        </footer>
      </AnimateSharedLayout>
    </div>
  );
}
