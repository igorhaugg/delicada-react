import React from 'react';
import firebase from 'firebase';
import moment from 'moment';
import FileUploader from 'react-firebase-file-uploader';
import { SingleDatePicker } from 'react-dates';

import database from '../../../firebase/firebase';

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
      description: props.category ? props.category.description : '',
      image: props.category ? props.category.image : '',
      createdAt: props.category ? moment(props.category.createdAt) : moment(),
      calendarFocused: false,
      showLoading: false,
      error: '',
      oldImage: null
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
  onUploadStart = () => this.setState({ showLoading: true });
  onUploadSuccess = filename => {
    if (this.props.editForm) {
      this.setState({ oldImage: this.state.image });
    }
    if (
      filename.endsWith('.jpeg') ||
      filename.endsWith('.jpg') ||
      filename.endsWith('.png') ||
      filename.endsWith('.gif') ||
      filename.endsWith('.JPEG') ||
      filename.endsWith('.PNG') ||
      filename.endsWith('.JPG') ||
      filename.endsWith('.GIF')
    ) {
      firebase
        .storage()
        .ref('images/categories')
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({ image: url, showLoading: false }));
    } else {
      this.setState({
        showLoading: false,
        error: 'Por favor selecione uma imagem nos formatos (jpeg, jpg, png).'
      });
    }
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
        error: 'Por favor adicione um nome, descrição e imagem.'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit(
        {
          name: this.state.name,
          description: this.state.description,
          image: this.state.image,
          createdAt: this.state.createdAt.valueOf()
        },
        this.state.oldImage
      );
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Nome"
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          required
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
          <i className="fas fa-cloud-upload-alt icon__file" />
          Selecionar imagem
          <FileUploader
            accept="image/*"
            name="image"
            randomizeFilename
            hidden
            storageRef={firebase.storage().ref('images/categories')}
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
        <div>
          {this.state.image &&
            this.state.name &&
            this.state.description && (
              <button className="button">
                {this.props.editForm ? 'Salvar' : 'Confirmar'}
              </button>
            )}
        </div>
      </form>
    );
  }
}
