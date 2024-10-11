import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

// Blog Component
const Blog = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, text: "This library has changed the way I read books!" },
    {
      id: 2,
      text: "Amazing collection of resources and an easy-to-use platform.",
    },
  ]);

  const [videos, setVideos] = useState([
    { id: 1, src: "https://www.youtube.com/embed/VF0W7vS4mR8" },
    { id: 2, src: "https://www.youtube.com/embed/zxad63kl87g" },
    { id: 3, src: "https://www.youtube.com/embed/dkwp1bGNu2Q" },
  ]);

  const [newTestimonial, setNewTestimonial] = useState("");
  const [newVideo, setNewVideo] = useState("");

  // Function to handle adding a new testimonial
  const handleAddTestimonial = () => {
    if (newTestimonial.trim()) {
      setTestimonials([
        ...testimonials,
        { id: testimonials.length + 1, text: newTestimonial },
      ]);
      setNewTestimonial("");
      alert("New comment added successfully!");
    } else {
      alert("Please enter a valid comment.");
    }
  };

  // Function to handle adding a new video
  const handleAddVideo = () => {
    const embedUrl = newVideo.replace("watch?v=", "embed/");
    if (embedUrl.trim()) {
      setVideos([...videos, { id: videos.length + 1, src: embedUrl }]);
      setNewVideo("");
      alert("New video added successfully!");
    } else {
      alert("Please enter a valid video URL.");
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      {/* Blog Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Welcome to Our Blog
        </h2>
        <p className="text-lg text-gray-700">
          Discover insightful articles, latest news, and helpful resources to
          enrich your reading experience. Stay updated with our newest blog
          posts, videos, and comments from our readers.
        </p>
      </div>

      {/* Videos Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">
          Our Latest Videos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                width="100%"
                height="200"
                src={video.src}
                title={`Video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* Add New Video Input */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Add YouTube Video URL"
            value={newVideo}
            onChange={(e) => setNewVideo(e.target.value)}
            className="border border-gray-400 p-2 rounded-md w-1/2"
          />
          <button
            onClick={handleAddVideo}
            className="ml-4 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Video
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-800 mb-6">
          What People Are Saying
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        {/* Add New Testimonial Input */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Add Comment"
            value={newTestimonial}
            onChange={(e) => setNewTestimonial(e.target.value)}
            className="border border-gray-400 p-2 rounded-md w-1/2"
          />
          <button
            onClick={handleAddTestimonial}
            className="ml-4 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Comment
          </button>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="text-center">
        <Link
          to="/"
          className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Blog;
