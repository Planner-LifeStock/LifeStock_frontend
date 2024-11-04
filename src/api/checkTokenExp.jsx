export function checkTokenExp(token) {
    if (!token) {
      console.error('No token provided');
      return true; // 토큰이 없으면 만료된 것으로 처리
    }
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      console.log(payload)
      const currentTime = Math.floor(Date.now() / 1000);
      return payload.exp < currentTime;
    } catch (error) {
      console.error('Error checking JWT expiration:', error);
      return true; // 오류가 발생하면 만료된 것으로 처리
    }
  }