import img1 from "./components/imgs/Rectangle 38 (1).png";
import img5 from "./components/imgs/Rectangle 38.png";
import img2 from "./components/imgs/Rectangle 38 (2).png";
import img3 from "./components/imgs/Rectangle 38 (3).png";
import img4 from "./components/imgs/Rectangle 38 (4).png";
import img6 from "./components/imgs/Rectangle 38 (5).png";
import img7 from "./components/imgs/Rectangle 38 (6).png";
import person5 from "./components/imgs/Image.png";
import tracey from "./components/imgs/tracey.png";
import jason from "./components/imgs/jason.png";
import elizabeth from "./components/imgs/elizabeth.png";
import ernie from "./components/imgs/ernie.png";
import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const Blogs = [
    {
      img: img1,
      person: tracey,
      name: "Tracey Wilson",
      category: "Beach",
    },
    {
      img: img2,
      person: jason,
      name: "Jason Francisco",
      category: "City",
    },
    {
      img: img2,
      person: elizabeth,
      name: "Elizabeth Slavin",
      category: "City2",
    },
    {
      img: img3,
      person: ernie,
      name: "Ernie Smith",
      category: "Homes",
    },
    {
      img: img5,
      person: person5,
      name: "Eric Smith",
      category: "Desert",
    },
    {
      img: img4,
      person: tracey,
      name: "Tracey Wilson",
      category: "Cars",
    },
    {
      img: img5,
      person: jason,
      name: "Jason Francisco",
      category: "Technology",
    },
    {
      img: img6,
      person: jason,
      name: "Jason Francisco",
      category: "Ocean",
    },
    {
      img: img7,
      person: ernie,
      name: "Ernie Smith",
      category: "Games",
    },
  ];
  return (
    <AuthContext.Provider value={{ Blogs }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
