"use client";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Modal from "../Components/Modal";
import { useRouter, useParams } from "next/navigation";
import { Waitlist } from "../Components/Waitlist";
// import Alert from "../Components/Alert";
// import Lottie from "@lottielab/lottie-player/react";
// import Card from "../Components/Card";
import RiveC from "../Components/RiveC";
import Accordion from "../Components/Accordion";

export default function Home() {
  const router = useRouter();
  const params = useParams(); // 添加這行
  const t = useTranslations("HomePage");
  const t2 = useTranslations("Modal");
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "ja", name: "日本語" },
    { code: "zh", name: "繁體中文" },
  ];

  const handleLanguageSelect = (code: string) => {
    // 将语言代码映射到正确的 locale
    const localeMap: { [key: string]: string } = {
      zh: "zh-Hant",
      ja: "ja",
      en: "en",
    };

    const newLocale = localeMap[code];
    router.replace(`/${newLocale}`);
    setIsLangModalOpen(false);
  };

  return (
    <div className="flex h-full selection:bg-black selection:text-white bg-[#F5F4EF] pt-[48px] justify-center">
      <div className="flex m-4 flex-col w-full max-w-3xl bg-[#F5F4EF] item-center">
        <a href={"/"} target="_parent">
          <Image
            src={"../bm-logo.svg"}
            alt={"logo"}
            width={53}
            height={26}
          ></Image>
        </a>

        <RiveC></RiveC>

        {/* <Lottie
          src="https://cdn.lottielab.com/l/86iRZ8JBgn7Wyz.json"
          autoplay
        /> */}
        {/* <Alert content="hello" date="" to=""></Alert> */}
        {/* <Card></Card> */}
        <a className="cursor-default pt-[32px] text-[16px] font-normal text-[#44403C]">
          <span className="font-semibold">{t("title")}</span>
          {t("about")}
        </a>

        <a className="cursor-default pt-[12px] text-[16px] font-normal text-[#44403C]">
          {t("about-2")}
        </a>
        {/*
        <Accordion title="我們是一家怎樣的公司？">
          <a className="cursor-default pt-[20px] text-[16px] font-normal text-[#1E1E1D]">
            <span className="font-semibold">{t("title")}</span>
            {t("about")}
          </a>
        </Accordion> */}

        <Waitlist></Waitlist>

        <div className="bg-black w-full h-[1px] mt-[32px] mb-[12px]" />
        <div className="flex flex-row justify-end">
          {/* <a
            href={`/${params.locale}/product`}
            className="m-2 opacity-85 hover:opacity-100 font-normal underline hover:decoration-2"
          >
            {t2("ProductText")}
          </a> */}

          <a
            href={`/${params.locale}/blog`}
            className="m-2 opacity-85 hover:opacity-100 font-normal underline hover:decoration-2 dark:text-black"
          >
            {t2("BlogText")}
          </a>

          <a
            className="m-2 cursor-pointer opacity-85 hover:opacity-100 font-normal underline hover:decoration-2 dark:text-black"
            onClick={() => setIsLangModalOpen(true)}
          >
            {t2("ModalTitle")}
          </a>
        </div>

        <Modal
          isOpen={isLangModalOpen}
          onClose={() => setIsLangModalOpen(false)}
          type="language"
          title={t2("ModalTitle2")}
          languages={languages}
          onLanguageSelect={handleLanguageSelect}
        />
      </div>
    </div>
  );
}
