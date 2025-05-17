import React from 'react';
import AddModal from './components/AddModal';
import SubtracModal from './components/SubtracModal';  // Kiểm tra chính tả nếu bạn muốn là SubtractModal
import MultiplyModal from './components/MultiplyModal';
import DevideModal from './components/DevideModal';      // Nếu tên file đúng là DevideModal.js thì giữ nguyên
import DivisibilityModal from './components/DivisibilityModal';
import TotalCostModal from './components/TotalCostModal';
import WaterBillModal from './components/WaterBillModal';
import RectangleAreaModal from './components/RectangleAreaModal';

function App() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Các phép tính cơ bản</h1>
      <div style={styles.grid}>
        <AddModal />
        <SubtracModal />
        <MultiplyModal />
        <DevideModal />
        <DivisibilityModal />
        <TotalCostModal />
        <WaterBillModal />
        <RectangleAreaModal />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
};

export default App;
