export const thousandFormatter = (num) => {
  if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return num;
};

export const removeSource = (str) => {
  const strBaru = str.split('.');
  return strBaru[0];
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp || 0);
  const day = date.getDay();
  const month = date.getMonth();
  const getDate = date.getDate();
  const getYears = date.getFullYear();
  let getHours = date.getHours();
  let getMinutes = date.getMinutes();

  const dayName = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    "Jum'at",
    'Sabtu',
  ];

  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Okt',
    'Nov',
    'Des',
  ];

  if (getHours < 10) {
    getHours = `0${getHours}`;
  }

  if (getMinutes < 10) {
    getMinutes = `0${getMinutes}`;
  }

  return `${dayName[day]}, ${getDate} ${monthName[month]} ${getYears} ${getHours}:${getMinutes}`;
};

export const limitCharacter = (str, limit) => {
  return str.length >= limit ? `${str.substr(0, limit)}...` : str;
};

export const slug = (str) => {
  return str.replace(/ /g, '-');
};
