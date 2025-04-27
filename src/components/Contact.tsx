import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <footer className="w-full pt-10 pb-10 overflow-hidden   bg-black-100 " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw] px-2 lg:px-0 text-white">
          {t('text1')}  <span className="text-purple">{t('text2')}  </span> {t('text3')}  <span className="text-purple">{t('text4')} </span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t('description')}
        </p>
        <Link href="/login">
          <MagicButton
            title={t('button')}
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Contact;
