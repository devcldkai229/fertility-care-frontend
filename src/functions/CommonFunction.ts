import type Profile from "../models/Profile";
import type { SlotSchedule } from "../models/SlotSchedule";


export function ConvertFullName(profile: Profile): string {
    return profile.firstName + " " + profile.middleName + " " + profile.lastName;
}

export function ConvertSlotTime(slot: SlotSchedule): string {
    return slot.startTime + " - " + slot.endTime;
}