"use client";

interface AddAppointmentModalProps {
  isOpen: boolean;
  appointment: {
    date: string;
    time: string;
    type: string;
    doctor: string;
    room: string;
    note: string;
    warning: string;
  };
  onAppointmentChange: (field: string, value: string) => void;
  onSave: () => void;
  onClose: () => void;
}

export default function AddAppointmentModal({
  isOpen,
  appointment,
  onAppointmentChange,
  onSave,
  onClose,
}: AddAppointmentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="border-b p-4">
          <h4 className="font-medium">Thêm lịch hẹn mới</h4>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-sm font-medium">Loại hẹn</label>
              <input
                type="text"
                value={appointment.type}
                onChange={(e) => onAppointmentChange("type", e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Ví dụ: Khám định kỳ"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Ngày</label>
              <input
                type="date"
                value={appointment.date}
                onChange={(e) => onAppointmentChange("date", e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Giờ</label>
              <input
                type="time"
                value={appointment.time}
                onChange={(e) => onAppointmentChange("time", e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Bác sĩ</label>
              <input
                type="text"
                value={appointment.doctor}
                onChange={(e) => onAppointmentChange("doctor", e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Tên bác sĩ"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Phòng khám
              </label>
              <input
                type="text"
                value={appointment.room}
                onChange={(e) => onAppointmentChange("room", e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Số phòng"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Ghi chú</label>
              <textarea
                value={appointment.note}
                onChange={(e) => onAppointmentChange("note", e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Ghi chú thêm"
                rows={2}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">
                Lưu ý cho bệnh nhân
              </label>
              <textarea
                value={appointment.warning}
                onChange={(e) => onAppointmentChange("warning", e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Lưu ý đặc biệt cho bệnh nhân"
                rows={2}
              />
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={onClose}
                className="rounded-md border border-gray-300 px-3 py-1.5 text-sm"
              >
                Hủy
              </button>
              <button
                onClick={onSave}
                className="rounded-md bg-purple-600 px-3 py-1.5 text-sm text-white"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
