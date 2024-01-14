import React from "react";
import { BiLinkExternal } from "react-icons/bi";
function AptiCatagory({
  cat,
  typeName,
  updateCurrentType,
  updateCurrentCatagory,
}) {
  const handleClick = () => {
    updateCurrentType(typeName);
    updateCurrentCatagory(cat.catagoryName);
  };
  return (
    <div className="apti-categary-header" onClick={handleClick}>
      <h3><BiLinkExternal /> {cat?.catagoryName}</h3>
    </div>
  );
}

export default AptiCatagory;
