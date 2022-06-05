export const timeConvert = (time) => {

    let result = '',
      d = parseInt(time / 24 / 60),
      h = parseInt(time / 60 % 24),
      m = parseInt(time % 60);

    if (d > 0) result += d + 'd '; 
    if (h > 0) result += h + 'h '; 
    if (m > 0) result += m + 'm';
    else result = result + '0m ';
  
    return result.trim();
  }