import React from 'react';
import PropTypes from 'prop-types';
import {usePost} from '../hooks/usePost';

export const postContext = React.createContext({});

export const PostContextProvider = ({children}) => {
  const [posts] = usePost();

  return (
    <postContext.Provider value={{posts}}>
      {children}
    </postContext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
