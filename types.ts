
export enum MonthlyCallVolume {
  LOW = "0 - 100 calls/month",
  MEDIUM = "100 - 500 calls/month",
  HIGH = "500 - 1000 calls/month",
  ELITE = "1000+ calls/month"
}

export interface DemoFormData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  phone: string;
  callVolume: MonthlyCallVolume;
  demoTime: string;
}

export interface AudioCard {
  id: string;
  title: string;
  description: string;
  revenueImpact: string;
}
