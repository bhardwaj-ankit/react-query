import React, { Component } from "react";
import "./styles.css";
import SocialMedia from "./SocialMedia.js";
import Dropdown from "./component/Dropdown";

export default class App extends Component {
  constructor(props) {
    super(props);
    let index = 0;
    this.state = {
      options: [
        { value: "email", label: "Email" },
        { value: "instagram", label: "Instagram" },
        { value: "linkedin", label: "Linkedin" },
        { value: "pinterest", label: "Pinterest" },
        { value: "skype", label: "Skype" },
        { value: "tiktok", label: "TikTok" },
        { value: "tumblr", label: "Tumblr" },
        { value: "twitter", label: "Twitter" },
        { value: "whatsapp", label: "WhatsApp" },
        { value: "wordpress", label: "Wordpress" },
        { value: "youtube", label: "Youtube" },
        { value: "other", label: "Other" }
      ],
      socialDetails: [
        {
          index: Math.random(),
          type: "",
          link: ""
        }
      ]
    };
  }
  addNewRow = (e) => {
    this.setState((prevState) => ({
      socialDetails: [
        ...prevState.socialDetails,
        {
          index: Math.random(),
          type: "",
          link: ""
        }
      ]
    }));
  };
  deleteRow = (index) => {
    this.setState({
      socialDetails: this.state.socialDetails.filter((s) => index !== s.index)
    });
  };

  render() {
    let { socialDetails, options } = this.state;
    return (
      // <div className="App">
      //   <SocialMedia
      //     label={`Social profiles`}
      //     addRow={this.addNewRow}
      //     deleteRow={this.deleteRow}
      //     socialDetails={socialDetails}
      //     options={options}
      //     formKey={"socialprofiles"}
      //     createKeyValue={this.createNewKeyValuePair}
      //     placeholder={"Select"}
      //   />
      // </div>
      <Dropdown></Dropdown>
    );
  }
}
