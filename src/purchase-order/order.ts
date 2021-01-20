import { Address } from "../common";
import { Bill } from "../bill";
import { PurchaseOrderComment } from "./comment";
import { PurchaseOrderItem } from "./item";
import { PurchaseReceive } from "./receive";
import { PurchaseTax } from "./tax";
import { SalesOrder } from "../sales-order";

export interface PurchaseOrder {
  adjustment: number;
  adjustmentDescription: string;
  attention: string;
  billedStatus: string;
  bills: Bill[];
  comments: PurchaseOrderComment[];
  createdTime: string;
  currencyCode: string;
  currencySymbol: string;
  date: Date;
  deliveryCustomerId: string;
  deliveryCustomerName: string;
  deliveryDate: Date;
  deliveryOrgAddressId: string;
  exchangeRate: number;
  expectedDeliveryDate: Date;
  isDropShipment: boolean;
  isInclusiveTax: boolean;
  items: PurchaseOrderItem[];
  lastModifiedTime: Date;
  notes: string;
  orderStatus: string;
  po_status: string;
  purchaseorderId: string;
  purchaseorderNumber: string;
  purchasereceives: PurchaseReceive[];
  receivedStatus: string;
  referenceNumber: string;
  salesorderId: string;
  salesorders: SalesOrder[];
  shipVia: string;
  shipmentTrackingNumber?: string;
  shipping: Address[];
  status: string;
  subTotal: number;
  subTotalInclusiveOfTax: number;
  taxTotal: number;
  taxes: PurchaseTax[];
  terms: string;
  total: number;
}
