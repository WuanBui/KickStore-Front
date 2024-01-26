import { createGlobalStyle } from "styled-components";
import {CartContextProvider} from "@/components/CartContext";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
  body{
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
