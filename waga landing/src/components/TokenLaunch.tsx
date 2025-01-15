import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2, Wallet, Coins } from "lucide-react";

const TokenLaunch: React.FC = () => {
  return (
    <Card className="max-w-sm mx-auto bg-green-900 text-white border-white">
      <CardHeader>
        <CardTitle className="text-center">INITIAL TOKEN LAUNCH</CardTitle>
        <CardDescription className="text-center text-gray-200">
          Support WAGA By Purchasing some WGTN
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#D7FF00]" />
            <span>Connect your wallet</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-[#D7FF00]" />
            <span>Swap Some ETH into WGTN</span>
          </li>
        </ul>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        <Button 
          className="w-full bg-[#D7FF00] text-green-900 hover:bg-[#c1e600] font-bold transition-all duration-300"
          variant="secondary"
        >
          <Coins className="mr-2 h-5 w-5" />
          SUPPORT US
        </Button>
        
        <Button 
          className="w-full bg-primary hover:bg-green-700 text-white font-bold transition-all duration-300"
          variant="secondary"
        >
          <Wallet className="mr-2 h-5 w-5" />
          CONNECT WALLET
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TokenLaunch;
