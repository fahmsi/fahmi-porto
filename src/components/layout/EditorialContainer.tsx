import { ReactNode } from "react";

interface EditorialContainerProps {
  children: ReactNode;
  className?: string;
  size?: "layout" | "article" | "narrow";
}

export default function EditorialContainer({
  children,
  className = "",
  size = "layout",
}: EditorialContainerProps) {
  const sizeClasses = {
    layout: "max-w-layout",
    article: "max-w-article",
    narrow: "max-w-2xl",
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto px-6 w-full ${className}`}>
      {children}
    </div>
  );
}
