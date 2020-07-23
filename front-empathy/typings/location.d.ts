export declare global {
  interface LocationDetail {
    id: string,
    name: string;
    image: string;
    description: string;
    address: string;
    programmeType: string;
    fee: string
    openHour: string;
    instaId: string;
    eventGroup: EventGroup[]
  }

  interface EventGroup {
    date: string;
  }
}
