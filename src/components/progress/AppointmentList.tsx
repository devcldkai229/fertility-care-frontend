import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  PlusCircleIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import type { Appointment } from "../../models/ivf-types";

interface AppointmentListProps {
  appointments: Appointment[];
}

export function AppointmentList({ appointments }: AppointmentListProps) {
  const getAppointmentStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Đã hoàn thành
          </span>
        );
      case "upcoming":
        return (
          <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
            Sắp tới
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            Đã hủy
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-medium text-gray-700">
            Chưa xác định
          </span>
        );
    }
  };

  const sortAppointmentsByPriority = (appointments: Appointment[]) => {
    return [...appointments].sort((a, b) => {
      if (a.status === "upcoming" && b.status === "completed") return -1;
      if (a.status === "completed" && b.status === "upcoming") return 1;

      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (a.status === "upcoming") {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          Lịch hẹn ({appointments.length})
        </h3>
      </div>
      <div className="p-0">
        <div className="max-h-96 overflow-y-auto px-6 pb-6">
          <div className="space-y-4">
            {sortAppointmentsByPriority(appointments).map((appointment) => (
              <div
                key={appointment.id}
                className="border rounded-lg p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">
                    {appointment.title}
                  </h4>
                  {getAppointmentStatusBadge(appointment.status)}
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlusCircleIcon className="w-4 h-4" />
                    <span>Slot 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4" />
                    <span>{appointment.doctor}</span>
                  </div>
                </div>

                {appointment.instructions && (
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <div className="flex items-center gap-2 mb-1">
                      <BanknotesIcon className="h-5 w-5 text-green-600" />
                      <strong className="text-gray-800 text-sm">
                        Chi phí phát sinh:
                      </strong>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {appointment.instructions} {/* giá tiền thêm của appointment */}
                    </p>
                  </div>
                )}

                {appointment.notes && (
                  <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                    <strong>Ghi chú:</strong> {appointment.notes}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
