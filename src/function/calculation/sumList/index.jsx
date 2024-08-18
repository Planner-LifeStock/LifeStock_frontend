function SumList({ data, type }) {
  let sum = 0
  data.forEach(data => {
    sum += data[type]
  })
  return sum
}

export default SumList
