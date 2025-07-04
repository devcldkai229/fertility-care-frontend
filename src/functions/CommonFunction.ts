import type Profile from "../models/Profile";
import type { SlotSchedule } from "../models/SlotSchedule";
import {
  STEP_COMPLETED,
  STEP_FAILED,
  STEP_PROGRESS,
} from "../constants/StepStatus";
import type OrderStep from "../models/OrderStep";

export function ConvertFullName(profile: Profile): string {
  return profile.firstName + " " + profile.middleName + " " + profile.lastName;
}

export function ConvertSlotTime(slot: SlotSchedule): string {
  return slot.startTime + " - " + slot.endTime;
}

export const calculateCompletedPercentage = (steps: OrderStep[]): number => {
  if (!steps || steps.length === 0) return 0;
  const completedCount = steps.filter((step) => step.status === STEP_COMPLETED).length;
  const percentage = (completedCount / steps.length) * 100;
  return Math.floor(percentage); 
};


export function getStepCardBg(status: string): string {
  switch (status) {
    case STEP_COMPLETED:
      return "bg-green-50";
    case STEP_PROGRESS:
      return "bg-blue-50";
    case STEP_FAILED:
      return "bg-red-50";
    default:
      return "bg-white";
  }
}

export function getStepBySelectedStepDetail(
  steps: OrderStep[],
  selectedStepDetail: number
): OrderStep | undefined {
  return steps.find((x) => x.id === selectedStepDetail);
}

