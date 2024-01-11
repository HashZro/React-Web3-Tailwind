import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import Main from "./Main";
import { ethMainnet, ethSepolia } from "./constants/chains";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Test() {
  return <h2>About Page</h2>;
}

function App() {
  // 1. Get projectId at https://cloud.walletconnect.com
  const projectId = "c542f05a124208872c15c913f8972c37";

  // 3. Create modal
  const metadata = {
    name: "My Website",
    description: "My Website description",
    url: "https://mywebsite.com",
    icons: ["https://avatars.mywebsite.com/"],
  };

  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [ethMainnet, ethSepolia],
    projectId,
  });

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
