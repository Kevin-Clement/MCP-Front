/**
 * @author Kevin Clément
 * @email kevin-clement@live.fr
 * @create date 2022-04-25 20:23:04
 * @modify date 2022-04-30 20:29:08
 * @desc [description]
 */
import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import "./FooterResponsiveBtn.css";


const FooterResponsiveBtn = ({ load, txt, color, func }) => {
  return (
    <LoadingButton
      className="footer-responsive__btn"
      type="submit"
      loading={load}
      color={color}
      onClick={func}
      variant="contained"
    >
      {txt}
    </LoadingButton>
  );
};

export default FooterResponsiveBtn;
