import React, { useState } from 'react';
import useFetch from "../../hooks/useFetch";

const SalesInfo = () => {
  const Id = 1;
  const userList = useFetch(`http://localhost:8080/users/${Id}`);
  const companyList = useFetch(`http://localhost:8080/company/${Id}`);

  // 매매 내역이 들어갈 데이터 상태 (초기값을 빈 배열로 설정)
  const [tradeHistory, setTradeHistory] = useState([]);

  // 매매 기록 추가 함수
  const addTradeRecord = () => {
    // companyList가 로딩 중이거나 데이터가 없을 때 함수 실행 방지
    if (!companyList || !companyList.name || !companyList.description) {
      return;
    }

    const newRecord = {
      companyName: companyList.name,
      companyDescription: companyList.description,
      listingDate: '2024.08.21',
      sellingDate: '2024.08.27(7일)',
      listingPrice: 15000,
      stocksIssued: 100,
      difficulty: '상',
      initialCost: 2000000,
      currentValue: 1750000,
      profitOrLoss: -275000,
      profitPercentage: -13.75
    };

    // 새 매매 기록을 기존 기록에 추가
    setTradeHistory(prevHistory => [...prevHistory, newRecord]);
  };

  // 데이터 로딩 중 또는 에러 시 처리
  if (!userList || !companyList) {
    return <div>Loading...</div>;
  }

  if (userList.error || companyList.error) {
    return <div>Error loading data</div>;
  }

  return (
    <>
      {/* 매매 기록 테이블 */}
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>회사명</th>
            <th>회사 설명</th>
            <th>상장일</th>
            <th>매각일</th>
            <th>상장가</th>
            <th>발행 주식 수</th>
            <th>난이도</th>
            <th>상장비용</th>
            <th>회사 매각 가격</th>
            <th>회사 매각 손익</th>
          </tr>
        </thead>
        <tbody>
          {tradeHistory.map((record, index) => (
            <tr key={index}>
              <td>{record.companyName}</td>
              <td>{record.companyDescription}</td>
              <td>{record.listingDate}</td>
              <td>{record.sellingDate}</td>
              <td>{record.listingPrice.toLocaleString()}원</td>
              <td>{record.stocksIssued}주</td>
              <td>{record.difficulty}</td>
              <td>{record.initialCost.toLocaleString()}원</td>
              <td>{record.currentValue.toLocaleString()}원</td>
              <td style={{ color: record.profitOrLoss < 0 ? 'blue' : 'red' }}>
                {record.profitOrLoss.toLocaleString()}원 ({record.profitPercentage}%)
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 매매 기록 추가 버튼 */}
      <button 
        onClick={addTradeRecord} 
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }} 
        disabled={!companyList || !companyList.name}
      >
        매매 기록 추가
      </button>
    </>
  );
};

export default SalesInfo;