import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { getLatestInfo, LatestInfo } from './services/currency';
import { Converter } from './components/Converter';

export const App: React.FC = () => {
  const [latestInfo, setLatestInfo] = useState<LatestInfo | undefined>();

  const fetchLatestInfo = async () => {
    const latest = await getLatestInfo();
    latest && setLatestInfo(latest);
  }

  useEffect(() => {
    fetchLatestInfo();
  }, []);
  
  return (
    <div className="App">
      <Header latestInfo={latestInfo} />
      <Converter rates={latestInfo?.uah} />
    </div>
  );
}
