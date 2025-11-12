import React, { useState, useEffect } from 'react';
import './userPickup.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserPickup() {
    const { id } = useParams();
    const [pickup, setPickup] = useState({
        wasteType: '',
        frequency:'',
        description: '',
        image: '',
    });
    const [allRequests, setAllRequests] = useState([]);

    const inputChange = (e) => {
        setPickup({ ...pickup, [e.target.name]: e.target.value });
    };

    const imageChange = (e) => {
        setPickup({ ...pickup, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('wasteType', pickup.wasteType);
        formData.append('wasteType', pickup.frequency);
        formData.append('description', pickup.description);
        formData.append('image', pickup.image);

        axios.post('http://localhost:3022/addpickup', formData)
            .then((res) => {
                if (res.data.success) {
                    alert(res.data.message);
                    fetchAllRequests();
                } else {
                    alert(res.data.message || 'Failed to submit pickup request.');
                }
            })
            .catch((err) => {
                console.error(err);
                alert('Network error while submitting pickup request!');
            });
    };

    const fetchAllRequests = () => {
        axios.post(`http://localhost:3022/viewbyuser/${id}`)
            .then((res) => {
                if (res.data.success) {
                    setAllRequests(res.data.data);
                } else {
                    setAllRequests([]);
                }
            })
            .catch((err) => {
                console.error(err);
                alert('Error fetching pickup requests!');
            });
    };

    useEffect(() => {
        fetchAllRequests();
    }, []);

    return (
        <div className='pickup-container'>
            <h2>Pickup Requests</h2>

            <form onSubmit={handleSubmit} className='pickup-form'>
                <label>Preferred Waste Type:</label>
                <select name="wasteType" value={data.wasteType} onChange={inputData} required>
                    <option value="">-- Select Waste Type --</option>
                    <option value="plastic">Plastic</option>
                    <option value="organic">Organic</option>
                    <option value="ewaste">E-Waste</option>
                    <option value="metal">Metal</option>
                    <option value="paper">Paper</option>
                    <option value="mixed">Mixed</option>
                </select>

                <label>Pickup Frequency:</label>
                <select name="frequency" value={data.frequency} onChange={inputData} required>
                    <option value="">-- Select Frequency --</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>

                <label>Description:</label>
                <textarea name='description' onChange={inputChange} required />

                <label>Upload Waste Image:</label>
                <input type='file' name='image' onChange={imageChange} required />

                <button type='submit'>Submit Request</button>
            </form>

            <h3>Your Pickup History</h3>
            <div className='pickup-list'>
                {allRequests.map((req, index) => (
                    <div className='pickup-card' key={index}>
                        <img src={`http://localhost:3022/uploads/${req.image}`} alt='?' />
                        <p><b>Waste Type:</b> {req.wasteType}</p>
                        <p><b>Description:</b> {req.description}</p>
                        <p><b>Payment Status:</b> {req.paymentStatus}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserPickup;
