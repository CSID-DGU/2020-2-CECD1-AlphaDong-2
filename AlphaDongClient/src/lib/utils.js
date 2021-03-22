const getFormattedDelta = (timestamp) => {
  const delta = Math.ceil((Date.now() - Date.parse(timestamp)) / 1000);
  if (delta < 60) {
    return delta + '초 전';
  } else if (delta < 3600) {
    return Math.ceil(delta / 60) + '분 전';
  } else if (delta < 3600 * 24) {
    return Math.ceil(delta / 3600) + '시간 전';
  } else if (delta < 3600 * 24 * 5) {
    return Math.ceil(delta / (3600 * 24 * 5)) + '일 전';
  } else {
    return new Date(Date.parse(timestamp)).toLocaleString('ko-KR', {
      timeZone: 'UTC',
    });
  }
};

export const formattedTime = (timestamp) => {
  return getFormattedDelta(timestamp);
};
