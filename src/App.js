import React from 'react';
import './App.css';

const App = () => {
  return (
      <>
        <div className="card profile-container">
          <div>이름 : 박재성</div>
          <div>나이 : 20</div>
        </div>

        <div className="card product-container">
          <h3>상품명 : 아이폰</h3>
          <p>가격 : 90만원</p>
        </div>
      </>
  );
}

export default App;