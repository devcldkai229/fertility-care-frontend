import type React from "react";

interface TestimonialCardProps {
  name: string;
  service: string;
  testimonial: string;
  avatar: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  service,
  testimonial,
  avatar,
  rating,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col">
      <div className="flex flex-col items-center text-center flex-grow">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-6">
          <img
            src={avatar || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-800">{name}</h3>

        <p className="text-purple-500 font-medium mb-6">{service}</p>

        <blockquote className="text-gray-600 italic mb-6 text-center leading-relaxed flex-grow">
          "{testimonial}"
        </blockquote>

        <div className="flex items-center justify-center mt-auto">
          {[...Array(rating)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
