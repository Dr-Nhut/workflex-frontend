export default function formatKeyObject(objectOrigin, keyChangings) {
    return objectOrigin.map(item => {
        keyChangings.forEach(key => {
            item[key.new] = item[key.old];
            delete item[key.old];
        })
        return item;
    });
}