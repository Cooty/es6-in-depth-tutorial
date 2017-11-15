import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let missingImagePlaceholder = 'https://vignette.wikia.nocookie.net/superfriends/images/a/a5/No_Photo_Available.jpg/revision/latest?cb=20090329133959';

    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;

            return (
              <a href={infoLink}
                 key={index}
                 className="book"
                 target="_blank">
                <img src={imageLinks === undefined ? missingImagePlaceholder : imageLinks.thumbnail}
                     alt={title}
                     className="book-img"
                />
                <div className="book-text">
                  {title}
                </div>
              </a>
            );
          })
        }
      </div>
    );
  }
}

export default Gallery;
