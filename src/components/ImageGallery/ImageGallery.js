import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';
import style from 'components/ImageGallery/ImageGallery.module.css'

const ImageGallery = ({imageList}) => {
    return (
        <ul className={style.ImageGallery}>
            {imageList.map((image) => {
                const {id, small, large} = image
                return (
                    <ImageGalleryItem key={id} small={small} large={large} />
                )
            })}
        </ul>
    )
}

export default ImageGallery;

ImageGallery.propTypes = {
    imageList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            small: PropTypes.string.isRequired,
            large: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}