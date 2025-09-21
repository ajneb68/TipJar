// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TipJar {
    struct Tip {
        address from;
        uint amount;
    }

    Tip[] public tips;

    function sendTip() external payable {
        require(msg.value > 0, "No ETH sent");
        tips.push(Tip(msg.sender, msg.value));
    }

    function getTips() external view returns (Tip[] memory) {
        return tips;
    }

    function withdraw(address payable _to) external {
        _to.transfer(address(this).balance);
    }
}
