import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      description: props.category ? props.category.description : '',
      image: props.category ? props.category.image : '',
      // amount: props.category ? props.expense.amount.toString() : '',
      createdAt: props.category ? moment(props.category.createdAt) : moment(),
      calendarFocused: false,
      showLoading: false,
      error: ''
    };
  }
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  handleUploadStart = () => this.setState({ showLoading: true });
  handleUploadSuccess = filename => {
    firebase
      .storage()
      .ref('images/categories')
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
    if (!this.state.description || !this.state.name || !this.state.image) {
      this.setState(() => ({
        error: 'Please provide name, description and image.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
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
        />
        <input
          type="text"
          placeholder="Description"
          className="text-input"
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
            storageRef={firebase.storage().ref('images/categories')}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
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

        <div>
          {this.state.image &&
            this.state.name &&
            this.state.description && (
              <button className="button">Save Category</button>
            )}
        </div>
      </form>
    );
  }
}
