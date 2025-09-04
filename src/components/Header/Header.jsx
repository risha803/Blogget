import style from './Header.module.css';
import Layout from '../Layout';
import Auth from './Auth';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';
import PropTypes from 'prop-types';

const Header = ({token}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text='Главная'/>
        <Search />
        <Auth token={token}/>
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string.isRequired,
};

export default Header;
