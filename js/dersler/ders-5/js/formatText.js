const trimText = (text, max) => {
  // Dışarıdan verilen text eğer max karakteri geçiyorsa text'i bu max değere kadar parçalar
  if (text.length <= max) {
    return text;
  } else {
    return text.slice(0, max) + "...";
  }
};

export default trimText;
