import { Bars3Icon, HeartIcon } from "@heroicons/react/24/solid";
import { SideBarPatient } from "../../components/progress/SideBarPatient";
import { ProgressTracker } from "../../components/progress/ProgressTracker";
import { StepCard } from "../../components/progress/StepCard";
import { StepDetail } from "../../components/progress/StepDetail";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import type OrderStep from "../../models/OrderStep";
import axiosInstance from "../../apis/AxiosInstance";
import type { Patient } from "../../models/Patient";
import type { Order } from "../../models/Order";
import { STEP_COMPLETED } from "../../constants/StepStatus";

export default function PatientProgressPage() {
  const { patientId, orderIds } = useAuth();
  const [selectedStep, setSelectedStep] = useState<OrderStep | null>();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [steps, setSteps] = useState<OrderStep[]>([]);
  const [patient, setPatient] = useState<Patient>();
  const [order, setOrder] = useState<Order>();

  const completedSteps = steps.filter(
    (step) => step.status === STEP_COMPLETED
  ).length;

  const totalSteps = steps.length;

  useEffect(() => {

    const fetchSteps = async () => {
      try {
        const response = await axiosInstance.get(`/steps/${orderIds}`);

        const result = response.data.data;
        setSteps(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSteps();
  }, [patientId, orderIds]);

  useEffect(() => {

    const fetchPatient = async (pId: string) => {
      try {
        const response = await axiosInstance.get(`/patients/${pId}`);

        const result = response.data.data;
        console.log("Patient" + result);
        setPatient(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPatient(patientId??"" );
  });

  useEffect(() => {

    const fetchOrder = async () => {
      try {
        const response = await axiosInstance.get(`/orders/${orderIds}`);

        const result = response.data.data;
        setOrder(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrder();
  });

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex">
        {/* Sidebar */}
        {sidebarOpen && <SideBarPatient patient={patient ?? null} />}

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
              <span className="font-semibold text-gray-900">{order?.treatmentService?.name} progress</span>
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
                    {order?.treatmentService?.name} progress{/* tên quá trình */}
                  </h1>
                  <p className="text-gray-600">
                    Theo dõi tiến trình điều trị
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
                <StepDetail step={selectedStep ?? null} order={order ?? null} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
