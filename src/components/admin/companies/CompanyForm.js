import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';

export default class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.company);
    this.state = {
      name: props.company ? props.company.name : '',
      address: props.company ? props.company.address : '',
      about: props.company ? props.company.about : '',
      facebook: props.company ? props.company.facebook : '',
      instagram: props.company ? props.company.instagram : '',
      whatsapp: props.company ? props.company.whatsapp : '',
      phone: props.company ? props.company.phone : '',
      email: props.company ? props.company.email : '',
      description: props.company ? props.company.description : '',
      image: props.company ? props.company.image : '',
      createdAt: props.company ? moment(props.company.createdAt) : moment(),
      calendarFocused: false,
      showLoading: false,
      error: ''
    };
  }
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onAddressChange = e => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
  onAboutChange = e => {
    const about = e.target.value;
    this.setState(() => ({ about }));
  };
  onFacebookChange = e => {
    const facebook = e.target.value;
    this.setState(() => ({ facebook }));
  };
  onInstagramChange = e => {
    const instagram = e.target.value;
    this.setState(() => ({ instagram }));
  };
  onWhatsappChange = e => {
    const whatsapp = e.target.value;
    this.setState(() => ({ whatsapp }));
  };
  onPhoneChange = e => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onEmailChange = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onImageChange = e => {
    const image = e.target.value;
    this.setState(() => ({ image }));
  };
  onUploadStart = () => this.setState({ showLoading: true });
  onUploadSuccess = filename => {
    firebase
      .storage()
      .ref('images/company')
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ image: url, showLoading: false }));
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState(() => ({
        error: 'Please provide at least the name of the company.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        address: this.state.address,
        about: this.state.about,
        facebook: this.state.facebook,
        instagram: this.state.instagram,
        whatsapp: this.state.whatsapp,
        phone: this.state.phone,
        email: this.state.email,
        description: this.state.description,
        image: this.state.image,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="text-input"
          value={this.state.address}
          onChange={this.onAddressChange}
        />
        <textarea
          placeholder="Add a text for the about us page."
          className="textarea"
          value={this.state.about}
          onChange={this.onAboutChange}
        />
        <input
          type="text"
          placeholder="Facebook"
          className="text-input"
          value={this.state.facebook}
          onChange={this.onFacebookChange}
        />
        <input
          type="text"
          placeholder="Instagram"
          className="text-input"
          value={this.state.instagram}
          onChange={this.onInstagramChange}
        />
        <input
          type="text"
          placeholder="Whatsapp"
          className="text-input"
          value={this.state.whatsapp}
          onChange={this.onWhatsappChange}
        />
        <input
          type="text"
          placeholder="Phone"
          className="text-input"
          value={this.state.phone}
          onChange={this.onPhoneChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="text-input"
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <textarea
          placeholder="Add a text for company description."
          className="textarea"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <label className="label button">
          Select your file
          <FileUploader
            accept="image/*"
            name="image"
            randomizeFilename
            hidden
            storageRef={firebase.storage().ref('images/company')}
            onUploadStart={this.onUploadStart}
            onUploadSuccess={this.onUploadSuccess}
          />
        </label>

        {this.state.showLoading && (
          <div className="loader__small">
            <img className="loader__image" src="/images/loader.gif" />
          </div>
        )}

        {this.state.image && (
          <img className="list-item__image" src={this.state.image} />
        )}
        <div>{this.state.name && <button className="button">Save</button>}</div>
      </form>
    );
  }
}
