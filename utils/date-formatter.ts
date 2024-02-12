const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getFormattedDate(start: string, end: string) {
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
