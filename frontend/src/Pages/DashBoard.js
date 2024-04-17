import React, { useState, useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from 'mdb-react-ui-kit';
import Navbar from '../Components/Navbar';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5001/users/signup');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const { firstName, lastName, email } = data;
        const userData = { firstName, lastName, email };
        setUserData(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className="py-5" style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          {loading && <div>Loading...</div>}
          {!loading && !userData && <div>Error fetching data</div>}
          {!loading && userData && (
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCardText>First Name: {userData.firstName}</MDBCardText>
                <MDBCardText>Last Name: {userData.lastName}</MDBCardText>
                <MDBCardText>Email: {userData.email}</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          )}
        </MDBContainer>
      </section>
    </>
  );
}

export default Dashboard;
