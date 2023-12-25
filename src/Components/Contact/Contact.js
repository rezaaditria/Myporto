import React from "react";
import style from "@/components/Contact/Contact.module.css"
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.typing}>
          <div className={style.wrapper}>
            <div className={style.text}>Muhammad Reza Aditria</div>
          </div>
          </div>
        <div className={style.isi}>
        I am Telecommunication Engineering student at Telkom University, 
        I have a high interest in the IT, especially cybersecurity,
         networks and also i have a very high interest on front-end website development.
         <br/>
         <br/>
         <br/>
        </div>
      </div>
    </>
  );
};

export default Contact;
