import { callService } from './';

export interface Rates {
  [currencySymbol: string]: number
}

export interface LatestInfo {
  timestamp: number;
  date: string;
  uah: Rates
}

export const getLatestInfo = async (): Promise<LatestInfo | undefined> => {
  return await callService('/currencies/uah.json');
}
