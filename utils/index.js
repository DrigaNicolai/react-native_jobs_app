export const checkImageURL = (url) => {
  if (!url) return false
  /*else {
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
    return pattern.test(url);
  }*/ //TODO: OPTIMIZE / UPDATE REGEXP

  return true;
};
