const axios = require("axios");

// Function to calculate the average time difference
const calculateAverageTimeDifference = (timeDifferences) => {
  const sum = timeDifferences.reduce((acc, curr) => acc + curr, 0);
  return sum / timeDifferences.length;
};

// Function to synchronize clocks using the Berkeley algorithm
const synchronizeClocks = async () => {
  try {
    // Get current timestamp
    const localTime = Date.now();

    // Get server timestamp
    const response = await axios.get("http://localhost:5000/clock");
    const serverTime = response.data.timestamp;

    // Calculate time difference
    const timeDifference = localTime - serverTime;

    // Update local clock by adjusting with the time difference
    const newLocalTime = localTime - timeDifference;
    console.log(`Local time adjusted by ${timeDifference} milliseconds.`);
    console.log(`New local time: ${new Date(newLocalTime)}`);
  } catch (error) {
    console.error("Error synchronizing clocks:", error);
  }
};

module.exports = { synchronizeClocks };
