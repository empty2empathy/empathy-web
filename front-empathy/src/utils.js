export const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const mapEvents = performanceData => {
    const eventMap = performanceData.reduce((acc, v) => {
        const _date = new Date(v.date.start.seconds * 1000);
        const date = `${_date.getFullYear()}-${_date.getMonth() + 1}-${_date.getDate()}`;
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

export const shareLink = (title, text) => {
    const url = window.location.href;

    if (isMobile) {
        navigator.share({ title, text, url })
    } else {
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = url;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        alert('클립보드에 복사 되었습니다');
    }
};

export const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)

export const openInsta = instaId => window.open(`https://www.instagram.com/${instaId}`);
