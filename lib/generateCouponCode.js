const generateCouponCode = (title, expiryDate) => {
    const formattedTitle = title.replace(/\s+/g, '').toUpperCase();
    const [year, month, day] = expiryDate.split('-');
    const formattedDate = `${month}${day}${year.slice(-2)}`;
    return `${formattedTitle}${formattedDate}`;
};

export default generateCouponCode;