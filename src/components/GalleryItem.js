import React, { Component, PropTypes } from 'react';

import '../styles/GalleryItem.css'

class GalleryItem extends Component {
  render() {
    return (
      <article className="GalleryItem__root">
        <div className="GalleryItem-header">
          <div className="GalleryItem-header__avatar-container">
            <img
              src={this.props.avatarUrl}
              className="GalleryItem-header__avatar-img"
              alt={'${this.props.username} profile'}
            />
          </div>
          <div className="GalleryItem-header__metadata-container">
            <strong>{this.props.username}</strong>
          </div>
        </div>
        <div className="GalleryItem__body">
          <img src={this.props.photoUrl} role="presentation"/>
        </div>
        <div className="GalleryItem__footer">
          <div>
            15 Likes
          </div>
        </div>
      </article>
    );
  }
}

GalleryItem.PropTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired
};

export default GalleryItem;
