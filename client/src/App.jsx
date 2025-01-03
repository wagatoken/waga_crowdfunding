import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { useSendTransaction } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";

const client = createThirdwebClient({
  clientId: import.meta.env.VITE_REACT_APP_CLIENT_ID,
});


function App() {

  const contract = getContract({
    client,
    chain: defineChain(11155111),
    address: "0xd760415480813B3c5e9975005652f0287589ba05",
  });
 
  const { mutate: sendTx, data: transactionResult } =
    useSendTransaction();
  
  const onClick = () => {
    const transaction = prepareContractCall({
      contract,
      method: "function transfer(address to, uint256 value)",
      params: [to, value],
    });
    sendTx(transaction);
  };

  const { data, isPending } = useReadContract({
    contract,
    method: "function symbol() view returns (string)",
    params: [],
  });
  
  return(
    <>
    <div className="m-3">
      <div>
      </div>
        <ConnectButton client={client} />
        
        <button className="border bg-yellow-400 p-3 rounded" onClick={onClick}>
          Token-Symbol
        </button>
        <div>{data}</div>
    </div>
    </>
  )
}

export default App
