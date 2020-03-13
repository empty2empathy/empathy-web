export const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const mapEvents = performanceData => {
    const eventMap = performanceData.reduce((acc, v) => {
        const date = v.date.start.slice(0, 10);
        return {
            ...acc,
            [date]: acc[date] ? [...acc[date], v] : [v]
        }
    }, {});

    return Object.entries(eventMap).map(([date, eventList]) => ({ date, eventList }));
};
