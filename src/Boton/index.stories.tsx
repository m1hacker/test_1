import React from "react";
import { BrowserRouter } from "react-router-dom";
import Boton from "./Boton";

export default {
  title: "Widgets/Boton",
  component: Boton,
  argTypes: {},
};

export const FooterTest: React.FC = () => {
  
  const socials = [
    {
      label: "giani es joto",
      href: "https://docs.pancakeswap.finance",
      key: "GITHUB",
    },
    {
      label: "MEDIUM",
      href: "https://docs.pancakeswap.finance",
      key: "MEDIUM",
    },
    {
      label: "TWITTER",
      href: "https://docs.pancakeswap.finance",
      key: "TWITTER",
    },
    {
      label: "TELEGRAM",
      href: "https://docs.pancakeswap.finance",
      external: true,
      key: "TELEGRAM",
    },
  ];

  return (
    <BrowserRouter>
      <Boton isMobile={false} socials={socials} />
    </BrowserRouter>
  );
};
