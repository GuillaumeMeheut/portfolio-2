import css from "./index.module.scss";
import Link from "next/link";
import { RS, Slider } from "../components";
import { useState } from "react";

export default function Home({ projects }) {
  const [translateX, setTranslateX] = useState(0);
  const updateTranslate = (deltaY) => {
    if (translateX > -1016 && translateX < 501)
      setTranslateX(translateX - deltaY);
    else if (translateX + deltaY > 520) setTranslateX(500);
    else if (translateX + deltaY < -1035) setTranslateX(-1015);
  };
  return (
    <div className={css.page} onWheel={(e) => updateTranslate(e.deltaY)}>
      <header>
        <p>Guillaume MEHEUT</p>
      </header>

      <main>
        <Slider
          projects={projects}
          translateX={translateX}
          setTranslateX={setTranslateX}
        />
      </main>

      <footer>
        <Link href="/about">
          <a>About</a>
        </Link>

        <RS />
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/data/projects.json`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}
