import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const PlansPage = () => {
  const plans = [
    {
      name: "Free",
      price: "Always",
      description: "Start exploring Ye-Buna features.",
      features: [
        "Get tips from your community",
        "List limited digital products",
        "Participate in bounty programs",
        "Connect social profiles & links",
        "24/7 chat & email support",
      ],
      buttonText: "Start Free",
      bgColor: "bg-white",
      buttonClass: "btn-primary",
    },
    {
      name: "Pro",
      price: "2999 ETB / Year",
      description: "Premium experience with maximum exposure.",
      features: [
        "Verified badge on profile & products",
        "Promote products on Ye-Buna",
        "List unlimited digital & physical products",
        "Launch crowdfunding campaigns",
        "Manage subscriptions & recurring revenue",
        "Create your online community (Club)",
      ],
      buttonText: "Upgrade to Pro",
      bgColor: "bg-light",
      buttonClass: "btn-success",
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "Enterprise features for businesses.",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom integrations & APIs",
        "Team management tools",
        "Priority support",
      ],
      buttonText: "Contact Sales",
      bgColor: "bg-secondary text-white",
      buttonClass: "btn-warning",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3">Choose Your Plan</h1>
      <p className="text-center text-muted mb-5">
        Enjoy the free and premium experience of Ye-Buna.
      </p>

      <div className="row justify-content-center g-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4">
            <div className={`card h-100 ${plan.bgColor} shadow-sm`}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{plan.name}</h5>
                <h6 className="card-subtitle mb-3 text-center text-muted">{plan.price}</h6>
                <p className="card-text text-center">{plan.description}</p>

                <ul className="list-unstyled flex-grow-1 mb-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-1 d-flex align-items-center">
                      <FaCheckCircle className="text-success me-2" /> {feature}
                    </li>
                  ))}
                </ul>

                <button className={`btn ${plan.buttonClass} mt-auto`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
