"use client"

import { FaStar, FaArrowRight } from "react-icons/fa"

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: string
  rating: number
  avatar: string
  availableDays: string[]
}

interface Step3Props {
  doctors: Doctor[]
  selectedDoctor: Doctor | null
  onDoctorSelect: (doctor: Doctor) => void
  onNext: () => void
  isCompleted: boolean
}

export default function Step3DoctorSelection({
  doctors,
  selectedDoctor,
  onDoctorSelect,
  onNext,
  isCompleted,
}: Step3Props) {
  return (
    <section id="select-doctor" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Fertility Specialist</h2>
          <p className="text-lg text-gray-600">
            Our specialists have extensive experience in treatments. Select the doctor you'd like to consult with.
          </p>
        </div>

        <div className="space-y-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`bg-white rounded-lg shadow-md border cursor-pointer transition-all duration-200 hover:shadow-lg p-6 ${
                selectedDoctor?.id === doctor.id ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => onDoctorSelect(doctor)}
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={doctor.avatar || "/placeholder.svg?height=64&width=64"}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      target.nextElementSibling!.classList.remove("hidden")
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold">
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                      <p className="text-gray-600 mt-1">{doctor.experience}</p>
                    </div>
                    <div className="flex items-center">
                      <FaStar className="w-4 h-4 text-yellow-400" />
                      <span className="ml-1 font-semibold">{doctor.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {doctor.availableDays.map((day) => (
                      <span
                        key={day}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isCompleted && (
          <div className="flex justify-center mt-8">
            <button
              onClick={onNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center"
            >
              Continue to Scheduling
              <FaArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
