import { Circles } from  'react-loader-spinner';
import style from 'components/Loader/Loader.module.css'

const Loader = () => {
    return (
        <div className={style.loaderWrap}>
            <Circles
                height="50"
                width="50"
                color="#3f51b5"
                ariaLabel="circles-loading"
                visible={true}
            />
        </div>
    )
}

export default Loader;