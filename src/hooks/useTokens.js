import { useCallback, useMemo } from 'react';
import { ChainId } from '@sushiswap/sdk';
import { useWeb3React } from '@web3-react/core';

import iconFTM from 'assets/svgs/ftm.svg';
import iconUSDC from 'assets/imgs/usdc.png';
import iconDAI from 'assets/imgs/dai.png';

const Tokens = {
  [ChainId.FANTOM]: [
    {
      address: '',
      name: 'Fantom',
      symbol: 'FTM',
      icon: iconFTM,
    },
    {
      address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
      name: 'Wrapped Fantom',
      symbol: 'WFTM',
      decimal: 18,
      icon: iconFTM,
    },
    {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      icon: iconUSDC,
    },
    {
      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      icon: iconDAI,
    },
  ],
  [ChainId.FANTOM_TESTNET]: [
    {
      address: '',
      name: 'Fantom',
      symbol: 'FTM',
      icon: iconFTM,
    },
    {
      address: '0x077fab8f7f79178f6718bdfdffd5c3b8d787aed5',
      name: 'Wrapped Fantom',
      symbol: 'WFTM',
      decimal: 18,
      icon: iconFTM,
    },
  ],
};

export default function useTokens() {
  const { chainId } = useWeb3React();

  const getTokenByAddress = useCallback(
    addr => (Tokens[chainId] || []).find(tk => tk.address === addr),
    [chainId]
  );

  const tokens = useMemo(() => Tokens[chainId], [chainId]);

  return { getTokenByAddress, tokens };
}
