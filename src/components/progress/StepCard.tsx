"use client";

import {
  BellIcon,
  ClockIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import type { IVFStep } from "../../models/ivf-types";
import {
  STEP_COMPLETED,
  STEP_FAILED,
  STEP_PLANNED,
  STEP_PROGRESS,
} from "../../constants/StepStatus";

interface StepCardProps {
  step: IVFStep;
  isSelected: boolean;
  onClick: () => void;
}

export function StepCard({ step, isSelected, onClick }: StepCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case STEP_COMPLETED:
        return (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Hoàn thành
          </span>
        );
      case STEP_PROGRESS:
        return (
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Đang tiến hành
          </span>
        );
      case STEP_PLANNED:
        return (
          <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-medium text-gray-700">
            Sắp tới
          </span>
        );
      case STEP_FAILED:
        return (
          <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-medium text-gray-700">
            Thất bại
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-medium text-gray-700">
            .....
          </span>
        );
    }
  };

  return (
    <div
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-0 relative rounded-lg ${
        step.status === "active"
          ? "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md"
          : step.status === "completed"
          ? "bg-gradient-to-r from-green-50 to-emerald-50"
          : "bg-white/80 backdrop-blur-sm"
      } ${isSelected ? "ring-2 ring-pink-600" : ""}`}
      onClick={onClick}
    >
      {/* Appointment Count Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-1 bg-orange-500 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg animate-wiggle">
          <BellIcon className="w-5 h-5" />
          <span>{step.appointments.length}</span>
        </div>
      </div>

      <div className="p-6 pt-12 pr-20">
        <div className="flex items-start gap-4">
          {/* Step Icon */}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative ${
              step.status === "completed"
                ? "bg-green-500 text-white"
                : step.status === "active"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {step.icon}

            {/* Energy Glow Effect */}
            {step.status === "active" && (
              <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
            )}
          </div>

          {/* Step Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              {getStatusBadge(step.status)}
            </div>

            <p className="text-gray-600 mb-3">{step.description}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                <span>{step.duration}</span>
              </div>
              {step.completionDate && (
                <div className="flex items-center gap-1">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  <span>Hoàn thành {step.completionDate}</span>
                </div>
              )}
            </div>

            {/* Cost Display Only */}
            <div className="flex items-center gap-2">
              <CreditCardIcon className="w-4 h-4 text-gray-400" />
              <span className="font-semibold text-gray-900">
                {formatCurrency(step.cost)} {/* bỏ vào giá tổng của 1 bước */}
              </span>
              {step.paid ? (
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Đã thanh toán
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full border border-orange-300 px-2.5 py-0.5 text-xs font-medium text-orange-600">
                  Chưa thanh toán
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
