import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resJson => setData(resJson));
  }, [url]);

  return data;
}

export default useFetch;

// import { useEffect, useState } from "react";

// function useFetch(url) {
//     const [data, setData] = useState(null); // 초기값을 null로 설정
//     const [loading, setLoading] = useState(true); // 로딩 상태 추가
//     const [error, setError] = useState(null); // 오류 상태 추가

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const resJson = await response.json();
//                 setData(resJson);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false); // 데이터 로딩 완료
//             }
//         };

//         fetchData();
//     }, [url]);

//     return { data, loading, error }; // data, loading, error 반환
// }

// export default useFetch;
