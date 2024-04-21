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
  // MDBBreadcrumb,
  // MDBBreadcrumbItem,
  // MDBProgress,
  // MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Navbar from '../Components/Navbar';

function DashBoard() {
  const [image, setImage] = useState('');
  const [file, setFile] = useState(null);

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
      setFile(selectedFile);
    }
  };

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <section  className="py-5" style={{ backgroundColor: '#eee' }}>
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
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={handleImageChange}>UploadImage</MDBBtn>
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
                  <MDBCol sm="4">
                  <input type="text" className="form-control" placeholder="Full Name" />
                  </MDBCol>
                  <MDBCol sm="4">
                  <MDBBtn>Edit</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="4">
                  <input type="email" className="form-control" placeholder="Email" />
                  </MDBCol>
                  <MDBCol sm="4">
                  <MDBBtn>Edit</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>Mobile No</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="4">
                  <input type="text" className="form-control" placeholder="Phone" />
                  </MDBCol>
                  <MDBCol sm="4">
                  <MDBBtn>Edit</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>Adress</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="4">
                  <input type="text" className="form-control" placeholder="Address" />
                  </MDBCol>
                  <MDBCol sm="4">
                  <MDBBtn>Edit</MDBBtn>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="4">
                  <input type="Gender" className="form-control" placeholder="Gender" />
                  </MDBCol>
                  <MDBCol sm="4">
                  <MDBBtn>Edit</MDBBtn>
                  </MDBCol>
                </MDBRow>
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