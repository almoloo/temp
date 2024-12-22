import { WagmiProvider } from "wagmi";
import "./App.css";
import { config } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AliComponent from "./ali-component";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AliComponent />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
