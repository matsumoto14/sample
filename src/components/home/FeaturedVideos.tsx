"use client";

import Link from "next/link";
import Image from "next/image";
import { VideoCard } from "@/components/videos/VideoCard";

// Mock data for featured videos
const featuredVideos = [
  {
    id: "1",
    title: "Advanced Cinematography Techniques",
    description:
      "Learn professional cinematography techniques used in Hollywood productions.",
    thumbnail: "/images/video1.jpg",
    duration: "45:18",
    price: 29.99,
    instructor: "Michael Johnson",
    category: "Filmmaking",
    featured: true,
  },
  {
    id: "2",
    title: "Digital Marketing Masterclass",
    description: "Complete guide to digital marketing strategies for 2025.",
    thumbnail: "/images/video2.jpg",
    duration: "3:15:45",
    price: 49.99,
    instructor: "Sarah Williams",
    category: "Marketing",
    featured: true,
  },
  {
    id: "3",
    title: "Web Development with Next.js",
    description: "Build modern, SEO-friendly websites with Next.js and React.",
    thumbnail: "/images/video3.jpg",
    duration: "5:30:20",
    price: 39.99,
    instructor: "David Chen",
    category: "Programming",
    featured: true,
  },
  {
    id: "4",
    title: "Financial Planning for Beginners",
    description: "Essential financial planning concepts for a secure future.",
    thumbnail: "/images/video4.jpg",
    duration: "2:10:15",
    price: 24.99,
    instructor: "Emily Rodriguez",
    category: "Finance",
    featured: true,
  },
];

export function FeaturedVideos() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
