const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getFormattedDates(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startFormat = `${months[startDate.getMonth()]}, ${startDate.getFullYear()}`;
  const endFormat = `${months[endDate.getMonth()]}, ${endDate.getFullYear()}`;

  if (!end) {
    return `${startFormat} - Present`;
  } else if (startFormat === endFormat) {
    return startFormat;
  }

  return `${startFormat} - ${endFormat}`;
}

export function getFormattedDate(date: string) {
  const dateObj = new Date(date);

  return `${dateObj.getDay()} ${months[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
}