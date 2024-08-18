// 퍼센트 함수
// (비교값/기준값 -1)*100

function PercentageIncrease(standard, comparision) {
  const result = (comparision / standard - 1) * 100
  return `(${result.toFixed(1)} %)`
}

export default PercentageIncrease
