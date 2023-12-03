function formatDatePicker(date) {
    return new Date(
        new Date(date)
            .toISOString()
            .substring(0, 10)
    );
}

export default formatDatePicker;