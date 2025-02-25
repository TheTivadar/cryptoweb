import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import Link from "next/link";

const Contact = () => {
  return (
    <footer className="w-full pt-10 pb-10 overflow-hidden   bg-black-100 " id="contact">
      {/*} Nagyon jól kinéző rácsozás
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>*/}
     {/*  <div className="absolute overflow-hidden bottom-0 inset-0 left-[80vw] top-[20vh]    h-[500px] w-[500px] bg-blue-500 blur-3xl opacity-10 rounded-full z-1"></div>
      <div className="absolute overflow-hidden bottom-0 inset-0 -left-[10vw] top-[20vh]    h-[500px] w-[500px] bg-violet-500 blur-3xl opacity-10 rounded-full z-1"></div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw] px-2 lg:px-0 text-white">
          Készen állsz, hogy  <span className="text-purple">új szintre </span> emeld a <span className="text-purple">befektetéseidet?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Regisztrálj és fektess be, mert az idő pénz!
        </p>
        <Link href="/login">
          <MagicButton
            title="Vágjunk bele!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Contact;
