import React, { useEffect, useState } from 'react';
import './collectorPickup.css';
import axios from 'axios';

function CollectorPickup() {
  const [requests, setRequests] = useState([]);

  const fetchRequests = () => {
    axios.post('http://localhost:3022/pickup/viewall')
      .then((res) => {
        if (res.data.success) {
          setRequests(res.data.data);
        } else {
          alert('No pickup data found!');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Error fetching pickup data!');
      });
  };

  const updatePaymentStatus = (id, status) => {
    axios.post('http://localhost:3022/pickup/updatepayment', {
      id,
      paymentStatus: status,
    })
      .then((res) => {
        if (res.data.success) {
          alert(res.data.message);
          fetchRequests();
        } else {
          alert('Failed to update payment status.');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('Network error while updating payment!');
      });
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className='collector-container'>
      <h2>Manage Pickup Requests</h2>
      <div className='pickup-list'>
        {requests.map((req, index) => (
          <div className='pickup-card' key={index}>
            <img src={`http://localhost:3022/uploads/${req.image}`} alt='Waste' />
            <p><b>User ID:</b> {req.userId}</p>
            <p><b>Waste Type:</b> {req.wasteType}</p>
            <p><b>Description:</b> {req.description}</p>
            <p><b>Payment Status:</b> {req.paymentStatus}</p>

            <div className='status-buttons'>
              <button onClick={() => updatePaymentStatus(req._id, 'Pending')}>
                Pending
              </button>
              <button onClick={() => updatePaymentStatus(req._id, 'Completed')}>
                Completed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectorPickup;
