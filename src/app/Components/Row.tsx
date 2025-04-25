"use client";

import * as React from "react";

type RowProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

const Row = React.forwardRef<HTMLElement, RowProps>(
  ({ children, ...rest }, ref) => {
    return (
      <section ref={ref} {...rest}>
        {children}
      </section>
    );
  },
);

Row.displayName = "Row";

export default Row;
