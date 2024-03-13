import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer/Footer";
import "./DesignBangunanLainnya.css";

const DesignBangunanLainnya = () => {
  return (
    <div id="designbangunanlainnya">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="designbangunanlainnya">DesignBangunanLainnya</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default DesignBangunanLainnya;
