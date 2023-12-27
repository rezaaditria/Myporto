import React from "react";
import style from "@/Components/Bubble/Bubble.module.css"


const Bubble = () => {
  return (

<div className={style.gradientbg}>
  <svg xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
  <div className={style.gradientscontainer}>
    <div className={style.g1} />
    <div className={style.g2} />
    <div className={style.g3} />
    <div className={style.g4} />
    <div className={style.g5} />
    <div className={style.interactive} />
  </div>
</div>

);
};

export default Bubble;