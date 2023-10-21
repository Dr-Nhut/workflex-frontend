function formatCurrency(data) {
    return data.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}

export default formatCurrency;