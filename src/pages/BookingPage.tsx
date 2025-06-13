"use client"

import { useState } from "react"
import StepIndicator from "../components/StepIndicator"
import Step1TreatmentSelection from "../components/Step1TreatmentSelection"
import Step2PersonalInfo from "../components/Step2PersonalInfo"
import Step3DoctorSelection from "../components/Step3DoctorSelection"
import Step4Scheduling from "../components/Step4Scheduling"
import { FaFlask, FaUser, FaHeart } from "react-icons/fa"

interface Doctor {
  id: string
  name: string
  specialty: string
  experience: string
  rating: number
  avatar: string
  availableDays: string[]
}

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Reproductive Endocrinologist",
    experience: "15 years experience in and fertility preservation",
    rating: 4.9,
    avatar: "/placeholder-user.jpg",
    availableDays: ["Monday", "Wednesday", "Friday"],
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Fertility Specialist",
    experience: "15 years experience in and fertility preservation",
    rating: 4.8,
    avatar: "/placeholder-user.jpg",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Reproductive Endocrinologist",
    experience: "15 years experience in and fertility preservation",
    rating: 4.7,
    avatar: "/placeholder-user.jpg",
    availableDays: ["Monday", "Wednesday", "Friday"],
  },
]

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
]

export default function FertilityBooking() {
  const [activeStep, setActiveStep] = useState(1)
  const [selectedTreatment, setSelectedTreatment] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    medicalHistory: "",
  })
  const [specialRequests, setSpecialRequests] = useState("")
  const [consentGiven, setConsentGiven] = useState(false)

  const steps = [
    { number: 1, title: "Treatment Type" },
    { number: 2, title: "Personal Info" },
    { number: 3, title: "Select Doctor" },
    { number: 4, title: "Schedule" },
  ]

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleNextStep = (currentStep: number) => {
    if (currentStep < 4) {
      setActiveStep(currentStep + 1)
      const sectionIds = ["treatment-type", "personal-info", "select-doctor", "schedule"]
      scrollToSection(sectionIds[currentStep])
    }
  }

  // Check if step is completed
  const isStepCompleted = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return selectedTreatment !== ""
      case 2:
        return personalInfo.firstName !== "" && personalInfo.lastName !== "" && personalInfo.email !== ""
      case 3:
        return selectedDoctor !== null
      case 4:
        return selectedDate !== "" && selectedTime !== "" && consentGiven
      default:
        return false
    }
  }

  const handleTreatmentSelect = (treatment: string) => {
    setSelectedTreatment(treatment)
    if (activeStep < 2) setActiveStep(2)
  }

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    if (activeStep < 4) setActiveStep(4)
  }

  const handleConfirmBooking = () => {
    alert("Booking confirmed! You will receive a confirmation email shortly.")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Your Fertility Journey Starts Here</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Compassionate care from leading specialists to help you build your family
          </p>
          <button
            onClick={() => scrollToSection("treatment-type")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
          >
            Begin Your Consultation
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FertilityCare?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines cutting-edge technology with personalized care to support your
              fertility journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaFlask className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art laboratories and the latest reproductive technologies to maximize your chances of
                success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUser className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Specialists</h3>
              <p className="text-gray-600">
                Board-certified reproductive endocrinologists with extensive experience in fertility treatments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personalized Care</h3>
              <p className="text-gray-600">
                Customized treatment plans tailored to your unique needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 px-4">
        <StepIndicator steps={steps} activeStep={activeStep} />

        <div className="max-w-6xl mx-auto space-y-16">
          <Step1TreatmentSelection
            selectedTreatment={selectedTreatment}
            onTreatmentSelect={handleTreatmentSelect}
            onNext={() => handleNextStep(1)}
            isCompleted={isStepCompleted(1)}
          />

          <Step2PersonalInfo
            personalInfo={personalInfo}
            onPersonalInfoChange={handlePersonalInfoChange}
            onNext={() => handleNextStep(2)}
            isCompleted={isStepCompleted(2)}
          />

          <Step3DoctorSelection
            doctors={doctors}
            selectedDoctor={selectedDoctor}
            onDoctorSelect={handleDoctorSelect}
            onNext={() => handleNextStep(3)}
            isCompleted={isStepCompleted(3)}
          />

          <Step4Scheduling
            selectedDoctor={selectedDoctor}
            selectedTreatment={selectedTreatment}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            specialRequests={specialRequests}
            consentGiven={consentGiven}
            timeSlots={timeSlots}
            onDateChange={setSelectedDate}
            onTimeChange={setSelectedTime}
            onSpecialRequestsChange={setSpecialRequests}
            onConsentChange={setConsentGiven}
            onConfirmBooking={handleConfirmBooking}
            isCompleted={isStepCompleted(4)}
          />
        </div>
      </div>
    </div>
  )
}
