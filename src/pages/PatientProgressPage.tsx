"use client";
import Footer from "../components/Footer";
import IVFProgress from "../components/IVFProgress";
import type { IVFStep } from "../models/ivf-types";

import {
  DocumentTextIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  HeartIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

// Dữ liệu mẫu
const ivfSteps: IVFStep[] = [
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

export default function PatientProgressPage() {
  return (
    <>
      <IVFProgress
        steps={ivfSteps}
        patientName="Lê Thị Hương"
        patientDOB="2000/01/01"
      />

      <Footer />
    </>
  );
}
