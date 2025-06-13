"use client"

import { FaArrowRight } from "react-icons/fa"

interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  medicalHistory: string
}

interface Step2Props {
  personalInfo: PersonalInfo
  onPersonalInfoChange: (field: string, value: string) => void
  onNext: () => void
  isCompleted: boolean
}

export default function Step2PersonalInfo({ personalInfo, onPersonalInfoChange, onNext, isCompleted }: Step2Props) {
  return (
    <section id="personal-info" className="scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Personal Information</h2>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={personalInfo.firstName}
                onChange={(e) => onPersonalInfoChange("firstName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={personalInfo.lastName}
                onChange={(e) => onPersonalInfoChange("lastName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={personalInfo.email}
                onChange={(e) => onPersonalInfoChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={personalInfo.phone}
                onChange={(e) => onPersonalInfoChange("phone", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                value={personalInfo.dateOfBirth}
                onChange={(e) => onPersonalInfoChange("dateOfBirth", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    value="female"
                    checked={personalInfo.gender === "female"}
                    onChange={(e) => onPersonalInfoChange("gender", e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="female" className="ml-2 text-sm text-gray-700">
                    Female
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    checked={personalInfo.gender === "male"}
                    onChange={(e) => onPersonalInfoChange("gender", e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="male" className="ml-2 text-sm text-gray-700">
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="other"
                    name="gender"
                    type="radio"
                    value="other"
                    checked={personalInfo.gender === "other"}
                    onChange={(e) => onPersonalInfoChange("gender", e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="other" className="ml-2 text-sm text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-1">
              Brief Medical History (Optional)
            </label>
            <textarea
              id="medicalHistory"
              rows={4}
              value={personalInfo.medicalHistory}
              onChange={(e) => onPersonalInfoChange("medicalHistory", e.target.value)}
              placeholder="Please provide any relevant medical history..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {isCompleted && (
          <div className="flex justify-center mt-8">
            <button
              onClick={onNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center"
            >
              Continue to Doctor Selection
              <FaArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
