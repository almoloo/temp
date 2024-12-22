import { metaMask } from "wagmi/connectors";
import { http, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(
      "https://eth-mainnet.g.alchemy.com/v2/UcXp-SzDKOcl-kkPTaZ7lobROXIKugLl"
    ),
  },
  connectors: [metaMask()],
  walletConnectProjectId: "c370f8c4a66a46a0275bb477c6a44095",
});
