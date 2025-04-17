import Link from "next/link";
import Image from "next/image";
import { FeaturedVideos } from "@/components/home/FeaturedVideos";
import { NewReleases } from "@/components/home/NewReleases";
import { SubscriptionPlans } from "@/components/home/SubscriptionPlans";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Premium Video Content
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Access exclusive tutorials, courses, and entertainment videos with
            our subscription plans or purchase individual videos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/videos" className="btn-primary px-8 py-3 text-lg">
              Browse Videos
            </Link>
            <Link
              href="/subscription"
              className="btn-outline px-8 py-3 text-lg bg-white/10 text-white border-white"
            >
              View Plans
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          {/* This would be replaced with an actual image in production */}
          <div className="w-full h-full bg-gradient-to-br from-primary-700 to-primary-900" />
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Videos</h2>
          <Link href="/videos" className="text-primary-600 hover:underline">
            View All
          </Link>
        </div>
        <FeaturedVideos />
      </section>

      {/* New Releases Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">New Releases</h2>
          <Link href="/videos/new" className="text-primary-600 hover:underline">
            View All
          </Link>
        </div>
        <NewReleases />
      </section>

      {/* Subscription Plans Section */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Subscription Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include access to
            our growing library of content with new videos added regularly.
          </p>
        </div>
        <SubscriptionPlans />
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What Our Subscribers Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-gray-600">Premium Subscriber</p>
              </div>
            </div>
            <p className="text-gray-700">
              "The quality of content is exceptional. I've learned so much from
              the tutorials and the monthly subscription is definitely worth
              it."
            </p>
            <div className="flex text-yellow-400 mt-3">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm text-gray-600">Basic Subscriber</p>
              </div>
            </div>
            <p className="text-gray-700">
              "Great platform for both entertainment and educational content.
              The interface is intuitive and the video quality is top-notch."
            </p>
            <div className="flex text-yellow-400 mt-3">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h4 className="font-semibold">Emily Rodriguez</h4>
                <p className="text-sm text-gray-600">Pro Subscriber</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I love the exclusive content available in the Pro plan. The
              downloadable resources and community access make it even better."
            </p>
            <div className="flex text-yellow-400 mt-3">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
