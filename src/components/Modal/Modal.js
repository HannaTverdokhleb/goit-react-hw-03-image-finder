import PropTypes from 'prop-types';
import style from 'components/Modal/Modal.module.css'

const Modal = ({image, closeModal}) => {
    return (
        <div id="Overlay" className={style.Overlay} onClick={closeModal}>
            <div className={style.Modal}>
                <label className="ModalLabel" htmlFor="ModalInput">
                    <img src={image} alt="Pixabay" />
                </label>
                <input type="text" id="ModalInput" className={style.ModalInput} onKeyUp={closeModal} autoFocus />
            </div>
        </div>
    )
}

export default Modal;

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
}