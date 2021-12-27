import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import Route from "./route";
import Navbar from "./components/Navbar";
import "./App.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const drizzle = new Drizzle(drizzleOptions);

let isLoggedIn;
if (window.web3) {
  isLoggedIn = window.web3.currentProvider.isMetaMask;
} else {
  isLoggedIn = false;
}

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {(drizzleContext) => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized && isLoggedIn) {
            return (
              <Loader
                type="ThreeDots"
                color="#83C5BE"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            );
          }

          return isLoggedIn ? (
            <div>
              <Navbar drizzle={drizzle} drizzleState={drizzleState} />
              <Route drizzle={drizzle} drizzleState={drizzleState} />
            </div>
          ) : (
            <div></div>
          );
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
};

export default App;
