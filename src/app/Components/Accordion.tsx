"use client";

import * as React from "react";

import Row from "./Row";

interface AccordionProps {
  defaultValue?: boolean;
  title: string;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  defaultValue = true,
  title,
  children,
}) => {
  const [show, setShow] = React.useState<boolean>(defaultValue);
  const accordionRef = React.useRef<HTMLDivElement | null>(null);

  const toggleShow = (): void => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <Row
        ref={accordionRef}
        tabIndex={0}
        role="button"
        onClick={toggleShow}
        aria-expanded={show}
      >
        <div className="bg-[#EBEAE5] px-[4px] sm:py-[18px] py-[8px] hover:bg-[#D4D3CB]">
          <span className="select-none text-[18px] text-black mr-2">
            {show ? "▾" : "▸"}
          </span>
          <span className="select-none text-[18px] text-black">{title}</span>
        </div>
      </Row>
      {show && (
        <Row style={{ paddingLeft: "1ch", paddingTop: "12px" }}>{children}</Row>
      )}
    </>
  );
};

export default Accordion;
