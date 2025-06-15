import { CheckIcon } from "@heroicons/react/24/outline";

interface ProgressOverviewProps {
  patient: {
    progress: string;
    completedSteps: number[];
    currentStep: number;
  };
  treatmentSteps: any[];
}

export default function ProgressOverview({
  patient,
  treatmentSteps,
}: ProgressOverviewProps) {
  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Tiến độ tổng thể</h2>
          <p className="text-gray-600">
            Đã hoàn thành {patient.completedSteps.length}/
            {treatmentSteps.length} bước ({patient.progress})
          </p>
        </div>
        <div className="text-3xl font-bold text-purple-600">
          {patient.progress}
        </div>
      </div>

      {/* Progress steps */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          {treatmentSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${
                  patient.completedSteps?.some((id) => id === step.id)
                    ? "bg-green-500"
                    : patient.currentStep === step.id
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              >
                {patient.completedSteps?.some((id) => id === step.id) ? (
                  <CheckIcon className="h-6 w-6" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              <span className="mt-2 text-sm">Bước {step.id}</span>
            </div>
          ))}
        </div>
        <div className="relative mt-4">
          <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 transform bg-gray-200"></div>
          <div
            className="absolute top-1/2 h-1 -translate-y-1/2 transform bg-green-500"
            style={{ width: patient.progress }}
          ></div>
        </div>
      </div>
    </div>
  );
}
