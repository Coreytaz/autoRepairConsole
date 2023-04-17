export const normalizeNumberTel = (value: string) => {
  const cleanedValue = value.replace(/\D/g, '').slice(0, 11);

  const match = cleanedValue.match(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})$/);

  if (match) {
    const formattedValue = `${match[0] ? `+7` : ''}${match[1] ? ` ${match[2]}` : ''}${
      match[3] ? ` ${match[3].substring(0, 3)}` : ''
    }${match[4] ? `-${match[4].substring(0, 4)}` : ''}`;

    return formattedValue;
  }

  return value;
};

export const normalizeStateNumber = (value: string) => {
  value = value
    .replace(/[^авекмнорстух|АВЕКМНОРСТУХ|0-9]/g, '')
    .slice(0, 9)
    .toUpperCase();

  let formattedValue = '';

  if (value.slice(0, 1).match(/[АВЕКМНОРСТУХ]/g)) {
    formattedValue = value.slice(0, 1);
  }

  if (value.slice(1, 4).match(/\d/g)) {
    formattedValue = `${formattedValue} ${value.slice(1, 4)}`;
  }

  if (value.slice(4, 6).match(/[АВЕКМНОРСТУХ]/g)) {
    formattedValue = `${formattedValue} ${value.slice(4, 6)}`;
  }

  if (value.slice(6, 9).match(/\d/g)) {
    formattedValue = `${formattedValue} ${value.slice(6, 9)}`;
  }

  return formattedValue;
};
