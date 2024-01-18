import React, { useEffect, useState } from "react";

const IncidencesUpdater = () => {
  const [toReceive, setToReceive] = useState([]);
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLastFetchTimestamp(new Date().getTime());
        setToReceive((prevToReceive) => [...prevToReceive]);
        markMessagesAsReceived();
      } catch (error) {
        console.error("Error updating messages:", error);
      }
    };
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);
  const markMessagesAsReceived = () => {};

  return null;
};

export default IncidencesUpdater;
