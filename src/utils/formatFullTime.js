export default function formatFullTime(time) {
    const date = new Date(time);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    return `${hours}:${minutes} ${date.toLocaleDateString()}`;
}