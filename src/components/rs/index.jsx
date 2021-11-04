import css from "./style.module.scss";
import Image from "next/image";

export const RS = () => {
  return (
    <div className={css.container}>
      <Image src="/data/img/mail.svg" width={30} height={24} />
      <Image src="/data/img/linkedin.svg" width={24} height={24} />
    </div>
  );
};
