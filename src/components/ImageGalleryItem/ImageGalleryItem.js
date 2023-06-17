import {Component} from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import style from 'components/ImageGalleryItem/ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
    state = {
        openModal: false,
    }

    handleOpen = () => {
        this.setState({openModal: true});
    }

    handleClose = (e) => {
        if (e.target.id === 'Overlay' || (e.target.id === 'ModalInput' && e.code === 'Escape')) {
            this.setState({openModal: false});
        }
    }

    render() {
        const {small, large} = this.props;
        return (
            <>
                <li className={style.ImageGalleryItem}>
                    <img src={small} alt="Pixabay" onClick={this.handleOpen}  className={style.ImageGalleryItemImage} />
                </li>
                {this.state.openModal && <Modal image={large} closeModal={this.handleClose}/>}
            </>
        )
    }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    small: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired
}