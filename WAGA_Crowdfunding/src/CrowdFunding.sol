// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract CrowdFunding is ReentrancyGuard {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    Campaign public campaign; // Single campaign
    bool public campaignExists; // Tracks if a campaign has been created
    address public contractOwner;

    event CampaignCreated(address indexed owner, uint256 target, uint256 deadline);
    event DonationReceived(address indexed donator, uint256 amount);
    event FundsWithdrawn(uint256 amount);

    constructor() {
        contractOwner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == contractOwner, "Only the contract owner can perform this action.");
        _;
    }

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _image
    ) public onlyOwner {
        require(!campaignExists, "A campaign already exists.");
        require(_deadline > block.timestamp, "The deadline must be a date in the future.");
        require(_target > 0, "Target amount should be greater than zero.");

        campaign = Campaign({
            owner: _owner,
            title: _title,
            description: _description,
            target: _target,
            deadline: _deadline,
            amountCollected: 0,
            image: _image,
            donators: new address , // Initialize as an empty array
          ations: new uint256  // Initialize as an empty array
        });

   campaignExists = true;

        emit CampaignCreated(_owner, _target, _deadline);
    }

    function donateToCampaign() public payable nonReentrant {
        require(campaignExists, "No campaign exists.");
        require(msg.value > 0, "Donation amount must be greater than zero.");
        require(block.timestamp <= campaign.deadline, "The campaign has ended.");

        campaign.donators.push(msg.sender);
        campaign.donations.push(msg.value);
        campaign.amountCollected += msg.value;

        emit DonationReceived(msg.sender, msg.value);
    }

    function withdrawFunds() public onlyOwner nonReentrant {
        require(campaignExists, "No campaign exists.");
        require(msg.sender == campaign.owner, "Only the owner can withdraw funds.");
        require(campaign.amountCollected > 0, "No funds to withdraw.");
        require(block.timestamp > campaign.deadline, "Cannot withdraw before the campaign ends.");

        uint256 amount = campaign.amountCollected;
        campaign.amountCollected = 0;

        (bool sent, ) = payable(campaign.owner).call{value: amount}("");
        require(sent, "Failed to withdraw funds.");

        emit FundsWithdrawn(amount);
    }

    function getDonators() public view returns (address[] memory, uint256[] memory) {
        require(campaignExists, "No campaign exists.");
        return (campaign.donators, campaign.donations);
    }
}
