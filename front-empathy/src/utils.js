export const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const mapEvents = performanceData => {
    const eventMap = performanceData.reduce((acc, v) => {
        const date = new Date(v.date.start.seconds * 1000);
        return {
            ...acc,
            [date]: acc[date] ? [...acc[date], v] : [v]
        }
    }, {});

    return Object.entries(eventMap).map(([date, eventList]) => ({ date, eventList }));
};

export const formatTime = timestamp => {
    const _date = new Date(timestamp * 1000);
    return `${_formatTime(_date.getHours())}:${_formatTime(_date.getMinutes())}`;
};

function _formatTime(number) {
    number = number + '';
    if (number.length === 1) {
        return `0${number}`
    } else {
        return number
    }
}
