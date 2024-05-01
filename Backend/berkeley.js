const axios = require('axios');

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

    // Get timestamps from all servers
    const serverTimestamps = await axios.get('http://localhost:5000/clock');

    // Calculate time differences
    const timeDifferences = serverTimestamps.data.map(serverTimestamp => {
      const serverTime = serverTimestamp.timestamp;
      return localTime - serverTime;
    });

    // Calculate average time difference
    const averageTimeDifference = calculateAverageTimeDifference(timeDifferences);

    // Update local clock by adjusting with the average time difference
    const newLocalTime = localTime - averageTimeDifference;

    console.log(`Local time adjusted by ${averageTimeDifference} milliseconds.`);
    console.log(`New local time: ${new Date(newLocalTime)}`);
  } catch (error) {
    console.error('Error synchronizing clocks:', error);
  }
};

module.exports = { synchronizeClocks };
