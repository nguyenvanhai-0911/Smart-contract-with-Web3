pragma solidity  ^0.5.0;

// contract MyContract {
//     uint data;

//     function getData() external view returns(uint) {
//         return data;
//     }

//     function setData(uint _data) external {
//         data = _data;
//     }

//     function setDataPrivate(uint _data) private {
//         data = _data + 10;
//     }
// }

// contract MyContract {
//     string public functionCalled;

//     function sendEther() external payable {
//         functionCalled = 'sendEther';
//     }

//     function() external payable {
//         functionCalled = 'fallback';
//     }
// }

contract MyContract { 
    event MyEvent (
        uint indexed id,
        uint indexed date,
        string value
    );

    uint nextId;
    function emitEvent(string calldata value) external {
        emit MyEvent(nextId, now, value);
        nextId++;
    }
}