import type { ComponentProps } from "solid-js";
import type TransOverview from "@/components/TransOverview";

export type TransOverviewItem = ComponentProps<typeof TransOverview>;

/** Constants until we get some real data from an API. */
export const TransOverviewItems: TransOverviewItem[] = [
  {
    fromName: "Leslie American",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 420.69,
    cardDigits: "5567"
  },
  {
    fromName: "Hey Leslie",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 69.42,
    cardDigits: "5567"
  },
  {
    fromName: "ImagineBeing Alexander",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 258.69,
    cardDigits: "5567"
  },
  {
    fromName: "Leslie Alexander",
    fromDescription: "Merchandise / Services received",
    fromDate: new Date(),

    cardAmount: 420.69,
    cardDigits: "5567"
  },
  {
    fromName: "Not Him",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 69.42,
    cardDigits: "5567"
  },
  {
    fromName: "Yes Me",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 258.69,
    cardDigits: "5567"
  },
  {
    fromName: "SomeMore RandomNames",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 420.69,
    cardDigits: "5567"
  },
  {
    fromName: "Alexander Leslie",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 69.42,
    cardDigits: "5567"
  },
  {
    fromName: "NotLeslie Alexander",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 258.69,
    cardDigits: "5567"
  },
  {
    fromName: "Leslie Alexander",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 420.69,
    cardDigits: "5567"
  },
  {
    fromName: "Alexander Leslie",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 69.42,
    cardDigits: "5567"
  },
  {
    fromName: "NotLeslie Alexander",
    fromDescription: "Merchandise / Services not received",
    fromDate: new Date(),

    cardAmount: 258.69,
    cardDigits: "5567"
  },
]