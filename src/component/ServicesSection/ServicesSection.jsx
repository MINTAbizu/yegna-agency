import React from "react";
import { FaBoxOpen, FaDigitalTachograph, FaUsers, FaBullhorn, FaHandshake } from "react-icons/fa";
import "./ServicesSection.css"; // Custom styles

const services = [
  {
    icon: <FaBoxOpen />,
    title: "Physical Product Selling",
    description: "Secure platform to buy and sell high-quality physical products.",
    gradient: "linear-gradient(135deg, #6a11cb, #2575fc)"
  },
  {
    icon: <FaDigitalTachograph />,
    title: "Digital Product Selling",
    description: "Sell digital products like software, eBooks, and courses effortlessly.",
    gradient: "linear-gradient(135deg, #ff758c, #ff7eb3)"
  },
  {
    icon: <FaUsers />,
    title: "Social Media Account Selling",
    description: "Trusted marketplace to buy and sell social media accounts safely.",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
  },
  {
    icon: <FaBullhorn />,
    title: "Event & Product Promotion",
    description: "Promote events and company products efficiently to your target audience.",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)"
  },
  {
    icon: <FaHandshake />,
    title: "Freelancer & Employer Connection",
    description: "Connect securely with trusted freelancers and employers for your projects.",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)"
  },
];

const ServicesSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="service-card text-center p-4 shadow-sm"
                style={{ background: service.gradient }}
              >
                <div className="service-icon">{service.icon}</div>
                <h5 className="card-title mt-3 text-white">{service.title}</h5>
                <p className="card-text text-white-50">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
