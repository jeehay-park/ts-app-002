import React from "react";
import CenterBox from "./CenterBox";
import pic from "../assets/Theo-van-Doesburg.jpg"

export default function Page1() {
  return (
    <>
      <CenterBox>
            <h1 style={{color : 'green', fontWeight : 'bold'}}>This page is for testing the deployment of this web application.</h1>
            <img src={pic} alt="Theo vanDoesburg"/>
      </CenterBox>
    </>
  );
}
