import logo from './logo.svg';
import './App.css';
import { TezosToolkit } from '@taquito/taquito';
import React, { useState, useEffect } from 'react';

function App() {

const [contractInstance, setContractInstance] = useState(null);
  const [storageValue, setStorageValue] = useState('');

  useEffect(() => {
    initializeContract();
  }, []);

  const initializeContract = async () => {
    try {
      const Tezos = new TezosToolkit('https://better-call.dev/ghostnet/KT1M6C1CvfFqFoaY3C1VQgB7YmB85BS7VRJB/interact/add_car');
      const contract = await Tezos.contract.at('KT1M6C1CvfFqFoaY3C1VQgB7YmB85BS7VRJB');
      setContractInstance(contract);
    } catch (error) {
      console.error('Failed to initialize contract:', error);
    }
  };

  const getStorageValue = async () => {
    try {
      const storage = await contractInstance.storage();
      setStorageValue(storage.toString());
    } catch (error) {
      console.error('Failed to get storage value:', error);
    }
  };


  return (
    <div className="App">

    <div>
      <button onClick={getStorageValue}>Get Storage Value</button>
      <p>Storage Value: {storageValue}</p>
    </div>
    </div>
  );
};

export default App;
