import React from 'react';
import "./aboutUs.css";



export default function AboutUsComponent() {
  return (
    <div className="about-us-container">
      <h1>About Us:</h1>
      <p>Welcome to our finances management website! We are a team of experienced financial experts who have come together to provide a comprehensive and user-friendly platform for managing your finances.</p>
      <p>Our website offers a range of tools and features that can help you to manage your money effectively. You can track your expenses, set budgets, and receive personalized financial advice based on your spending habits.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to empower individuals and families to take control of their finances and achieve their financial goals.</p>
      <p>We believe that everyone deserves access to reliable financial information and resources, and we strive to provide a platform that is accessible, intuitive, and easy to use.</p>

      <h2>Meet the Team:</h2>
      <div className="team-container">
        <div className="team-member">
          <img src='src\ben.jpeg' alt="Team Member 1" />
          <h3>Ben Shermister</h3>
          <p>Financial Analyst</p>
        </div>
        <div className="team-member">
          <img src="src\shlomo.jpeg" alt="Team Member 2" />
          <h3>Shlomo Esayas</h3>
          <p>Software Developer</p>
        </div>
      </div>
      <h2>Contact Us:</h2>
      <p>If you have any questions, feedback, or suggestions for how we can improve our website, please don't hesitate to contact us.</p>
      <p>You can reach us by email at info@financesmanagement.com.</p>
    </div>
  );
}
