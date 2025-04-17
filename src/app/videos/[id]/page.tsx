import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// This would normally come from a database
const getVideoById = (id: string) => {
  // Combine featured videos and new releases for demo purposes
  const allVideos = [
    {
      id: "1",
      title: "Advanced Cinematography Techniques",
      description:
        "Learn professional cinematography techniques used in Hollywood productions. This comprehensive course covers lighting, camera movement, composition, and more. Perfect for filmmakers looking to elevate their visual storytelling.",
      thumbnail: "/images/video1.jpg",
      duration: "45:18",
      price: 29.99,
      instructor: "Michael Johnson",
      category: "Filmmaking",
      featured: true,
      chapters: [
        { title: "Introduction to Cinematography", duration: "5:20" },
        { title: "Lighting Fundamentals", duration: "10:15" },
        { title: "Camera Movement Techniques", duration: "8:45" },
        { title: "Composition and Framing", duration: "12:30" },
        { title: "Advanced Color Theory", duration: "8:28" },
      ],
    },
    {
      id: "2",
      title: "Digital Marketing Masterclass",
      description:
        "Complete guide to digital marketing strategies for 2025. Learn SEO, social media marketing, email campaigns, content marketing, and analytics to grow your business online.",
      thumbnail: "/images/video2.jpg",
      duration: "3:15:45",
      price: 49.99,
      instructor: "Sarah Williams",
      category: "Marketing",
      featured: true,
      chapters: [
        { title: "Digital Marketing Overview", duration: "15:20" },
        { title: "SEO Fundamentals", duration: "45:15" },
        { title: "Social Media Strategy", duration: "38:45" },
        { title: "Email Marketing", duration: "32:30" },
        { title: "Analytics and Optimization", duration: "28:28" },
      ],
    },
    // More videos would be here
  ];

  return allVideos.find((video) => video.id === id);
};

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = getVideoById(params.id);

  if (!video) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Video Preview and Details */}
        <div className="lg:col-span-2">
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-lg font-semibold">Preview Available</p>
                <p className="text-sm text-gray-300">
                  Purchase this video to watch the full content
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-4">{video.title}</h1>

          <div className="flex items-center mb-4 text-sm text-gray-600">
            <span className="mr-4">
              <span className="font-semibold">Instructor:</span>{" "}
              {video.instructor}
            </span>
            <span className="mr-4">
              <span className="font-semibold">Duration:</span> {video.duration}
            </span>
            <span>
              <span className="font-semibold">Category:</span> {video.category}
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{video.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Chapters</h2>
            <div className="space-y-3">
              {video.chapters.map((chapter, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-gray-50 rounded-md"
                >
                  <div className="flex items-center">
                    <span className="text-primary-600 font-semibold mr-3">
                      {index + 1}
                    </span>
                    <span>{chapter.title}</span>
                  </div>
                  <span className="text-gray-500">{chapter.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Purchase Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold mb-2">${video.price}</div>
              <div className="text-sm text-gray-600">One-time purchase</div>
            </div>

            <div className="space-y-4 mb-6">
              <button className="btn-primary w-full py-3">Buy Now</button>
              <button className="btn-outline w-full py-3">Add to Cart</button>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">This purchase includes:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
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
                  Full lifetime access
                </li>
                <li className="flex items-center">
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
                  Access on mobile and TV
                </li>
                <li className="flex items-center">
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
                  Downloadable resources
                </li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Not satisfied? We offer a
              </p>
              <p className="font-semibold">30-Day Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
