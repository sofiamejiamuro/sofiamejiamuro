import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-neutral-50 text-5xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}