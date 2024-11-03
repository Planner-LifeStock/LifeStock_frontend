const SumList = ({ data, type }) => {

  let sum = 0;

  if(Array.isArray(data))
  {
    data.forEach(item => {
      sum += item[type] || 0;
    });
  }

  return sum;
}

export default SumList