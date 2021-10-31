import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";

const useRooms = () => {
    const [roomsData, setRoomsData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/rooms`)
            .then(res => setRoomsData(res.data))
    }, [roomsData]);
    return [roomsData, setRoomsData];
}

export default useRooms;