import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Access the img as if we wre in folder "public" because this file is complied into the html in "public" */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
