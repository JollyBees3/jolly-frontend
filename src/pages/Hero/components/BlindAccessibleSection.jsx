import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../../assets/images/blind.jpg"; // Adjust the path as needed

const BlindAccessibleSection = () => {
  const books = [
    {
      title: "48 Laws of Power",
      description: "A guide to power dynamics and strategy.",
    },
    {
      title: "Be Not Afraid",
      description: "A comforting exploration of overcoming fear.",
    },
    {
      title: "Breath Like Water",
      description: "Insights on mindfulness and breathing techniques.",
    },
    {
      title: "Harry Potter",
      description: "The magical journey of a young wizard.",
    },
    {
      title: "Not About A Boy",
      description: "A deep dive into relationships and identity.",
    },
    {
      title: "The Great Gatsby",
      description: "A classic tale of love and ambition in the Jazz Age.",
    },
    {
      title: "The Alchemist",
      description: "A philosophical tale about pursuing one's dreams.",
    },
    { title: "Twisted Love", description: "A gripping romantic thriller." },
  ];

  const readAloud = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  return (
    <section
      className="py-12 bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center bg-white bg-opacity-70 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Accessible Reading for All</h2>
        <p className="mb-4">
          We are committed to making literature accessible to everyone,
          including those with visual impairments.
        </p>
        <p className="mb-8">
          Click on the volume icon to hear a brief description of each book.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-lg flex items-center"
            >
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-700">{book.description}</p>
              </div>
              <button
                onClick={() => readAloud(book.description)}
                className="ml-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
                aria-label={`Read aloud ${book.title}`}
              >
                <FontAwesomeIcon icon={faVolumeUp} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlindAccessibleSection;
