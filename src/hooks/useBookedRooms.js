import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";

const useBookedRooms = () => {
    const [bookedRooms, setBookedRooms] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/roombookings`)
            .then(res => setBookedRooms(res.data))
    }, [bookedRooms]);
    return [bookedRooms, setBookedRooms];
}

export default useBookedRooms;