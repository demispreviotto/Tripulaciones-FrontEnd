import React, { useEffect, useState } from "react";

const IncidencesUpdater = () => {
    const [toReceive, setToReceive] = useState([]);
    const [lastFetchTimestamp, setLastFetchTimestamp] = useState(null);

    // Load messages from the JSON file and create new messages
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Logic to create new Incidences messages and save them to MongoDB
                // summary,
                // category,
                // originalMessage,
                // status,
                // doorIds,
                // buildingId,
                // ownerIds,
                // ...

                // Update last fetch timestamp
                setLastFetchTimestamp(new Date().getTime());

                // Update toReceive state with new messages
                setToReceive((prevToReceive) => [
                    ...prevToReceive,
                    // Add your new messages here
                ]);

                // Mark new messages as received in MongoDB or your backend
                markMessagesAsReceived();
            } catch (error) {
                console.error("Error updating messages:", error);
            }
        };

        fetchData();

        // Fetch new messages every hour
        const intervalId = setInterval(() => {
            fetchData();
        }, 60 * 60 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Function to mark messages as received in MongoDB or your backend
    const markMessagesAsReceived = () => {
        // Update MongoDB or your backend to mark messages as received
        // For example, you can update the "Estado incidencia" field to "Received"
    };

    return null; // Since this component doesn't render anything
};

export default IncidencesUpdater;
