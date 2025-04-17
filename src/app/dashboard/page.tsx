import Link from "next/link";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | VideoHub",
  description: "Manage your videos and subscription",
};

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  subscription: {
    plan: "Premium",
    status: "Active",
    nextBillingDate: "May 15, 2025",
    price: 19.99,
  },
  purchasedVideos: [
    {
      id: "1",
      title: "Advanced Cinematography Techniques",
      thumbnail: "/images/video1.jpg",
      purchaseDate: "April 2, 2025",
      lastWatched: "April 10, 2025",
      progress: 75,
    },
    {
      id: "3",
      title: "Web Development with Next.js",
      thumbnail: "/images/video3.jpg",
      purchaseDate: "March 15, 2025",
      lastWatched: "April 12, 2025",
      progress: 40,
    },
  ],
  watchHistory: [
    {
      id: "1",
      title: "Advanced Cinematography Techniques",
      thumbnail: "/images/video1.jpg",
      watchedOn: "April 10, 2025",
      duration: "45:18",
      progress: 75,
    },
    {
      id: "3",
      title: "Web Development with Next.js",
      thumbnail: "/images/video3.jpg",
      watchedOn: "April 12, 2025",
      duration: "5:30:20",
      progress: 40,
    },
    {
      id: "2",
      title: "Digital Marketing Masterclass",
      thumbnail: "/images/video2.jpg",
      watchedOn: "April 5, 2025",
      duration: "3:15:45",
      progress: 100,
    },
  ],
};

export default function DashboardPage() {
  // In a real app, we would check if the user is authenticated
  // const isAuthenticated = useAuth();
  // if (!isAuthenticated) {
  //   redirect('/login');
  // }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

      {/* User Profile Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {userData.name.substring(0, 1)}
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>
          <div className="ml-auto">
            <Link
              href="/dashboard/settings"
              className="btn-outline text-sm py-1 px-4"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Subscription</h2>
          <Link
            href="/subscription"
            className="text-primary-600 hover:underline text-sm"
          >
            Manage Subscription
          </Link>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <div className="border rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Current Plan</div>
              <div className="font-semibold">{userData.subscription.plan}</div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <div className="border rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Status</div>
              <div className="font-semibold">
                <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                  {userData.subscription.status}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <div className="border rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Next Billing</div>
              <div className="font-semibold">
                ${userData.subscription.price} on{" "}
                {userData.subscription.nextBillingDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchased Videos Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">My Videos</h2>
          <Link
            href="/videos"
            className="text-primary-600 hover:underline text-sm"
          >
            Browse More Videos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userData.purchasedVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative aspect-video bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-lg font-semibold">
                  {video.title.substring(0, 1)}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
                  <div
                    className="h-full bg-primary-600"
                    style={{ width: `${video.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-1">
                  <Link
                    href={`/videos/${video.id}`}
                    className="hover:text-primary-600"
                  >
                    {video.title}
                  </Link>
                </h3>
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span>Purchased: {video.purchaseDate}</span>
                  <span>{video.progress}% complete</span>
                </div>
                <Link
                  href={`/watch/${video.id}`}
                  className="btn-primary text-sm py-1 px-4 w-full block text-center"
                >
                  {video.progress > 0 ? "Continue Watching" : "Start Watching"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Watch History Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Watch History</h2>
          <button className="text-primary-600 hover:underline text-sm">
            Clear History
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Video
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Watched On
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Progress
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {userData.watchHistory.map((item) => (
                <tr key={`${item.id}-${item.watchedOn}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary-100 text-primary-600 flex items-center justify-center rounded mr-3">
                        {item.title.substring(0, 1)}
                      </div>
                      <div className="text-sm font-medium text-gray-900 line-clamp-1">
                        {item.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                    <div className="text-sm text-gray-500">{item.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {item.watchedOn}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary-600 h-2.5 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/watch/${item.id}`}
                      className="text-primary-600 hover:text-primary-900"
                    >
                      Watch
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
