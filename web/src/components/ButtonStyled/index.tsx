import styles from "./index.module.css";
import Link from "next/link";

interface ButtonStyledProps {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  href?: string;
}

export default function ButtonStyled({ 
  children, 
  color = "#fff", 
  backgroundColor = "var(--primary-color)", 
  borderRadius = "0px",
  hoverColor = "var(--primary-color)",
  hoverBackgroundColor = "#ffffffff",
  href,
}: ButtonStyledProps) {  

  const styleVars = {
    ["--color" as any]: color,
    ["--bg" as any]: backgroundColor,
    ["--hover-color" as any]: hoverColor,
    ["--hover-bg" as any]: hoverBackgroundColor,
    borderRadius,
  };

  if (href) {
    return (
      <Link  
        href={href}
        className={styles.buttonStyled}
        style={styleVars}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={styles.buttonStyled}
      style={styleVars}
    >
      {children}
    </button>
  );
}
