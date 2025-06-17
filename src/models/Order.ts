import type { Doctor } from "./Doctor";
import type OrderStep from "./OrderStep";
import type { Patient } from "./Patient";

export interface Order {
    id?: string,
    
    patient?: Patient,

    doctor?: Doctor,

    startDate?: string,

    endDate?: string,

    totalAmount?: number,

    note?: string,

    totalEggs?: number,

    createdAt?: string,

    updatedAt?: string,

    orderSteps?: OrderStep[]

} 