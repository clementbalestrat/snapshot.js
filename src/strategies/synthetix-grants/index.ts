import { getAddress } from '@ethersproject/address';

const gDAOMembers = [
  '0x099DbFa498d0b7Fbdf8bC6eD9FaF868454022EC2',
  '0xbF49B454818783D12Bf4f3375ff17C59015e66Cb',
  '0xF5a701D13Be654a534D14DE8Cd6a328293712405',
  '0x30CF8aA72C4e69e35E0e48E785176704D6D70C7D',
  '0x1a207bEefC754735871CEEb4C506686F044B1c41'
];
const voteWeight = 1;

export async function strategy(
  _space,
  _network,
  _provider,
  _addresses,
  _,
  snapshot
) {
  return gDAOMembers.reduce(function (score, addr) {
    score[getAddress(addr)] = voteWeight;
    return score;
  }, {});
}
