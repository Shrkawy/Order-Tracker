import React from "react";
import "./fileuploadtitle.css";

const FileUploadTitle = () => {
  return (
    <div className="fileupload_title">
      <div className="fileupload_title_top">Menu & File Upload</div>
      <div className="fileupload_title_text">
        Upload a copy of the your customer facing menu.
        <span className="fileupload_title_text_boldtext">
          {" "}
          This is required to move forward with your order.{" "}
        </span>
        Optionally, other supporting documents can be submitted here (ex:
        Discounts, Employees, Table Layout, etc) but are not required. Any
        legible image can be used and uploaded (common formats are .pdf, .doc,
        .png, .jpeg).
      </div>
    </div>
  );
};

export default FileUploadTitle;
