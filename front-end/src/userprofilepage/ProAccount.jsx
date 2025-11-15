import React from "react";

const PlansPage = () => {
  const plans = [
    {
      name: "Free",
      price: "Always",
      description: "A perfect start for individuals to explore Ye-Buna's features.",
      features: [
        "Get tips from your community",
        "List limited digital products",
        "Participate in bounty programs",
        "Connect all your social media profiles and key links in one place",
        "24/7 chat and email support with 1 hour response time",
      ],
      buttonText: "Start Free",
      buttonClass: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Pro",
      price: "2999 ETB / Year",
      description: "For 1 year premium experience on Ye-Buna seeking maximum exposure.",
      features: [
        "Display a verified badge on profile and products",
        "Get tips from your community",
        "Promote your products directly on Ye-Buna official site",
        "List unlimited digital and physical products",
        "Launch and manage your own crowdfunding campaigns",
        "Manage subscription plans for recurring revenue",
        "Explore freelancing opportunities",
        "Create your own online community (Club)",
        "Connect all social media profiles and key links",
        "Unlock premium features exclusive to members",
        "Priority email and telegram support within 24 hours",
      ],
      buttonText: "Upgrade to Pro",
      buttonClass: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "For businesses seeking maximum exposure and enterprise features.",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Custom integrations and APIs",
        "Team management tools",
        "Priority support via chat, email, and phone",
      ],
      buttonText: "Contact Sales",
      buttonClass: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Choose The Offer That Suits You
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        Enjoy the free and premium experience of ye-buna.com
      </p>

      {/* Flex container for cards */}
      <div className="flex space-x-6 overflow-x-auto pb-4 d-flex">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg p-6 flex m-3  flex-col justify-between m-3 hover:scale-105 transition-transform duration-200"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-gray-500 mb-4">{plan.price}</p>
              <p className="mb-4">{plan.description}</p>

              <ul className="mb-4 list-disc list-inside space-y-1 text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-auto w-full ${plan.buttonClass} text-white py-3 rounded-lg font-semibold`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
