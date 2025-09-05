import style from './Header.module.css';
import Layout from '../Layout';
import Auth from './Auth';
import Logo from './Logo';
import Heading from './Heading';
import Search from './Search';

const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text='Главная'/>
        <Search />
        <Auth />
      </div>
    </Layout>
  </header>
);

export default Header;
