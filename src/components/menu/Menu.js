import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import {FaHome, FaSnapchatGhost, FaStar} from 'react-icons/fa'
import {ImFire} from 'react-icons/im'
import {TbToiletPaper} from 'react-icons/tb'
import {GiBoxingGlove, GiBowieKnife} from 'react-icons/gi'
import {MdTheaterComedy} from 'react-icons/md'
import {SiNetflix} from 'react-icons/si'

import MenuItem from './menuItems/menuItems';


const cx= classNames.bind(styles)


function Menu () {
    return ( 
       <div className={cx('menuName')}>
          <MenuItem Name="Netflix" Icon={SiNetflix} to="netflixMovie"/>
          <MenuItem Name="Trending" Icon={ImFire} to="trendingMovie"/>
          <MenuItem Name="Top Rated" Icon={FaStar} to="toprateMovie"/>
          <MenuItem Name="Actions Movies" Icon={GiBowieKnife} to="actionMovie"/>
          <MenuItem Name="Comedy Movies" Icon={MdTheaterComedy} to="comedyMovie"/>
          <MenuItem Name="Horror Movies" Icon={FaSnapchatGhost} to="HorrorMovie"/>
          <MenuItem Name="Romance Movies" Icon={GiBoxingGlove} to="RomaceMovie"/>
          <MenuItem Name="Documentaries" Icon={TbToiletPaper} to="documenMovie"/>
       </div>
       
 );
}
export default Menu
