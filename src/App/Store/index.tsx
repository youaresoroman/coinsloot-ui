import React from "react";

import { AppProps } from "../index.types";
import { withStore } from 'react-context-hook'

import Holder from "../Holder"

const Provider: React.FC<AppProps> = ({ children, className = "cl-app" }) => (
  <Holder className={className}>
    {children}
  </Holder>
);

const initialState = { notifications: [], modals: [], theme: "darkTheme" }

const storeConfig = {
  listener: (state: any, key: string, prevValue: any, nextValue: any) => {
    if (process.env.NODE_ENV !== 'test' && prevValue != nextValue) {
      console.log(`the key "${key}" changed in the store`)
      console.log('the old value is', prevValue)
      console.log('the current value is', nextValue)
      console.log('the state is', state)
    }
  },
  logging: process.env.NODE_ENV !== 'test'
}

export default withStore(Provider, initialState, storeConfig)