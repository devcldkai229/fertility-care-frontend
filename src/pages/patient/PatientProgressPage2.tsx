import { Bars3Icon, BeakerIcon, ChartBarIcon, DocumentTextIcon, HeartIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { SideBarPatient } from "../../components/progress/SideBarPatient";
import { ProgressTracker } from "../../components/progress/ProgressTracker";
import { StepCard } from "../../components/progress/StepCard";
import { StepDetail } from "../../components/progress/StepDetail";
import Footer from "../../components/Footer";
import type { IVFStep } from "../../models/ivf-types";

const steps: IVFStep[] = [
  {
    id: 1,
    title: "Khám ban đầu & xét nghiệm",
    description: "Tư vấn ban đầu và các xét nghiệm cần thiết",
    status: "completed",
    duration: "1-2 tuần",
    cost: 5000000,
    paid: true,
    icon: <DocumentTextIcon className="w-6 h-6" />,
    completionDate: "2024-01-15",
    appointments: [
      {
        id: "1-1",
        title: "Tư vấn ban đầu",
        date: "2024-01-10",
        time: "09:00",
        doctor: "BS. Nguyễn Thị Lan",
        location: "Phòng khám 101",
        status: "completed",
        notes: "Bệnh nhân đã hoàn thành tư vấn ban đầu",
        instructions: "Mang theo kết quả xét nghiệm cũ (nếu có)",
      },
    ],
    doctorNotes:
      "Kết quả xét nghiệm tốt. Bệnh nhân đủ điều kiện tiến hành IVF.",
  },
  {
    id: 2,
    title: "Kích thích buồng trứng",
    description: "Sử dụng thuốc kích thích để phát triển nhiều trứng",
    status: "active",
    duration: "10-14 ngày",
    cost: 15000000,
    paid: false,
    icon: <SparklesIcon className="w-6 h-6" />,
    appointments: [
      {
        id: "2-1",
        title: "Bắt đầu tiêm thuốc",
        date: "2024-01-20",
        time: "10:00",
        doctor: "BS. Nguyễn Thị Lan",
        location: "Phòng khám 101",
        status: "completed",
        instructions: "Mang theo thuốc đã được kê đơn",
        notes: "Đã hướng dẫn cách tiêm thuốc tại nhà",
      },
      {
        id: "2-2",
        title: "Theo dõi nang trứng lần 1",
        date: "2024-01-25",
        time: "09:30",
        doctor: "BS. Nguyễn Thị Lan",
        location: "Phòng siêu âm",
        status: "upcoming",
        instructions:
          "Uống đủ nước trước khi siêu âm, mang theo thuốc đang sử dụng",
      },
      {
        id: "2-3",
        title: "Kiểm tra cuối kỳ & điều chỉnh liều",
        date: "2024-01-30",
        time: "08:00",
        doctor: "BS. Nguyễn Thị Lan",
        location: "Phòng khám 101",
        status: "upcoming",
        instructions:
          "Nhịn ăn 8 tiếng để xét nghiệm hormone, mang theo tất cả thuốc đang sử dụng",
      },
    ],
  },
  {
    id: 3,
    title: "Chọc hút trứng & lấy tinh trùng",
    description: "Thu thập trứng và tinh trùng để thụ tinh",
    status: "upcoming",
    duration: "1 ngày",
    cost: 8000000,
    paid: false,
    icon: <MagnifyingGlassIcon className="w-6 h-6" />,
    appointments: [
      {
        id: "3-1",
        title: "Chọc hút trứng",
        date: "2024-02-02",
        time: "07:00",
        doctor: "BS. Trần Văn Nam",
        location: "Phòng phẫu thuật",
        status: "upcoming",
        instructions: "Nhịn ăn uống từ 22h đêm hôm trước",
      },
    ],
    eggData: {
      totalEggs: 12,
      matureEggs: 10,
    },
  },
  {
    id: 4,
    title: "Thụ tinh & nuôi cấy phôi",
    description: "Thụ tinh trong ống nghiệm và nuôi cấy phôi",
    status: "upcoming",
    duration: "3-5 ngày",
    cost: 12000000,
    paid: false,
    icon: <BeakerIcon className="w-6 h-6" />,
    appointments: [
      {
        id: "4-1",
        title: "Theo dõi thụ tinh",
        date: "2024-02-03",
        time: "10:00",
        doctor: "Phòng Phôi học",
        location: "Phòng lab",
        status: "upcoming",
        instructions: "Không cần chuẩn bị gì đặc biệt",
      },
    ],
    embryoData: {
      totalEggs: 12,
      embryoTypes: [
        { type: "Phôi ngày 3", count: 6, quality: "AA" },
        { type: "Phôi ngày 5 (Blastocyst)", count: 3, quality: "A" },
        { type: "Phôi đông lạnh", count: 2, quality: "B" },
      ],
      totalEmbryos: 11,
    },
  },
  {
    id: 5,
    title: "Chuyển phôi",
    description: "Chuyển phôi tốt nhất vào tử cung",
    status: "upcoming",
    duration: "1 ngày",
    cost: 6000000,
    paid: false,
    icon: <HeartIcon className="w-6 h-6" />,
    appointments: [
      {
        id: "5-1",
        title: "Chuyển phôi",
        date: "2024-02-07",
        time: "09:00",
        doctor: "BS. Nguyễn Thị Lan",
        location: "Phòng phẫu thuật",
        status: "upcoming",
        instructions: "Uống đủ nước, không cần nhịn ăn",
      },
    ],
  },
  {
    id: 6,
    title: "Theo dõi kết quả",
    description: "Theo dõi và xác nhận thai kỳ",
    status: "upcoming",
    duration: "2-4 tuần",
    cost: 3000000,
    paid: false,
    icon: <ChartBarIcon className="w-6 h-6" />,
    appointments: [
      {
        id: "6-1",
        title: "Xét nghiệm Beta HCG",
        date: "2024-02-21",
        time: "08:00",
        doctor: "Phòng xét nghiệm",
        location: "Tầng 2",
        status: "upcoming",
        instructions: "Nhịn ăn 8 tiếng trước xét nghiệm",
      },
    ],
  },
];


export default function PatientProgressPage2() {
    


  const [selectedStep, setSelectedStep] = useState<IVFStep | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
    const completedSteps = steps.filter(
      (step) => step.status === "completed"
    ).length;
    const totalSteps = steps.length;
    
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <SideBarPatient
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
                    Hành trình IVF của bạn {/* tên quá trình */}
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

      <Footer />
    </div>
  );
}
