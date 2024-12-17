// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CrowdFunding} from "../src/CrowdFunding.sol";

contract CrowdFundingScript is Script {
    CrowdFunding public crowdFunding;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Deploy the CrowdFunding contract and assign it to the state variable
        crowdFunding = new CrowdFunding();

        console.log("CrowdFunding contract deployed at:", address(crowdFunding));

        vm.stopBroadcast();
    }
}
