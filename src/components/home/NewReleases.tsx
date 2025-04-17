"use client";

import Link from "next/link";
import { VideoCard } from "@/components/videos/VideoCard";

// Mock data for new releases
const newReleases = [
  {
    id: "5",
    title: "Machine Learning Fundamentals",
    description:
      "Introduction to machine learning concepts and practical applications.",
    thumbnail: "/images/video5.jpg",
    duration: "4:25:10",
    price: 44.99,
    instructor: "Alex Thompson",
    category: "Data Science",
    featured: false,
  },
  {
    id: "6",
    title: "Creative Writing Workshop",
    description:
      "Develop your creative writing skills with practical exercises and feedback.",
    thumbnail: "/images/video6.jpg",
    duration: "3:45:30",
    price: 19.99,
    instructor: "Jessica Miller",
    category: "Writing",
    featured: false,
  },
  {
    id: "7",
    title: "Mobile App Development with Flutter",
    description: "Build cross-platform mobile apps with Flutter and Dart.",
    thumbnail: "/images/video7.jpg",
    duration: "6:15:45",
    price: 34.99,
    instructor: "Robert Kim",
    category: "Programming",
    featured: false,
  },
  {
    id: "8",
    title: "Photography Masterclass",
    description:
      "Learn professional photography techniques for stunning images.",
    thumbnail: "/images/video8.jpg",
    duration: "5:10:20",
    price: 29.99,
    instructor: "Lisa Wang",
    category: "Photography",
    featured: false,
  },
];

export function NewReleases() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {newReleases.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
