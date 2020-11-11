import React, { createContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSContext = createContext<void>(AOS.init());
