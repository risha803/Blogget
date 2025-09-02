import React, {useEffect, useState} from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {assignId} from '../../../utilits/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';
import {debounceRaf} from '../../../utilits/debounce';

const LIST = [
  {value: 'Главная',
    Icon: HomeIcon,
  },
  {value: 'Просмотренные',
    Icon: EyeIcon,
  },
  {value: 'Сохраненные',
    Icon: SaveIcon,
  },
  {value: 'Мои посты',
    Icon: PostIcon,
  },
].map(assignId);

export const Tabs = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(true);

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

  return (
    <div className={style.container}>
      {isDropDown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
            Add
            <ArrowIcon width={15} height={15} />
          </button>
        </div>)
      }
      {(isDropDownOpen || !isDropDown) && <ul className={style.list}>
        {LIST.map((item) => (
          <li className={style.item} key={item.id}>
            <button
              className={style.btn}
              onClick={() => {}}>
              {item.value}
              {item.Icon && <item.Icon width={30} height={30} />}
            </button>
          </li>
        ))}
      </ul>}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
