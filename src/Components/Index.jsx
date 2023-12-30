import react from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { CounterComponent } from "./CounterComponent";

export function Index() {
  return (
    <>
      <div className="counter">
        <h1 className="fs-2 text-uppercase">Contador</h1>
        <CounterComponent />
      </div>
    </>
  );
}

export default Index;
