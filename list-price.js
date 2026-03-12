for (let i = 1; i <= 8; i++) {
  
  let originalPrice;

  if (i === 1) originalPrice = 30;
  else if (i === 2) originalPrice = 45;
  else if (i === 3) originalPrice = 60;
  else if (i === 4) originalPrice = 75;
  else if (i === 5) originalPrice = 90;
  else if (i === 6) originalPrice = 25;
  else if (i === 7) originalPrice = 55;
  else if (i === 8) originalPrice = 80;

  let discountedPrice = originalPrice;

  if (originalPrice > 50) {
    discountedPrice = originalPrice * 0.85;
    console.log(`₦${originalPrice} — ₦${discountedPrice.toFixed(2)} (15% discount applied)`);
  } else console.log(`₦${originalPrice} — ₦${discountedPrice.toFixed(2)} (no discount)`);
}