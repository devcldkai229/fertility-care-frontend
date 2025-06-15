"use client";

import {
  CalendarIcon,
  ClockIcon,
  DocumentTextIcon,
  UserIcon,
  MapPinIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

interface StepDetailModalProps {
  isOpen: boolean;
  step: any;
  onClose: () => void;
  onAddNote: () => void;
  onAddAppointment: () => void;
}

export default function StepDetailModal({
  isOpen,
  step,
  onClose,
  onAddNote,
  onAddAppointment,
}: StepDetailModalProps) {
  if (!isOpen || !step) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-xl">
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`rounded-full ${
                  step.status === "completed"
                    ? "bg-green-500"
                    : step.status === "in-progress"
                    ? "bg-blue-500"
                    : step.status === "failed"
                    ? "bg-red-500"
                    : "bg-gray-400"
                } p-2`}
              >
                {step.icon}
              </div>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-500">Bước {step.id}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-4">
          <p className="text-gray-700">{step.description}</p>

          {/* Ghi chú của bác sĩ */}
          {step.notes && (
            <div className="mt-4">
              <h4 className="font-medium">Ghi chú của bác sĩ</h4>
              <div className="mt-2 rounded-md bg-blue-50 p-4 text-sm text-blue-800">
                <DocumentTextIcon className="mb-1 h-5 w-5 text-blue-500" />
                <p>{step.notes}</p>
              </div>
            </div>
          )}

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Chi phí:</p>
              <p className="font-semibold">{step.cost}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Trạng thái thanh toán:
              </p>
              <span
                className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                  step.isPaid
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {step.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
              </span>
            </div>
          </div>

          {/* Lịch hẹn */}
          {step.appointments && step.appointments.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 flex items-center font-medium">
                <CalendarIcon className="mr-1 h-5 w-5" />
                Lịch hẹn ({step.appointments.length})
              </h4>

              <div className="space-y-4">
                {step.appointments.map((apt: any, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-gray-200 bg-white"
                  >
                    <div className="border-b p-4">
                      <div className="flex items-center justify-between">
                        <h5 className="font-medium">{apt.type}</h5>
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                            apt.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {apt.status === "completed"
                            ? "Đã hoàn thành"
                            : "Đã hẹn"}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                          <span>{apt.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <ClockIcon className="mr-2 h-4 w-4 text-gray-500" />
                          <span>{apt.time}</span>
                        </div>
                        {apt.doctor && (
                          <div className="flex items-center text-sm">
                            <UserIcon className="mr-2 h-4 w-4 text-gray-500" />
                            <span>{apt.doctor}</span>
                          </div>
                        )}
                        {apt.room && (
                          <div className="flex items-center text-sm">
                            <MapPinIcon className="mr-2 h-4 w-4 text-gray-500" />
                            <span>{apt.room}</span>
                          </div>
                        )}
                      </div>

                      {apt.warning && (
                        <div className="mt-3 rounded-md border-l-4 border-yellow-400 bg-yellow-50 p-3">
                          <div className="flex">
                            <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600" />
                            <div className="ml-2">
                              <p className="text-sm font-medium text-yellow-800">
                                Lưu ý:
                              </p>
                              <p className="text-sm text-yellow-700">
                                {apt.warning}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {apt.note && (
                        <div className="mt-3 rounded-md bg-gray-50 p-3">
                          <p className="text-sm font-medium">Ghi chú:</p>
                          <p className="text-sm text-gray-600">{apt.note}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onAddNote}
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium hover:bg-gray-50"
            >
              Thêm ghi chú
            </button>
            <button
              onClick={onAddAppointment}
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium hover:bg-gray-50"
            >
              Thêm lịch hẹn
            </button>
            <button
              onClick={onClose}
              className="rounded-md bg-purple-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-700"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
