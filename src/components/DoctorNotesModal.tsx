"use client";

interface DoctorNotesModalProps {
  isOpen: boolean;
  note: string;
  onNoteChange: (note: string) => void;
  onSave: () => void;
  onClose: () => void;
}

export default function DoctorNotesModal({
  isOpen,
  note,
  onNoteChange,
  onSave,
  onClose,
}: DoctorNotesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-xl">
        <div className="border-b p-4">
          <h4 className="font-medium">Ghi chú của bác sĩ</h4>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            <div>
              <textarea
                value={note}
                onChange={(e) => onNoteChange(e.target.value)}
                className="h-32 w-full rounded-md border border-gray-300 p-2 text-sm"
                placeholder="Nhập ghi chú về tình trạng bệnh nhân..."
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
