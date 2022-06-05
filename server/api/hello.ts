export default defineEventHandler((event) => {
    const currentTime = new Date();

    return {
        'year': currentTime.getFullYear(),
        'month': currentTime.getMonth(),
        'day': currentTime.getDate(),
        'hour': currentTime.getHours(),
        'minute': currentTime.getMinutes(),
        'second': currentTime.getSeconds(),
    }
})