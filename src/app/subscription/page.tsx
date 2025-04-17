import Link from "next/link";
import { Metadata } from "next";
import { SubscriptionPlans } from "@/components/home/SubscriptionPlans";

export const metadata: Metadata = {
  title: "Subscription Plans | VideoHub",
  description:
    "Choose the perfect subscription plan for your video content needs",
};

export default function SubscriptionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get unlimited access to our growing library of premium video content
          with a subscription plan that fits your needs.
        </p>
      </div>

      <SubscriptionPlans />

      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              What's included in my subscription?
            </h3>
            <p className="text-gray-700">
              Your subscription gives you unlimited access to our entire library
              of videos, depending on your plan level. You can watch on any
              device, anytime, anywhere. Some plans also include downloadable
              resources, priority support, and exclusive content.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Can I cancel my subscription anytime?
            </h3>
            <p className="text-gray-700">
              Yes, you can cancel your subscription at any time. Your
              subscription will remain active until the end of your current
              billing period, and you won't be charged again after that.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              How do I change my subscription plan?
            </h3>
            <p className="text-gray-700">
              You can upgrade or downgrade your subscription plan at any time
              from your account dashboard. If you upgrade, you'll get immediate
              access to the additional features and content. If you downgrade,
              the changes will take effect at the start of your next billing
              cycle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Is there a free trial available?
            </h3>
            <p className="text-gray-700">
              Yes, we offer a 7-day free trial for new subscribers. You'll need
              to provide payment information to start the trial, but you won't
              be charged until the trial period ends. You can cancel anytime
              during the trial period.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Can I share my subscription with others?
            </h3>
            <p className="text-gray-700">
              Our subscription plans are for individual use only and should not
              be shared. We offer special team and enterprise plans for
              organizations that need multiple user access. Please contact our
              sales team for more information.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6">
          Our support team is here to help you with any questions you may have.
        </p>
        <Link
          href="/contact"
          className="btn-primary inline-block px-8 py-3 text-lg"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
