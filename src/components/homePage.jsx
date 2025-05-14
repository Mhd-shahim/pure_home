import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import heroImage from '../assets/Images/hero-image.jpg'; 
import EmaarImage from '../assets/Images/Emaar.jpg';
import AljiImage from '../assets/Images/Alji-mi-real-Estate.jpg';
import DubaiProperties from '../assets/Images/Dubai-Properties.jpg';
import EagleHills from '../assets/Images/Eagle-Hills-logo.jpg';
import Bloom from '../assets/Images/Bloom.jpg';
import Samana from '../assets/Images/Samana-Logo.jpg';
import Baraka from '../assets/Images/Baraka-Logo-150x150.jpg';
import Apartment1 from '../assets/Images/apartment1.jpeg';
import Apartment2 from '../assets/Images/apartment2.png';
import Apartment3 from '../assets/Images/apartment3.png';
import logo from '../assets/Images/pure-home-logo.png'; // Adjust the path as necessary

function HomePage() {
  return (
    <div>
    {/* Navigation Bar */}
    <Navbar
  expand="lg"
  style={{
    background: 'linear-gradient(90deg,rgb(73, 76, 78) 60%,rgba(0,0,0,0.5) 100%)',
    boxShadow: '0 2px 12px rgba(30, 64, 175, 0.08)'
  }}
>
  <Container>
    {/* Replace 'logo.png' with your actual logo import or path */}
    <Navbar.Brand href="#home" style={{ padding: 0 }}>
      <img
        src={logo}
        alt="Pure Home Logo"
        style={{ height: 48, width: 'auto', borderRadius: 8 }}
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="mx-auto"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          gap: '24px'
        }}
      >
        <Nav.Link href="#home" style={{ color: '#fff', fontWeight: 500 }}>Home</Nav.Link>
        <Nav.Link href="#Buy" style={{ color: '#fff', fontWeight: 500 }}>Buy</Nav.Link>
        <Nav.Link href="#Rent" style={{ color: '#fff', fontWeight: 500 }}>Rent</Nav.Link>
        <Nav.Link href="#Devlopers" style={{ color: '#fff', fontWeight: 500 }}>Developers</Nav.Link>
        <Nav.Link href="#OffplanProjects" style={{ color: '#fff', fontWeight: 500 }}>Offplan Projects</Nav.Link>
        <Nav.Link href="#About" style={{ color: '#fff', fontWeight: 500 }}>About</Nav.Link>
        <Nav.Link href="#Careers" style={{ color: '#fff', fontWeight: 500 }}>Careers</Nav.Link>
        <Nav.Link href="#ContactUs" style={{ color: '#fff', fontWeight: 500 }}>Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      {/* Hero Section with Search */}
      <section
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            color: '#fff',
            padding: '80px 0',
            textAlign: 'center',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        <div>
            <h1>Find Your Dream Home</h1>
            <p>Pure Home Real Estate - Your Trusted Partner in Abu Dhabi</p>
            <input type="text" placeholder="Search properties..." style={{ padding: '10px', width: '300px',background: "white", border:"2px solid white", borderRadius:"50px", color:"black" }} />
            <button style={{ marginLeft: '10px', padding: '10px 20px', background:"none", border:"2px solid white", borderRadius:"50px", color:"white" }}>Search</button>
        </div>
       </section>

      
        {/* Our Clients Section */}
        <section
            style={{
    background: 'linear-gradient(135deg, #e3f0ff 60%, #f8fafc 100%)',
                padding: '60px 0',
                textAlign: 'center',
                borderRadius: '16px',
                margin: '40px 24px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            }}
            >
            <h2 style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: 10, color: '#1a237e' }}>
                Our Clients
            </h2>
            <p style={{ color: '#374151', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 32px auto' }}>
                We are proud to have worked with some of the most reputable organizations and individuals in the region.
                Their trust drives us to deliver exceptional service every day.
            </p>
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '48px',
                flexWrap: 'wrap',
                marginTop: '30px',
                }}
            >
                <img
                src={EmaarImage}
                alt="Client 1"
                style={{
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s, transform 0.3s',
                    borderRadius: '8px',
                    background: '#fff',
                    padding: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                }}
                onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                <img
                src={AljiImage}
                alt="Client 2"
                style={{
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s, transform 0.3s',
                    borderRadius: '8px',
                    background: '#fff',
                    padding: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                }}
                onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                <img
                src={DubaiProperties}
                alt="Client 3"
                style={{
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s, transform 0.3s',
                    borderRadius: '8px',
                    background: '#fff',
                    padding: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                }}
                onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                <img
                src={EagleHills}
                alt="Client 4"
                style={{
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s, transform 0.3s',
                    borderRadius: '8px',
                    background: '#fff',
                    padding: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                }}
                onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                 <img
                src={Bloom}
                alt="Client 4"
                style={{
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s, transform 0.3s',
                    borderRadius: '8px',
                    background: '#fff',
                    padding: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                }}
                onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                 <img
                src={Samana}
                alt="Client 4"
                style={{
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s, transform 0.3s',
                    borderRadius: '8px',
                    background: '#fff',
                    padding: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                }}
                onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                 <img
                src={Baraka}
                alt="Client 4"
                style={{
                    height: '100px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    transition: 'filter 0.3s, transform 0.3s',
                    borderRadius: '8px',
                    background: '#fff',
                    padding: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    cursor: 'pointer',
                }}
                onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
                onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
                />
                {/* Add more logos as needed */}
            </div>
            </section>
        {/* Featured Properties */}
        <section style={{
    background: 'linear-gradient(135deg, #e3f0ff 60%, #f8fafc 100%)',
  padding: '60px 0',
  borderRadius: '16px',
  margin: '40px 24px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
}}>
  <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '2.2rem', color: '#1a237e', marginBottom: 10 }}>
    Featured Properties
  </h2>
  <p style={{ color: '#374151', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 32px auto', textAlign: 'center' }}>
    Explore our handpicked selection of properties with the best value and locations in Abu Dhabi.
  </p>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '32px',
    margin: '40px 0',
    justifyItems: 'center'
  }}>
    {/* Property Card 1 */}
    <div style={{
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(30, 64, 175, 0.08)',
  overflow: 'hidden',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
  width: '340px',           // Fixed width
  height: '420px',          // Fixed height
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto'
}}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(30, 64, 175, 0.15)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = '0 4px 16px rgba(30, 64, 175, 0.08)';
  }}
