import type Profile from "../models/Profile";


export function ConvertFullName(profile: Profile): string {
    return profile.firstName + " " + profile.middleName + " " + profile.lastName;
}