import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Image extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  state = {
    disabled: false,
  };

  _hideImage = () => {
    this.setState({ disabled: true });
  };

  render() {
    const { src, alt, className } = this.props;
    const { disabled } = this.state;

    if (disabled) {
      return null; // Don't render the image if disabled
    }

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={this._hideImage}
      />
    );
  }
}

export default Image;
