export function truncateText(str, length) {
  return str.length > length ? str.slice(0, length) + '...' : str;
}
const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function toPersianNumbersWithComma(n) {
  const numWithCommas = numberWithCommas(n); // 1000,2343
  const persianNumber = toPersianNumbers(numWithCommas);
  return persianNumber;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function toPersianNumbers(n) {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export function toLocalDateShort(date) {
  return new Date(date).toLocaleDateString('fa-IR', {});
}
