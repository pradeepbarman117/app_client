function currencyFormator(number) {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('Invalid number');
  }

  if (number >= 10000000) {
    return (number / 10000000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'Cr';
  } else if (number >= 100000) {
    return (number / 100000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'L';
  } else if (number >= 1000) {
    return number.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } else {
    return number.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}

export default currencyFormator;



  // function currencyFormator(number) {
  //   if (typeof number !== 'number' || isNaN(number)) {
  //     throw new Error('Invalid number');
  //   }
  
  //   if (number >= 10000000) {
  //     return (number / 10000000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'Cr';
  //   } else if (number >= 100000) {
  //     return (number / 100000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'L';
  //   } else if (number >= 1000) {
  //     return (number / 1000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + 'K';
  //   } else {
  //     return number.toLocaleString('en-IN');
  //   }
  // }
  
  // export default currencyFormator;