import React from "react";
import styled from "styled-components";

interface MenuEntry {
  label: string;
  href?: string;
  external?: boolean;
  key?: string;
}

interface Props {
  isMobile?: boolean;
  socials: Array<MenuEntry>;
}

const FooterWraper = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  min-height: 100px;
`;

const PageFooter = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-direction: ${({ isMobile }) => (!isMobile ? "row" : "column")};
  line-height: ${({ isMobile }) => (!isMobile ? "0em" : "2em")};
`;

const LinkFooter = styled.a<{ isMobile?: boolean }>`
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  color: #000000;
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding-left: 24px;
  padding-right: 24px;
  text-decoration: none;
`;

const Boton: React.FC<Props> = ({ isMobile, socials }) => {
  return (
    <FooterWraper>
      <PageFooter isMobile={isMobile}>
        {socials.map((item) => (
          <LinkFooter isMobile={isMobile} key={item.key} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </LinkFooter>
        ))}
      </PageFooter>
    </FooterWraper>
  );
};

export default Boton;
