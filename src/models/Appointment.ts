export interface Appointment {
  id?: string;

  patientId?: string;

  patientName?: string;

  appointmentDate?: string;

  slot?: string,

  startTime?: string;

  type?: string;

  endTime?: string;

  doctorName?: string;

  status?: string;

  doctorId?: string;

  paymentStatus?: string;

  appointmentStatus?: string;

  extraFee?: number;

  note?: string;
}
