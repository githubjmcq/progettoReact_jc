//import { dateTime } from 'luxon';

export const formatDate = (date) => {
    if (!date) throw new Error('Date is null or indefined');
    const formattedDate = dateTime.fromISO(date);
    if(formattedDate.toString() === 'Invalid DateTime') throw new Error('Invalid date');
    return formattedDate.toLocaleString(dateTime.DATETIME_MED);
};