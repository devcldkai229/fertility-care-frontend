"use client"

import { FaCheck, FaArrowRight } from "react-icons/fa"
import { CheckIcon } from "@heroicons/react/24/outline"

interface Step1Props {
  selectedTreatment: string
  onTreatmentSelect: (treatment: string) => void
  onNext: () => void
  isCompleted: boolean
}

export default function Step1TreatmentSelection({
  selectedTreatment,
  onTreatmentSelect,
  onNext,
  isCompleted,
}: Step1Props) {
  return (
    <section id="treatment-type" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Treatment</h2>
          <p className="text-lg text-gray-600">
            Select the fertility treatment that best suits your needs. Our specialists will guide you through the entire
            process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`bg-white rounded-lg shadow-md border cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedTreatment === "iui" ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => onTreatmentSelect("iui")}
          >
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">IUI Treatment</h3>
              <p className="text-gray-600 mb-4">
                Intrauterine Insemination (IUI) is a less invasive fertility treatment where sperm is placed directly
                into the uterus during ovulation.
              </p>
            </div>
            <div className="px-6 pb-6">
              <ul className="space-y-2">
                <li className="flex items-center text-green-600">
                  <FaCheck className="w-4 h-4 mr-2" />
                  Less invasive procedure
                </li>
                <li className="flex items-center text-green-600">
                  <FaCheck className="w-4 h-4 mr-2" />
                  Lower cost option
                </li>
                <li className="flex items-center text-green-600">
                  <FaCheck className="w-4 h-4 mr-2" />
                  Shorter treatment cycle
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`bg-white rounded-lg shadow-md border cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedTreatment === "ivf" ? "ring-2 ring-purple-500" : ""
            }`}
            onClick={() => onTreatmentSelect("ivf")}
          >
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">IVF Treatment</h3>
              <p className="text-gray-600 mb-4">
                In Vitro Fertilization (IVF) is a comprehensive fertility treatment where eggs are fertilized outside
                the body and then transferred to the uterus.
              </p>
            </div>
            <div className="px-6 pb-6">
              <ul className="space-y-2">
                <li className="flex items-center text-green-600">
                  <FaCheck className="w-4 h-4 mr-2" />
                  Higher success rates
                </li>
                <li className="flex items-center text-green-600">
                  <FaCheck className="w-4 h-4 mr-2" />
                  Genetic testing available
                </li>
                <li className="flex items-center text-green-600">
                  <FaCheck className="w-4 h-4 mr-2" />
                  Multiple embryo options
                </li>
              </ul>
            </div>
          </div>
        </div>

        {isCompleted && (
          <div className="flex justify-center mt-8">
            <button
              onClick={onNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center"
            >
              Continue to Personal Info
              <FaArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
