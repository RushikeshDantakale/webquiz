// Function to convert hours and minutes to milliseconds
function convertToMilliseconds(hours, minutes) {
    return (hours * 60 * 60 * 1000) + (minutes * 60 * 1000);
  }
  

  function convertSecondsToHoursAndMinutes (seconds)  {
    const hr = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const min = Math.floor(remainingSeconds / 60);
    return { hr, min };
  };


  export {convertToMilliseconds , convertSecondsToHoursAndMinutes} ;