"use client";

import { useEffect, useState } from "react";
import StepIndicator from "../components/StepIndicator";
import PartThreeBooking from "../components/PartThreeBooking";
import { FaFlask, FaUser, FaHeart } from "react-icons/fa";
import Header from "../components/Header";
import PartOneBooking from "../components/PartOneBooking";
import PartTwoBooking from "../components/PartTwoBooking";
import PartFourBooking from "../components/PartFourBooking";
import type { Doctor } from "../models/Doctor";
import type PersonalInfo from "../models/PersonalInfo";
import { getDoctors } from "../apis/DoctorService";

export default function BookingPage() {
  const defaultPersonalInfo: PersonalInfo = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    medicalHistory: "",
  };

  const [activeStep, setActiveStep] = useState(1);

  const [selectedTreatment, setSelectedTreatment] = useState("");

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const [selectedDate, setSelectedDate] = useState("");

  const [selectedTime, setSelectedTime] = useState("");

  const [personalInfo, setPersonalInfo] =
    useState<PersonalInfo>(defaultPersonalInfo);

  const [specialRequests, setSpecialRequests] = useState("");

  const [consentGiven, setConsentGiven] = useState(false);

  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const steps = [
    { number: 1, title: "Treatment Type" },
    { number: 2, title: "Personal Info" },
    { number: 3, title: "Select Doctor" },
    { number: 4, title: "Schedule" },
  ];

  const handlePersonalInfoChange = (field: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNextStep = (currentStep: number) => {
    if (currentStep < 4) {
      setActiveStep(currentStep + 1);
      const sectionIds = [
        "treatment-type",
        "personal-info",
        "select-doctor",
        "schedule",
      ];
      scrollToSection(sectionIds[currentStep]);
    }
  };

  const isStepCompleted = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return selectedTreatment !== "";
      case 2:
        return (
          personalInfo?.firstName !== "" &&
          personalInfo?.lastName !== "" &&
          personalInfo?.email !== ""
        );
      case 3:
        return selectedDoctor !== null;
      case 4:
        return selectedDate !== "" && selectedTime !== "" && consentGiven;
      default:
        return false;
    }
  };

  const handleTreatmentSelect = (treatment: string) => {
    setSelectedTreatment(treatment);
    if (activeStep < 2) setActiveStep(2);
  };

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    if (activeStep < 4) setActiveStep(4);
  };

  const handleSubmitBookingForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const result = await getDoctors();
        setDoctors(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Fertility Journey Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Compassionate care from leading specialists to help you build your
              family
            </p>
            <button
              onClick={() => scrollToSection("treatment-type")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
            >
              Nhập thông tin
            </button>
          </div>
        </section>

        {/* Features Section */}
        <div className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Tại sao chọn FertilityCare?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach combines cutting-edge technology with
                personalized care to support your fertility journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaFlask className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Advanced Technology
                </h3>
                <p className="text-gray-600">
                  State-of-the-art laboratories and the latest reproductive
                  technologies to maximize your chances of success.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaUser className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Expert Specialists
                </h3>
                <p className="text-gray-600">
                  Board-certified reproductive endocrinologists with extensive
                  experience in fertility treatments.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaHeart className="w-10 h-10 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Personalized Care
                </h3>
                <p className="text-gray-600">
                  Customized treatment plans tailored to your unique needs and
                  circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 px-4">
          <StepIndicator steps={steps} activeStep={activeStep} />

          <div className="max-w-6xl mx-auto space-y-16">
            <form onSubmit={handleSubmitBookingForm()}>
              <PartOneBooking
                selectedTreatment={selectedTreatment}
                onTreatmentSelect={handleTreatmentSelect}
                onNext={() => handleNextStep(1)}
                isCompleted={isStepCompleted(1)}
              />

              <PartTwoBooking
                personal={personalInfo}
                onPersonalInfoChange={handlePersonalInfoChange}
                onNext={() => handleNextStep(2)}
                isCompleted={isStepCompleted(2)}
              />

              <PartThreeBooking
                doctors={doctors}
                selectedDoctor={selectedDoctor}
                onDoctorSelect={handleDoctorSelect}
                onNext={() => handleNextStep(3)}
                isCompleted={isStepCompleted(3)}
              />

              <PartFourBooking
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

              <div className="flex justify-center mt-8">
                <button type="submit" className="">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
