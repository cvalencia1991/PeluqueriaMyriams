import localFont from "next/font/local";

export const timesNewRoman = localFont({
  src: [
    {
      path: "/fonts/Times New Roman/times new roman regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Times New Roman/times new roman italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-roman",
});

export const avenir = localFont({
  src: [
    {
      path: "/fonts/Avenir/AvenirLTStd-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "/fonts/Avenir/AvenirLTStd-Book.otf",
      weight: "300",
      style: "regular",
    },
  ],
  variable: "--font-avenir",
});
