import { useWeb3Modal } from "@web3modal/ethers/react";

const Main = () => {
  const { open } = useWeb3Modal();

  const test = () => {
    open();
  };

  return (
    <div>
      <button onClick={test}>connect</button>
    </div>
  );
};

export default Main;
