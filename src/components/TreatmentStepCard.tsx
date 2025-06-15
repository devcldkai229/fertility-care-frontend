"use client";

import {
  CheckIcon,
  ClockIcon,
  CreditCardIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

interface TreatmentStepCardProps {
  step: any;
  onStepClick: (stepId: number) => void;
  onAddNote: (stepId: number) => void;
  onAddAppointment: (stepId: number) => void;
  onUpdateStatus: (stepId: number, status: string) => void;
}

export default function TreatmentStepCard({
  step,
  onStepClick,
  onAddNote,
  onAddAppointment,
  onUpdateStatus,
}: TreatmentStepCardProps) {
  // Hàm render màu nền cho card bước điều trị
  const getStepCardBg = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-50";
      case "in-progress":
        return "bg-blue-50";
      case "failed":
        return "bg-red-50";
      default:
        return "bg-white";
    }
  };

  // Hàm render badge trạng thái
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
            Hoàn thành
          </span>
        );
      case "in-progress":
        return (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            Đang thực hiện
          </span>
        );
      case "failed":
        return (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800">
            Thất bại
          </span>
        );
      default:
        return (
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
            Sắp tới
          </span>
        );
    }
  };

  // Hàm render icon cho bước điều trị
  const renderStepIcon = (step: any) => {
    let bgColor = "bg-gray-300";

    if (step.status === "completed") {
      bgColor = "bg-green-500";
    } else if (step.status === "in-progress") {
      bgColor = "bg-blue-500";
    } else if (step.status === "failed") {
      bgColor = "bg-red-500";
    }

    return (
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full ${bgColor}`}
      >
        {step.icon}
      </div>
    );
  };

  return (
    <div
      className={`cursor-pointer rounded-lg border border-transparent ${getStepCardBg(
        step.status
      )} p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:ring-2 hover:ring-purple-500`}
      onClick={() => onStepClick(step.id)}
    >
      <div className="flex items-start justify-between">
        <div className="flex space-x-4">
          {renderStepIcon(step)}
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              {renderStatusBadge(step.status)}
            </div>
            <p className="mt-1 text-gray-600">{step.description}</p>

            {/* Thời gian */}
            <div className="mt-3 flex items-center space-x-1 text-sm text-gray-500">
              <ClockIcon className="h-4 w-4" />
              <span>{step.duration}</span>
            </div>

            {/* Ngày hoàn thành */}
            {step.completionDate && (
              <div className="mt-1 flex items-center space-x-1 text-sm text-green-600">
                <CheckIcon className="h-4 w-4" />
                <span>Hoàn thành {step.completionDate}</span>
              </div>
            )}

            {/* Chi phí và trạng thái thanh toán */}
            <div className="mt-2 flex items-center space-x-2">
              <CreditCardIcon className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">{step.cost}</span>
              {step.isPaid ? (
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                  Đã thanh toán
                </span>
              ) : (
                <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-800">
                  Chưa thanh toán
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Notification badge */}
        <div className="relative">
          <div className="rounded-full bg-orange-500 p-2 text-white">
            <BellIcon className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white ring-2 ring-white">
              {step.notificationCount}
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex justify-end space-x-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddNote(step.id);
          }}
          className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100"
        >
          Thêm ghi chú
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddAppointment(step.id);
          }}
          className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium transition-colors hover:bg-gray-100"
        >
          Thêm lịch hẹn
        </button>
        <div className="flex space-x-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUpdateStatus(step.id, "completed");
            }}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              step.status === "completed"
                ? "bg-green-600 text-white hover:bg-green-700"
                : "border border-green-600 text-green-600 hover:bg-green-100"
            }`}
          >
            Hoàn thành
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUpdateStatus(step.id, "failed");
            }}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              step.status === "failed"
                ? "bg-red-600 text-white hover:bg-red-700"
                : "border border-red-600 text-red-600 hover:bg-red-100"
            }`}
          >
            Thất bại
          </button>
        </div>
      </div>
    </div>
  );
}
