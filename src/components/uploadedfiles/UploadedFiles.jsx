import React, { useState, useContext } from "react";
import "./uploadedfiles.css";
import { ReactComponent as FileEarmark } from "../../assets/icons/file-earmark.svg";
import { ReactComponent as Check } from "../../assets/icons/check-lg.svg";
import { ReactComponent as Reload } from "../../assets/icons/arrow-repeat.svg";
import { ReactComponent as Error } from "../../assets/icons/exclamation-circle.svg";
import Spinner from "react-bootstrap/Spinner";
import API from "../../services";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";
import Context from "../../state/Context";
import { createUUID } from "../../services/APIGets/GetPOSOrder";

// axios
//   .get(
//     "https://wf-dev.shift4.com/Primary/restapi/Flow/4599413d-9336-11ec-aaa9-0e1d8cb44bd9?sessionid=NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9&outputtype=RawJson&TaskId=2eb78b9f-932b-11ec-aaa9-0e1d8cb44bd9&UserToken=d015c563"
//   )
//   .then((response) => {
//     console.log(response.data.MerchantQuestionnaire.Files);
//   });
const FileListItem = (props) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center border-bottom">
      <FileEarmark className="uf_earmarkicon" />
      <span class="flex-grow-1">{props.value}</span>
    </li>
  );
};
const UploadedFiles = (props) => {
  const { uploadFile, setUploadFile } = useContext(Context);
  console.log(uploadFile);
  if (uploadFile.length === 0) return "";
  return (
    <div>
      <div className="uf_listbox">
        <div className="topBar">Uploaded files</div>
        <ul class="list-group list-group-flush">
          <Scrollbars
            renderTrackVertical={(props) => (
              <div {...props} className="track-vertical" />
            )}
            renderThumbVertical={(props) => (
              <div {...props} className="thumb-vertical" />
            )}
            renderView={(props) => <div {...props} className="view" />}
          >
            {uploadFile.map((file, key) => {
              return <FileListItem li key={createUUID()} value={file} />;
            })}
            {/* <li class="list-group-item d-inline-flex flex-row align-items-center">
            <FileEarmark className="uf_earmarkicon" />
            <span class="flex-grow-1">Full Menu.pdf</span>
            <Spinner
              animation="border"
              size="md"
              role="status"
              className="fu_spinner"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <FileEarmark className="uf_earmarkicon" />
            <span class="flex-grow-1">Patty's logo.png</span>
            <Reload className="uf_reloadicon" />
            <Error className="uf_erroricon" />
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <FileEarmark className="uf_earmarkicon" />
            <span class="flex-grow-1">Bar Menu.pdf</span>
            <Check className="uf_checkicon" />
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <FileEarmark className="uf_earmarkicon" />
            <span class="flex-grow-1">Bar Menu.pdf</span>
            <Check className="uf_checkicon" />
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <FileEarmark className="uf_earmarkicon" />
            <span class="flex-grow-1">Brunch Menu.pdf</span>
            <Check className="uf_checkicon" />
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center border-bottom">
            <FileEarmark className="uf_earmarkicon" />
            <span class="flex-grow-1">{filenames}</span> */}
            {/* </li> */}
          </Scrollbars>
        </ul>
      </div>
    </div>
  );
};
export default UploadedFiles;
