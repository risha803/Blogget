import React from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export const AuthContextProvider = ({children, value}) => (
  <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
);

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object,
};

