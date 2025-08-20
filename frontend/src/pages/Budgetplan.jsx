
const PlanCard = ({ title, price, features, isPopular, starColor }) => (
  <div className="relative">
    {isPopular && (
      <span className="absolute text-center  -top-5 left-1/2 transform w-full py-2 -translate-x-1/2 bg-black text-white min-w-fit text-xs px-2  rounded-t-lg">
        Popular
      </span>
    )}
    <div className="bg-white p-6 rounded-lg shadow-lg w-72 h-full  border border-gray-100 mt-2">
        < div className="border-1 border-red-400">
      <div className="flex justify-start gap-1 items-center  my-4">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  class={`w-6 h-6 text-${starColor}-400 fill-current`}>
            <path d="M12 2.5l2.98 6.04 6.67.97-4.82 4.7 1.14 6.64L12 17.98 
                6.03 20.85l1.14-6.64L2.35 9.51l6.67-.97L12 2.5z"/>
        </svg>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>
        <div className="mb-6 mx-2">
            <p className="text-2xl font-bold text-gray-900 ">${price}</p>
            <span className="text-sm font-normal  text-gray-600">per month</span>
        </div>
   
      <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg mb-4 hover:bg-gray-300 transition-colors">
        Upgrade
      </button>
      </ div>
      <ul className="text-sm font-medium space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-gray-700 font-bold text-lg mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const PlansComponent = () => {
  const plans = [
    {
      title: "Hobby",
      price: 40,
      features: [
        "Everything in Free +",
        "Access to advanced models",
        "2,000 message credits/month",
        "1 AI agent",
        "5 AI Actions per AI agent",
        "33 MB per AI agent",
        "Unlimited links to train on",
        "API access",
        "Integrations"
      ],
      isPopular: false,
      starColor: "yellow"
    },
    {
      title: "Standard",
      price: 150,
      features: [
        "Everything in Hobby +",
        "12,000 message credits/month",
        "10 AI Actions per AI agent",
        "3 seats",
        "2 AI agents"
      ],
      isPopular: true,
      starColor: "red"
    },
    {
      title: "Pro",
      price: 500,
      features: [
        "Everything in Standard +",
        "40,000 message credits/month",
        "15 AI Actions per AI agent",
        "5+ seats",
        "3 AI agents",
        "Advanced analytics"
      ],
      isPopular: false,
      starColor: "yellow"
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto shadow-lg bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold text-gray-900">Upgrade your plan to use this feature</h2>
      </div>

      <p className="text-gray-500 text-sm mb-6">Unlock AI Actions by subscribing to one of these plans</p>
      <div className="flex justify-center items-center mb-6">
        <button className="bg-white text-gray-700 px-4 py-2 rounded-l-md border border-gray-300">Monthly</button>
        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-r-md border border-gray-300 border-l-0">Yearly</button>
      </div>
      <div className="flex justify-center">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PlansComponent;





// import React, { useState } from 'react';

// const PlansComponent = ({ isOpen, onClose }) => {
//   const plans = [
//     {
//       title: "Hobby",
//       price: 40,
//       features: [
//         "Everything in Free +",
//         "Access to advanced models",
//         "2,000 message credits/month",
//         "1 AI agent",
//         "5 AI Actions per AI agent",
//         "33 MB per AI agent",
//         "Unlimited links to train on",
//         "API access",
//         "Integrations"
//       ],
//       isPopular: false
//     },
//     {
//       title: "Standard",
//       price: 150,
//       features: [
//         "Everything in Hobby +",
//         "12,000 message credits/month",
//         "10 AI Actions per AI agent",
//         "3 seats",
//         "2 AI agents"
//       ],
//       isPopular: true
//     },
//     {
//       title: "Pro",
//       price: 500,
//       features: [
//         "Everything in Standard +",
//         "40,000 message credits/month",
//         "15 AI Actions per AI agent",
//         "5+ seats",
//         "3 AI agents",
//         "Advanced analytics"
//       ],
//       isPopular: false
//     }
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-gray-50 p-6 max-w-4xl rounded-lg shadow-lg">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-xl font-bold text-gray-900">Available actions</h2>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
//           >
//             &times;
//           </button>
//         </div>
//         <p className="text-gray-500 text-sm mb-4">Upgrade your plan to use this feature</p>
//         <p className="text-gray-500 text-sm mb-6">Unlock AI Actions by subscribing to one of these plans</p>
//         <div className="flex justify-center items-center mb-6">
//           <button className="bg-white text-gray-700 px-4 py-2 rounded-l-md border border-gray-300">
//             Monthly
//           </button>
//           <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-r-md border border-gray-300 border-l-0">
//             Yearly
//           </button>
//         </div>
//         <div className="flex justify-center space-x-4">
//           {plans.map((plan, index) => (
//             <PlanCard key={index} {...plan} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlansComponent;