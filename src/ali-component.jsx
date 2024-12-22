import { useAccount, useConnect, useDisconnect, useReadContract } from "wagmi";
import abi from "../abi.json";
import { useEffect, useState } from "react";

export default function AliComponent() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const [wallet, setWallet] = useState(null);

  const handleConnect = () => {
    connect({ connector: connectors[0] });
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const { data, error, isPending, refetch } = useReadContract({
    abi,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    functionName: "balanceOf",
    args: [wallet],
  });

  useEffect(() => {
    if (address && !data) {
      setWallet(address);
      refetch();
    }
  }, [address]);

  return (
    <div>
      <div>
        {isConnected ? (
          <button onClick={handleDisconnect}>Disconnect</button>
        ) : (
          <button onClick={handleConnect}>Connect</button>
        )}
      </div>
      {isConnected && (
        <>
          <div>address: {address}</div>
          <hr />
          <pre>
            <code>
              {data && `Balance: ${(parseInt(data) * 1e-6).toFixed(6)}`}
              {error && JSON.stringify(error)}
              {isPending && "Loading..."}
            </code>
          </pre>
        </>
      )}
    </div>
  );
}
