const queryOptions = {
  enabled: true, // 컴포넌트 마운트 시 자동으로 쿼리 실행
  staleTime: 1000 * 60, // 지정한 시간 간격으로 데이터 업데이트
  cacheTime: 1000 * 60, // 캐시 데이터가 메모리에 남아있는 시간
};

export default queryOptions;
