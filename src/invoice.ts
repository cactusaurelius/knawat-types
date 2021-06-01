/**
 * Invoice type
 *
 * @export
 * @interface Invoice
 */
export interface InvoiceResponse {
  adjustment: number;
  balance: number;
  code: number;
  created_time: string;
  creditNotes: [
    {
      amountApplied: 0;
      creditNoteId: string;
      creditNotesInvoiceId: string;
      date: string;
      invoiceId: string;
    }
  ];
  customer_id: string;
  customer_name: string;
  date: string;
  due_date: string;
  due_days: string;
  total: number;
  invoicePayments: [
    {
      amountUsed: 0;
      invoiceId: string;
      invoicePaymentId: string;
      paymentId: string;
    }
  ];
  invoice_id: string;
  invoice_number: string;
  invoices: [{ invoice_id: string }];
  last_modified_time: string;
  message: string;
  reference_number: string;
  shipping_charge: number;
  status: string;
  invoice: { invoiceId: string };
}

/**
 * Invoice type
 *
 * @export
 * @interface Invoice
 */
export interface Invoice {
  adjustment: number;
  balance: number;
  code: number;
  coupon: string;
  createdTime: string;
  created_time: string;
  customerId: string;
  customerName: string;
  customer_id: string;
  customer_name: string;
  total: number;
  invoiceId: string;
  status: string;
  due_date: string;
  due_days: string;
  id: string;
  message: string;
  date: string;
  invoiceNumber: string;
  invoice_id: string;
  omsId: string;
  isInclusiveTax: boolean;
  dueDate: string;
  lastModifiedTime: string;
  reference_number: string;
  invoice_number: string;
  shippingCharge: number;
  referenceNumber: string;
  last_modified_time: string;
  shipping_charge: number;
  invoice: {
    invoiceId: string;
  };
  items?: InvoiceItems[];
  dueDays: string;
}

/**
 * Invoice Request Params
 *
 * @export
 * @interface InvoiceRequestParams
 */
export interface InvoiceRequestParams {
  coupon: string;
  credit: number;
  customerId: string;
  discount: {
    type: string;
    value: number;
  };
  dueDate: string;
  id: string;
  invoiceId: string;
  isInclusiveTax: boolean;
  items: InvoiceItems[];
  omsId: string;
  orderId: string;
  paymentAmount: number;
  reference_number: string;
  status: string;
  storeId: string;
  useSavedPaymentMethods: string;
}

/**
 * OMS Invoice Apply credit response
 *
 * @export
 * @interface OmsApplyCreditResponse
 */
export interface OmsApplyCreditResponse {
  code: number;
  creditNotes: [
    {
      amountApplied: number;
      creditNoteId: string;
      creditNotesInvoiceId: string;
      date: string;
      invoiceId: string;
    }
  ];
  invoicePayments: [
    {
      amountUsed: number;
      invoiceId: string;
      invoicePaymentId: string;
      paymentId: string;
    }
  ];
  message: string;
}

/**
 * Invoice Items
 *
 * @export
 * @interface InvoiceItems
 */
interface InvoiceItems {
  accountId: string;
  barcode?: string;
  description: string;
  discount?: string;
  discountAmount?: number;
  id?: string;
  image?: string;
  name: string;
  productType?: string;
  purchaseRate?: number;
  quantity: number;
  quantityCancelled?: number;
  rate: number;
  sku: string;
  taxId: string;
  taxName?: string;
  taxPercentage?: number;
  total?: number;
  weight?: number;
  taxType?: string;
  url?: string;
}

export interface InvoiceGetParams {
  invoice_number?: string;
  limit?: number;
  page?: number;
  reference_number?: string;
}
export interface InvoiceApplyCreditsParams {
  id: string;
  paymentAmount?: number;
  useSavedPaymentMethods?: string;
}
