import React, {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utilits/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {debounceRaf} from '../../../utilits/debounce';

const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Топ', Icon: TopIcon},
  {value: 'Лучшие', Icon: BestIcon},
  {value: 'Горячие', Icon: HotIcon},
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);
  const [selectedTab, setSelectedTab] = useState(null);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    handleResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const handleTabSelect = (item) => {
    setSelectedTab(item);
    setIsDropDownOpen(false);
  };

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
          >
            {selectedTab ? selectedTab.value : 'Add'}
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}

      {(isDropDownOpen || !isDropDown) && (
        <ul className={style.list}>
          {LIST.map((item) => (
            <li
              className={style.item}
              key={item.id}
              onClick={() => {
                console.log('LI clicked for item:', item);
                handleTabSelect(item);
              }}
            >
              <button className={style.btn}>
                {item.value}
                {item.Icon && <item.Icon width={30} height={30} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
