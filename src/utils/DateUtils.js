class DateUtils {
  customFormat = (epochTimestamp) => {
    const theDate = new Date(epochTimestamp);
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDay();
    const year = theDate.getFullYear();
    let month = theDate.getMonth() + 1;
    let day = theDate.getDay();
    const shouldUseTodayDateString = year === todayYear &&
     month === todayMonth && day === todayDay;
    month = month > 9 ? month : `0${month}`;
    day = day > 9 ? day : `0${day}`;

    return shouldUseTodayDateString ? 'hoy' : `${day}/${month}/${year}`;
  };
}

const Utils = new DateUtils();

export default Utils;
