const formatDate = date => {
  const options = {
    years: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Intl.DateTimeFormat('ru', options)
    .format(new Date(date));
};

export default formatDate;
