import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-18P4DB7PS8");
};

export const trackPage = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
