import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

import { Navigation } from "./navigation";
import { ThemeProvider } from "./js/ThemeContext";

import { store } from "./store.js";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();
const prefix = createURL("/");

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigation
          linking={{
            enabled: "auto",
            prefixes: [prefix],
          }}
          onReady={() => {
            SplashScreen.hideAsync();
          }}
        />
      </ThemeProvider>
    </Provider>
  );
}
