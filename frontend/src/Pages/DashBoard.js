import { useState } from 'react';
import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Navbar from '../Components/Navbar';

function DashBoard() {
  const [image, setImage] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleProfileUpdate = () => {
    // Update profile details in the frontend only
    console.log('Profile updated locally:', {
      fullName,
      email,
      phone,
      address,
      gender,
      image,
    });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className="py-5" style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="avatar-upload"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="avatar-upload">
                    <MDBCardImage
                      src={image || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: '150px', cursor: 'pointer' }}
                      fluid
                    />
                  </label>
                  <p className="text-muted mb-1">Fitness Enthusiast</p>
                  <p className="text-muted mb-1">Wellness WayFinder</p>
                  <p className="text-muted mb-4">Jhansi Uttar Pradesh</p>
                  {/* Save button for updating profile */}
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn onClick={handleProfileUpdate}>Save Profile</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="4">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="4">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="4">
                      <MDBCardText>Mobile No</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="4">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="4">
                      <MDBCardText>Gender</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  {/* Submit button for updating profile */}
                  <div className="d-flex justify-content-end mt-4">
                    <MDBBtn onClick={handleProfileUpdate}>Submit</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default DashBoard;
