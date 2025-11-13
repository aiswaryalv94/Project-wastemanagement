import React, { useEffect, useState } from 'react';
import './collecterPickup.css';
import axios from 'axios';

function CollecterPickup() {
  const [requests, setRequests] = useState([]);

  const fetchAllPickups = () => {
   axios.post('http://localhost:3022/viewallpickup')
      .then((res) => {
        if (res.data && res.data.data) {
          setRequests(res.data.data);
        } else {
          setRequests([]);
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error fetching pickup requests!');
      });
  };

  
  const handleReadyToPickup = (pickupId) => {
    const collector = JSON.parse(localStorage.getItem('collector'));
    const collectorId = collector?._id;

    if (!collectorId) {
      alert('Collector ID not found!');
      return;
    }

    axios
      .post(`http://localhost:3022/pickupready/${pickupId}`, { collectorId })
      .then((res) => {
        alert(res.data.message || 'Status updated!');
        fetchAllPickups();
      })
      .catch((err) => {
        console.error(err);
        alert('Error updating pickup status!');
      });
  };

  
  const handlePaymentStatus = (pickupId, status) => {
    const collector = JSON.parse(localStorage.getItem('collector'));
    const collectorId = collector?._id;

    if (!collectorId) {
      alert('Collector ID not found!');
      return;
    }

    axios
      .post(`http://localhost:3022/updatepaymentpickup/${pickupId}`, {
        collectorId,
        paymentStatus: status,
      })
      .then((res) => {
        alert(res.data.message || 'Payment status updated!');
        fetchAllPickups();
      })
      .catch((err) => {
        console.error(err);
        alert('Error updating payment status!');
      });
  };

  useEffect(() => {
    fetchAllPickups();
  }, []);

  return (
    <div className="collecter-container">
      <h2>All Pickup Requests</h2>
      <div className="pickup-list">
        {requests.map((item) => (
          <div className="display-pickups" key={item._id}>
            <h3>User: {item.userId?.name}</h3>
            <h3>Waste Type: {item.wasteType}</h3>
            <h3>Description: {item.description}</h3>
            <h3>Pickup Date: {new Date(item.pickupDate).toLocaleDateString()}</h3>
            <h3>Collector Status: {item.collectorStatus || 'Not Informed'}</h3>
            <h3>Payment Status: {item.paymentStatus}</h3>
            <img className="pickup-image" src={`http://localhost:3022/uploads/${item.image.filename}`} alt="?"/>


            <div className="pickup-actions">
              <button
                className="btn-ready"
                onClick={() => handleReadyToPickup(item._id)}
              >
                Ready to Pickup
              </button>

              <select
                className="payment-select"
                value={item.paymentStatus}
                onChange={(e) =>
                  handlePaymentStatus(item._id, e.target.value)
                }
              >
                <option value="Pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollecterPickup;
