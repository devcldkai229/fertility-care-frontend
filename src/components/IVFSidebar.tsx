"use client";

import { useState } from "react";
import {
  HomeIcon,
  CalendarIcon,
  ChartBarIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  BookOpenIcon,
  UsersIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

interface IVFSidebarProps {
  patientName: string;
  patientDOB: string;
  progressPercentage: number;
}

export function IVFSidebar({
  patientName,
  patientDOB,
  progressPercentage,
}: IVFSidebarProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-white shadow-xl transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarCollapsed ? "w-16" : "w-64"
      } translate-x-0`}
    >
      <div className="flex flex-col h-full">
        {/* Patient Info Header */}
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-500 to-purple-600 relative">
          {!sidebarCollapsed && (
            <>
              <div className="relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-pink-600 font-semibold">
                  {getInitials(patientName)}
                </div>
              </div>
              <div className="text-white flex-1">
                <h3 className="font-semibold text-lg">{patientName}</h3>
                <p className="text-sm opacity-90">{patientDOB}</p>
              </div>
            </>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-md text-white hover:bg-white/20 transition-colors"
          >
            {sidebarCollapsed ? (
              <ChevronRightIcon className="w-5 h-5" />
            ) : (
              <ChevronLeftIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Logo */}
        {!sidebarCollapsed && (
          <div className="flex items-center gap-3 px-4 py-3 border-b">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <HeartIconSolid className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">BabySteps</h2>
              <p className="text-xs text-gray-600">Your fertility journey</p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          {!sidebarCollapsed && (
            <div className="p-4">
              <div className="text-sm font-medium text-gray-500 mb-3">
                My Care Portal
              </div>
            </div>
          )}
          <nav className={`${sidebarCollapsed ? "px-2" : "px-4"} space-y-1`}>
            <a
              href="#"
              className={`flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors ${
                sidebarCollapsed ? "justify-center" : ""
              }`}
            >
              <HomeIcon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && <span>My Dashboard</span>}
            </a>
            <a
              href="#"
              className={`flex items-center gap-3 px-3 py-2 text-pink-600 bg-pink-50 rounded-lg ${
                sidebarCollapsed ? "justify-center" : ""
              }`}
            >
              <HeartIconSolid className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && <span>My Journey</span>}
            </a>
            <a
              href="#"
              className={`flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors ${
                sidebarCollapsed ? "justify-center" : ""
              }`}
            >
              <CalendarIcon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && <span>Appointments</span>}
            </a>
            <a
              href="#"
              className={`flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors ${
                sidebarCollapsed ? "justify-center" : ""
              }`}
            >
              <ChartBarIcon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && <span>Test Results</span>}
            </a>
            <a
              href="#"
              className={`flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors ${
                sidebarCollapsed ? "justify-center" : ""
              }`}
            >
              <AcademicCapIcon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && <span>Medications</span>}
            </a>
            <a
              href="#"
              className={`flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors ${
                sidebarCollapsed ? "justify-center" : ""
              }`}
            >
              <DocumentTextIcon className="w-5 h-5 flex-shrink-0" />
              {!sidebarCollapsed && <span>My Records</span>}
            </a>
          </nav>

          {!sidebarCollapsed && (
            <div className="p-4 border-t mt-4">
              <div className="text-sm font-medium text-gray-500 mb-3">
                Support & Resources
              </div>
              <nav className="space-y-1">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                  <span>Chat with Care Team</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <BookOpenIcon className="w-5 h-5" />
                  <span>Learning Center</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <UsersIcon className="w-5 h-5" />
                  <span>Support Groups</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Emergency Contact</span>
                </a>
              </nav>
            </div>
          )}
        </div>

        {/* Bottom Status */}
        {!sidebarCollapsed && (
          <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-t">
            <div className="text-center">
              <div className="text-sm font-medium text-gray-900 mb-1">
                Cycle #1 Progress
              </div>
              <div className="flex items-center justify-center gap-1 text-sm text-green-600">
                <span>✨</span>
                <span>You're doing great!</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
