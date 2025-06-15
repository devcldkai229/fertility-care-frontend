"use client";
import "../assets/css/StylePatientProcess.css";
import { useState } from "react";
import { HeartIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { IVFSidebar } from "./IVFSidebar";
import { StepCard } from "../StepCard";
import type { IVFStep } from "../../models/ivf-types";
import { ProgressTracker } from "./ProgressTracker";
import { StepDetail } from "./StepDetail";

interface IVFProgressPageProps {
  steps: IVFStep[];
  patientName: string;
  patientDOB: string;
}

export default function IVFProgressPage({
  steps,
  patientName,
  patientDOB,
}: IVFProgressPageProps) {
  const [selectedStep, setSelectedStep] = useState<IVFStep | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const completedSteps = steps.filter(
    (step) => step.status === "completed"
  ).length;
  const totalSteps = steps.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex">
      {/* Sidebar */}
      {sidebarOpen && (
        <IVFSidebar
          patientName={patientName}
          patientDOB={patientDOB}
          progressPercentage={(completedSteps / totalSteps) * 100}
        />
      )}

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile header */}
        <div className="lg:hidden bg-white shadow-sm p-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <HeartIcon className="w-6 h-6 text-pink-500" />
            <span className="font-semibold text-gray-900">BabySteps</span>
          </div>
          <div className="w-10" />
        </div>

        <div className="p-6">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Hành trình IVF của bạn
                </h1>
                <p className="text-gray-600">
                  Theo dõi tiến trình điều trị thụ tinh ống nghiệm
                </p>
              </div>
            </div>

            {/* Progress Tracker */}
            <ProgressTracker
              steps={steps}
              completedSteps={completedSteps}
              totalSteps={totalSteps}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Steps Timeline */}
            <div className="lg:col-span-2 space-y-4">
              {steps.map((step) => (
                <StepCard
                  key={step.id}
                  step={step}
                  isSelected={selectedStep?.id === step.id}
                  onClick={() => setSelectedStep(step)}
                />
              ))}
            </div>

            {/* Step Details Panel */}
            <div>
              <StepDetail step={selectedStep} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
