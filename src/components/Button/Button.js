import PropTypes from 'prop-types';
import style from 'components/Button/Button.module.css'

const Button = ({clickTOLoad}) => {
    return (
        <button onClick={clickTOLoad} className={style.Button}>Load more</button>
    )
}

export default Button;

Button.propTypes = {
    clickTOLoad: PropTypes.func.isRequired
}