>
  <img src={Apartment1} alt="Luxury Apartment" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div>
      <h3 style={{ color: '#1a237e', fontWeight: 600 }}>Luxury Apartment</h3>
      <p style={{ color: '#374151', margin: '12px 0' }}>Downtown Abu Dhabi</p>
      <p style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.2rem' }}>AED 1,200,000</p>
    </div>
    <button style={{
      background: 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '10px 24px',
      fontWeight: 600,
      marginTop: '10px',
      cursor: 'pointer',
      transition: 'background 0.2s'
    }}>View Details</button>
  </div>
</div>
    {/* Property Card 2 */}
    <div style={{
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(30, 64, 175, 0.08)',
  overflow: 'hidden',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
  width: '340px',           // Fixed width
  height: '420px',          // Fixed height
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto'
}}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(30, 64, 175, 0.15)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = '0 4px 16px rgba(30, 64, 175, 0.08)';
  }}
>
  <img src={Apartment2} alt="Luxury Apartment" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div>
      <h3 style={{ color: '#1a237e', fontWeight: 600 }}>Luxury Apartment</h3>
      <p style={{ color: '#374151', margin: '12px 0' }}>Downtown Abu Dhabi</p>
      <p style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.2rem' }}>AED 1,200,000</p>
    </div>
    <button style={{
      background: 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '10px 24px',
      fontWeight: 600,
      marginTop: '10px',
      cursor: 'pointer',
      transition: 'background 0.2s'
    }}>View Details</button>
  </div>
</div>
    {/* Property Card 3 */}
    <div style={{
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 16px rgba(30, 64, 175, 0.08)',
  overflow: 'hidden',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
  width: '340px',           // Fixed width
  height: '420px',          // Fixed height
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto'
}}
  onMouseOver={e => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(30, 64, 175, 0.15)';
  }}
  onMouseOut={e => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.boxShadow = '0 4px 16px rgba(30, 64, 175, 0.08)';
  }}
>
  <img src={Apartment3} alt="Luxury Apartment" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div>
      <h3 style={{ color: '#1a237e', fontWeight: 600 }}>Luxury Apartment</h3>
      <p style={{ color: '#374151', margin: '12px 0' }}>Downtown Abu Dhabi</p>
      <p style={{ color: '#1976d2', fontWeight: 700, fontSize: '1.2rem' }}>AED 1,200,000</p>
    </div>
    <button style={{
      background: 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      padding: '10px 24px',
      fontWeight: 600,
      marginTop: '10px',
      cursor: 'pointer',
      transition: 'background 0.2s'
    }}>View Details</button>
  </div>
