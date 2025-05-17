
import React from 'react';
import MultiplyModal from './components/MultiplyModal';
import AddModal from './components/AddModal';
import TotalCostModal from './components/TotalCostModal';
import DivisibilityModal from './components/DivisibilityModal';
import MaxNumberModal from './components/MaxNumberModal';
import CircleAreaModal from './components/CircleAreaModal';
import QuadraticSolverModal from './components/QuadraticSolverModal';
import EvenOddModal from './components/EvenOddModal';

function App() {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    padding: '40px',
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
  };

  const titleStyle = {
    textAlign: 'center',
    paddingTop: '20px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div>
      <h1 style={titleStyle}>Các phép tính cơ bản</h1>
      <div style={containerStyle}>
        <AddModal />
        <MultiplyModal />
        <TotalCostModal />
        <DivisibilityModal />
        <MaxNumberModal />
        <CircleAreaModal />
        <QuadraticSolverModal />
        <EvenOddModal />
      </div>
    </div>
  );
}

export default App;
