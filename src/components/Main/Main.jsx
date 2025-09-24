import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Routes, Route} from 'react-router-dom';
import {NotFound} from './NotFound/NotFound';
import {Rising} from './Rising/Rising';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Tabs />
              <Rising />
            </>
          }
        ></Route>
        <Route
          path="/category/:page"
          element={
            <>
              <Tabs />
              <List />
            </>
          }
        >
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </main>
);


