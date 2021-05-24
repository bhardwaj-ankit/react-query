import React, { Component } from "react";
import Select from "react-select";

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);

    const { socialDetails } = this.props;
    const profiles = {};
    socialDetails.forEach((items) => {
      profiles[items.index] = { "": "" };
    });

    this.state = {
      optionSelect: -1,
      editionSelect: -1,
      selectMenuOpen: false,
      profiles: profiles
    };
  }

  handleOnChange = (index, keyValue) => {
    const { profiles } = this.state;
    const { onInputChange, formKey } = this.props;

    const updatedProfileList = {};
    const indexList = Object.keys(profiles);
    let newProfile = true;
    for (let i = 0; i < indexList.length; i++) {
      const profileIndex = indexList[i];
      const socialType = Object.keys(profiles[profileIndex])[0];
      let updated;

      if (`${index}` === `${profileIndex}`) {
        updated = keyValue;
        newProfile = false;
      } else {
        updated = {
          [socialType]: profiles[profileIndex][socialType]
        };
      }
      updatedProfileList[profileIndex] = updated;
    }

    if (newProfile) {
      updatedProfileList[index] = keyValue;
    }

    this.setState(
      {
        profiles: updatedProfileList
      },
      () => {
        console.log(this.state.profiles);
        //onInputChange(this.state.profiles, formKey);
        console.dir(this.state);
      }
    );
  };

  handleDelete = (index) => {
    const { profiles } = this.state;
    const { onInputChange, formKey, deleteRow } = this.props;

    const updatedProfileList = {};
    const indexList = Object.keys(profiles);
    for (let i = 0; i < indexList.length; i++) {
      const profileIndex = indexList[i];
      const socialType = Object.keys(profiles[profileIndex])[0];
      let updated;

      if (`${index}` === `${profileIndex}`) {
        continue;
      } else {
        updated = {
          [socialType]: profiles[profileIndex][socialType]
        };
      }
      updatedProfileList[profileIndex] = updated;
    }

    this.setState(
      {
        profiles: updatedProfileList
      },
      () => {
        onInputChange(this.state.profiles, formKey);
        deleteRow(index);
        console.dir(this.state);
      }
    );
  };

  render = () => {
    const { profiles } = this.state;
    const {
      label,
      placeholder,
      socialDetails,
      options,
      createKeyValue,
      onChange,
      addRow,
      deleteRow
    } = this.props;

    return socialDetails.map((val, idx) => {
      let type = `type-${idx}`,
        link = `link-${idx}`;
      const { index } = val;
      let keys;
      if (profiles[index] === undefined || profiles[index] === null) {
        keys = { "": "" };
      } else {
        keys = Object.keys(profiles[index]);
      }

      return (
        <div className="form-group" key={index}>
          <label htmlFor={"socialprofile"} className="control-label">
            {idx <= 0 ? label : ""}
          </label>
          <div className="form-input-container select-social-link">
            <Select
              id={type}
              data-id={idx}
              className="profile-module-select-container"
              classNamePrefix="profile-module-select"
              options={options}
              onChange={(selected) => {
                this.handleOnChange(index, { [selected.value]: "" });

                // Commented out in case they don't want the text box to reset when the select is changed.
                /* if (profiles[index] === undefined || profiles[index] === null) {
                            this.handleOnChange(index, { [selected.value]: "" });
                        } else {
                            this.handleOnChange(index, { [selected.value]: profiles[index][keys[0]] || "" });
                        } */
              }}
              onMenuOpen={() => {
                this.setState({
                  selectMenuOpen: true
                });
              }}
              onMenuClose={() => {
                this.setState({
                  selectMenuOpen: false
                });
              }}
              components={{
                IndicatorSeparator: () => null
              }}
              placeholder={placeholder}
              isSearchable={false}
              isClearable={false}
              name={"newKey"}
            />
          </div>
          <div className="form-input-container input-social-link">
            <input
              type="text"
              className="social-form-control"
              placeholder="Social link"
              value={
                profiles[index] === undefined || profiles[index] === null
                  ? ""
                  : profiles[index][keys[0]] || ""
              }
              onChange={(e) => {
                this.handleOnChange(index, { [keys[0] || ""]: e.target.value });
              }}
              name={"newValue"}
              id={link}
            />
          </div>
          <div className="form-input-container">
            <div className="social-controls">
              {idx === 0 ? (
                <div className="social-control-icon" onClick={() => addRow()}>
                  <span className="social-control-icon-add">+</span>
                </div>
              ) : (
                <div
                  className="social-control-icon"
                  onClick={(e) => this.handleDelete(index)}
                >
                  <span className="social-control-icon-remove">-</span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
  };
}
