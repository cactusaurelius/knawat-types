import { Address } from "../common";
import { SalesOrderInvoice } from "./invoice";
import { SalesOrderItem } from "./item";
import { SalesOrderTax } from "./tax";

export interface SalesOrder {
  adjustment: number;
  adjustmentDescription: string;
  coupon: string;
  createDate: Date;
  discount: number;
  externalId: string;
  financialStatus:
    | "unpaid"
    | "paid"
    | "partially_paid"
    | "voided"
    | "wallet_refunded"
    | "wallet_partially_refunded"
    | "refunded"
    | "partially_refunded";
  fulfillmentStatus:
    | "pending"
    | "processing"
    | "packed"
    | "shipped"
    | "delivered"
    | "voided";
  hasQtyCancelled: boolean;
  id: string;
  invoice_url: string;
  invoices: SalesOrderInvoice[];
  isInclusiveTax: boolean;
  items: Partial<SalesOrderItem>[];
  notes: string;
  orderNumber: string;
  shipmentDate: Date;
  shipping: Address;
  shippingCharge: number;
  shipping_charge: number;
  shipping_method: string;
  status: string;
  subscription: string;
  taxTotal: number;
  taxes: SalesOrderTax[];
  total: number;
  trackingNumber: string;
  updateDate: Date;
  warnings: string[];
  warningsSnippet: string;
}
