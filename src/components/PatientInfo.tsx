interface PatientInfoProps {
  patient: {
    name: string;
    dob: string;
    avatar: string;
  };
}

export default function PatientInfo({ patient }: PatientInfoProps) {
  return (
    <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
          <span className="text-lg font-bold">{patient.avatar}</span>
        </div>
        <div>
          <h2 className="font-bold">{patient.name}</h2>
          <p className="text-sm text-gray-500">{patient.dob}</p>
        </div>
      </div>
      <button className="rounded-md bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-200">
        Hồ sơ bệnh nhân
      </button>
    </div>
  );
}