</div>
    {/* Add more property cards as needed */}
  </div>
</section>
        {/* Testimonial Section */}
        <section
  style={{
    background: 'linear-gradient(135deg, #e3f0ff 60%, #f8fafc 100%)',
    padding: '60px 0',
    borderRadius: '16px',
    margin: '40px 24px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
    textAlign: 'center'
  }}
>
  <h2 style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: 10, color: '#1a237e' }}>
    Client Feedback
  </h2>
  <p style={{ color: '#374151', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto 32px auto' }}>
    Hear what our clients have to say about their experience with Pure Home Real Estate.
  </p>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '32px',
    margin: '40px 0',
    padding: '20px',
    justifyItems: 'center'
  }}>
    {/* Testimonial 1 */}
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(30, 64, 175, 0.08)',
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '260px'
    }}>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: 16, objectFit: 'cover' }} />
      <p style={{ color: '#374151', fontStyle: 'italic', marginBottom: 16 }}>
        "Pure Home made my first home purchase smooth and stress-free. Their team is knowledgeable and always available!"
      </p>
      <span style={{ color: '#1a237e', fontWeight: 600 }}>— Ahmed Al Mansoori</span>
    </div>
    {/* Testimonial 2 */}
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(30, 64, 175, 0.08)',
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '240px'
    }}>
      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: 16, objectFit: 'cover' }} />
      <p style={{ color: '#374151', fontStyle: 'italic', marginBottom: 16 }}>
        "Excellent service and a wide range of properties. I found my dream apartment thanks to Pure Home!"
      </p>
      <span style={{ color: '#1a237e', fontWeight: 600 }}>— Fatima Al Suwaidi</span>
    </div>
    {/* Testimonial 3 */}
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(30, 64, 175, 0.08)',
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '260px'
    }}>
      <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Client" style={{ width: 64, height: 64, borderRadius: '50%', marginBottom: 16, objectFit: 'cover' }} />
      <p style={{ color: '#374151', fontStyle: 'italic', marginBottom: 16 }}>
        "Professional, transparent, and reliable. I highly recommend Pure Home Real Estate to anyone looking to buy or rent."
      </p>
      <span style={{ color: '#1a237e', fontWeight: 600 }}>— Khalid Al Jaberi</span>
    </div>
    
  </div>
</section>
      

      {/* Contact Section */}
      <section style={{
    background: 'linear-gradient(135deg, #e3f0ff 60%, #f8fafc 100%)',
  padding: '60px 0',
  borderRadius: '16px',
  margin: '40px 24px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
  textAlign: 'center'
}}>
  <h2 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#1a237e', marginBottom: 10 }}>
    Contact Us
  </h2>
  <p style={{ color: '#374151', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto 32px auto' }}>
    Ready to start your journey? Get in touch today and our team will respond as soon as possible.
  </p>
  <form style={{
    display: 'inline-block',
    background: '#fff',
    padding: '32px 32px 24px 32px',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(30, 64, 175, 0.06)',
    minWidth: 320,
    maxWidth: 400
  }}>
    <input
      type="text"
      placeholder="Your Name"
      style={{
        padding: '12px',
        marginBottom: '16px',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #cfd8dc',
        fontSize: '1rem'
      }}
      required
    />
    <input
      type="email"
      placeholder="Your Email"
      style={{
        padding: '12px',
        marginBottom: '16px',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #cfd8dc',
        fontSize: '1rem'
      }}
      required
    />
    <textarea
      placeholder="Your Message"
      rows={4}
      style={{
        padding: '12px',
        marginBottom: '20px',
        width: '100%',
        borderRadius: '6px',
        border: '1px solid #cfd8dc',
        fontSize: '1rem',
        resize: 'vertical'
      }}
      required
    />
    <button
      type="submit"
      style={{
        background: 'linear-gradient(90deg, #1976d2 60%, #64b5f6 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        padding: '12px 32px',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.2s'
      }}
    >
      Send Message
    </button>
  </form>
</section>

      {/* Footer */}
      <footer style={{ background: 'white', color: '#222', padding: '20px 0', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Pure Home Real Estate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;