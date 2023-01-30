import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router';

export function PrivateRoute({ component: Component, ...rest }) {
  const wallet = useSelector((state) => state.account.wallet);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (wallet || !wallet.connected) {
          return <Navigate to={{ pathname: '/' }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
}
