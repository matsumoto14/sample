"use client";

import Link from "next/link";

// Mock data for subscription plans
const subscriptionPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 9.99,
    period: "month",
    features: [
      "Access to 100+ videos",
      "New videos every month",
      "Watch on mobile and desktop",
      "720p video quality",
    ],
    popular: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: 19.99,
    period: "month",
    features: [
      "Access to 500+ videos",
      "New videos every week",
      "Watch on all devices",
      "1080p video quality",
      "Download videos for offline viewing",
      "Priority customer support",
    ],
    popular: true,
  },
  {
    id: "pro",
    name: "Professional",
    price: 29.99,
    period: "month",
    features: [
      "Access to all videos",
      "New videos every day",
      "Watch on all devices",
      "4K video quality",
      "Download videos for offline viewing",
      "Priority customer support",
      "Exclusive webinars and live events",
      "1-on-1 consultation sessions",
    ],
    popular: false,
  },
];

export function SubscriptionPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {subscriptionPlans.map((plan) => (
        <div
          key={plan.id}
          className={`subscription-card ${
            plan.popular ? "subscription-card-featured" : ""
          }`}
        >
          {plan.popular && (
            <div className="bg-primary-600 text-white text-center py-1 text-sm font-semibold">
              Most Popular
            </div>
          )}

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

            <div className="mb-4">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>

            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-primary-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/subscription/${plan.id}`}
              className={`block text-center py-2 px-4 rounded-md transition-colors duration-200 ${
                plan.popular
                  ? "bg-primary-600 hover:bg-primary-700 text-white"
                  : "bg-white border border-primary-600 text-primary-600 hover:bg-primary-50"
              }`}
            >
              Choose Plan
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
