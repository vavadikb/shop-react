import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-bottom">
      <p>
        {t("translation.footer.title")} <br />
        {t("translation.footer.description")} &copy; <a href="#">React Shop</a>
      </p>
    </div>
  );
};
export default Footer;
