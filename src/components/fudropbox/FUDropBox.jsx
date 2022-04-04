import React, { useContext, useState } from "react";
import Context from "../../state/Context";
import "./fudropbox.css";
import { ReactComponent as Upload } from "../../assets/icons/cloud-upload-fill.svg";
import fileuploadAPI from "../../services";
import axios from "axios";
import Button from "@mui/material/Button";

import FileBase64 from "react-file-base64";
import { GetUploadedFiles } from "../../services/APIGets/GetPOSOrder";

class FUDropBox extends React.Component {
  constructor(props) {
    super(props);
    this.postRequestHandler = this.postRequestHandler.bind(this);
    this.state = {
      files: [],
      selected: false,
      QuestionID: this.props.QuestionID,
      Answer: props.Answer,
    };
  }

  postRequestHandler = async (file) => {
    let strArray = file.base64.split(",");
    axios
      .post(
        "https://wf-dev.shift4.com/Primary/restapi/Flow/64a1c946-9338-11ec-aaa9-0e1d8cb44bd9",
        {
          sessionid: "NS-06c14697-fabd-11eb-aaa8-0e1d8cb44bd9",
          outputtype: "RawJson",
          TaskId: "56813c9f-ab94-11ec-aaa9-0e1d8cb44bd9",
          UserToken: "ca6deef0",
          "Content-Type": "application/json",
          Files: [
            {
              FileContent: strArray[1],
              FileName: file.name,
            },
          ],
        }
      )

      .then((response) => {
        console.log(response.data);
        GetUploadedFiles()
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  // Callback~
  getFiles(files) {
    this.setState({ files: files, selected: files.length >= 1 });
    // console.log("JUST FILES MAN", files);
    // console.log("STATE PLUS FILES MAN", this.state.files);
    this.state.files.forEach((element, index) =>
      this.postRequestHandler(element)
    );

    // this.state.files.forEach((element, index) => console.log(element));

    // only uploads the same one twice -->
    // this.postRequestHandler(this.state.files[element].base64)

    // only uploads one -->
    // this.postRequestHandler(this.state.files[0].base64);

    // tests to check what data is being passed to the post handler:
    // this.postRequestHandler(this.state.files[0].base64);
    // console.log(this.state.files.name);
    // console.log(this.state.files.name[1]);
  }

  postFiles = () => {
    if (this.state.files.length !== 0) {
      // console.log("this.state.files ", this.state.files);
      this.props.handleFileChange(this.state.QuestionID, this.state.files);
    } else {
      //skip
    }
    this.setState({ files: [], selected: false, Answer: this.state.Answer });
  };

  render() {
    
    // console.log("FileUploadState", this.state);
    try {
      return (
        <div>
          <FileBase64 multiple={true} onDone={() => {this.getFiles.bind(this);}} />
          <div>
            {this.state.Answers.forEach(function (item, index, arr) {
              return <h1 key={index}>{item.name}</h1>;
            })}
          </div>
          <div>
            <Button disabled variant="contained" onClick={this.postFiles}>
              Submit
            </Button>
          </div>
        </div>
      );
    } catch (e) {
      return (
        <div className="filedrop_box">
          
          <div className="filedrop_icon">
            <Upload />
          </div>
          <div className="filedrop_text">
            <p>Drag & Drop your files here</p>
            <p>OR</p>
          </div>
          <div className="filedrop_button"> Browse Files
          <div> <Button variant="contained" component="span">
          
            
        
          <FileBase64 className="filebase_button" multiple={true} onDone={this.getFiles.bind(this)} />
            
              <Button className="opacity_none" disabled variant="contained" onClick={this.postFiles}>
              </Button>
            </Button>
            </div>
        </div>
        </div>
      );
    }
  }
}

export default FUDropBox;
