"use client"

import { FaClock } from "react-icons/fa"
import { CalendarIcon } from "@heroicons/react/24/outline"

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: string
  rating: number
  avatar: string
  availableDays: string[]
}

interface Step4Props {
  selectedDoctor: Doctor | null
  selectedTreatment: string
  selectedDate: string
  selectedTime: string
  specialRequests: string
  consentGiven: boolean
  timeSlots: string[]
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
  onSpecialRequestsChange: (requests: string) => void
  onConsentChange: (consent: boolean) => void
  onConfirmBooking: () => void
  isCompleted: boolean
}

export default function Step4Scheduling({
  selectedDoctor,
  selectedTreatment,
  selectedDate,
  selectedTime,
  specialRequests,
  consentGiven,
  timeSlots,
  onDateChange,
  onTimeChange,
  onSpecialRequestsChange,
  onConsentChange,
  onConfirmBooking,
  isCompleted,
}: Step4Props) {
  return (
    <section id="schedule" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Schedule Your Appointment</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Doctor</h3>
            {selectedDoctor ? (
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={selectedDoctor.avatar || "/placeholder.svg?height=48&width=48"}
                    alt={selectedDoctor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      target.nextElementSibling!.classList.remove("hidden")
                    }}
                  />
                  <div className="hidden w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm">
                    {selectedDoctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div>
                  <p className="font-semibold">{selectedDoctor.name}</p>
                  <p className="text-blue-600 text-sm">{selectedTreatment.toUpperCase()} Treatment</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Please select a doctor first</p>
            )}

            {selectedDoctor && (
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Available Days</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDoctor.availableDays.map((day) => (
                    <span
                      key={day}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
                Select Date
              </label>
              <div className="relative">
                <input
                  id="appointmentDate"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => onDateChange(e.target.value)}
                  className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Available Time Slots</label>
              {selectedDate ? (
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => onTimeChange(time)}
                      className={`flex items-center justify-center px-3 py-2 text-xs font-medium rounded-md border transition-colors duration-200 ${
                        selectedTime === time
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <FaClock className="w-3 h-3 mr-1" />
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Select a date first</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            rows={3}
            value={specialRequests}
            onChange={(e) => onSpecialRequestsChange(e.target.value)}
            placeholder="Any special requests or additional information..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2 mt-6">
          <input
            id="consent"
            type="checkbox"
            checked={consentGiven}
            onChange={(e) => onConsentChange(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="consent" className="text-sm text-gray-700">
            I consent to the processing of my personal data for the purpose of this appointment and agree to the{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>
            .
          </label>
        </div>

        <div className="flex justify-center mt-8">
          <button
            disabled={!isCompleted}
            onClick={onConfirmBooking}
            className={`px-8 py-3 rounded-md font-medium transition-colors duration-200 ${
              !isCompleted
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            Confirm Booking ✓
          </button>
        </div>
      </div>
    </section>
  )
}
