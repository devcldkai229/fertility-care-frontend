export default function DoctorDashboard() {
    // fetch all patient kem theo orderId doctor 
    // xu li button click vao chuyen them du lieu patient, orderId


  return (
    <div className="bg-gray-50">
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl">
        <div className="gradient-bg p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <i className="fas fa-heart text-purple-600 text-lg"></i>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">FertilityCare</h1>
              <p className="text-purple-100 text-sm">Doctor Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="mt-6 px-4">
          <div className="space-y-2">
            <a
              href="#dashboard"
              className="sidebar-active flex items-center w-full px-4 py-3 text-white rounded-lg group"
            >
              <div className="flex items-center">
                <i className="fas fa-chart-line w-4 mr-3"></i>
                Dashboard
              </div>
            </a>

            <a
              href="#patients"
              className="flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <div className="flex items-center">
                <i className="fas fa-users w-4 mr-3"></i>
                Bệnh nhân
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                156
              </span>
            </a>

            <a
              href="#doctors"
              className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <div className="flex items-center">
                <i className="fas fa-user-md w-4 mr-3"></i>
                Bác sĩ
              </div>
            </a>

            <a
              href="#appointments"
              className="flex items-center justify-between w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 group"
            >
              <div className="flex items-center">
                <i className="fas fa-calendar-alt w-4 mr-3"></i>
                Lịch hẹn
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                24
              </span>
            </a>
          </div>
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40x40/667eea/ffffff?text=AD"
                className="w-10 h-10 rounded-full"
                alt="Admin Avatar"
              />
              <div>
                <p className="font-semibold text-gray-800">Dr. Nguyễn Văn A</p>
                <p className="text-sm text-gray-600">
                  Chuyên khoa Sản phụ khoa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-64 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">




        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Bệnh nhân của tôi</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Xem tất cả</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Bệnh nhân</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Phác đồ</th>
                            {/* <th className="text-left py-3 px-4 font-medium text-gray-600">Ngày khám</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Trạng thái</th>  */}
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4">
                                <div className="flex items-center space-x-3">
                                    <img src="https://via.placeholder.com/32x32/8b5cf6/ffffff?text=A" className="w-8 h-8 rounded-full" alt="Patient"/>
                                    <div>
                                        <p className="font-medium text-sm">Nguyễn Thị A</p>
                                        <p className="text-xs text-gray-500">ID: #PT001</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 px-4">
                                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">IVF</span>
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">25/05/2025</td>
                            <td className="py-3 px-4">
                                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">Đang điều trị</span>
                            </td>
                            <td className="py-3 px-4">
                                <button className="text-blue-600 hover:text-blue-700 text-sm">Xem chi tiết</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}
