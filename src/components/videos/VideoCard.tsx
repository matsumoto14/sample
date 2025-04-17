"use client";

import Link from "next/link";
import Image from "next/image";

interface VideoProps {
  video: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    price: number;
    instructor: string;
    category: string;
    featured?: boolean;
  };
}

export function VideoCard({ video }: VideoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-video">
        {/* In a real app, this would use next/image with actual images */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-lg font-semibold">
          {video.title.substring(0, 1)}
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold line-clamp-2">
            <Link
              href={`/videos/${video.id}`}
              className="hover:text-primary-600"
            >
              {video.title}
            </Link>
          </h3>
          <span className="text-primary-600 font-bold">${video.price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {video.description}
        </p>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">{video.instructor}</span>
          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
            {video.category}
          </span>
        </div>

        <div className="mt-4 flex space-x-2">
          <Link
            href={`/videos/${video.id}`}
            className="btn-outline text-sm py-1 px-3 flex-1 text-center"
          >
            Preview
          </Link>
          <button className="btn-primary text-sm py-1 px-3 flex-1">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
