import {GiThrownKnife} from 'react-icons/gi'
import classNames from 'classnames/bind';
import styles from './ScrollTop.module.scss';
import {animateScroll as scroll} from 'react-scroll'
import { UseScrollY } from '../../hooks';

const cx=classNames.bind(styles)

function ScrollTop (){
  const [scrollY]=UseScrollY();
    const scrollToTop=()=>{
        console.log(scrollY)
        scroll.scrollToTop();
        document.getElementsByClassName('Sctops').styles='color:red'
    }
    return(
      <button className={cx('Sctops')} 
              onClick={()=>scrollToTop()}
              style={scrollY>600 ? {visibility:'visible'} : {visibility:'hidden'}}
      >
        <GiThrownKnife/>
      </button>
    )
}
export default ScrollTop