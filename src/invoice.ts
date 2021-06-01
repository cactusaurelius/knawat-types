/**
 * Invoice type
 *
 * @export
 * @interface Invoice
 */
export interface InvoiceResponse {
  invoice_id: string;
  customer_name: string;
  customer_id: string;
  status: string;
  invoice_number: string;
  reference_number: string;
  date: string;
  due_date: string;
  due_days: string;
  total: number;
  balance: number;
  created_time: string;
  last_modified_time: string;
  shipping_charge: number;
  adjustment: number;
  invoices: [{ invoice_id: string }];
  invoice: { invoiceId: string };
  invoicePayments: [
    {
      invoicePaymentId: string;
      paymentId: string;
      invoiceId: string;
      amountUsed: 0;
    }
  ];
  creditNotes: [
    {
      creditNotesInvoiceId: string;
      creditNoteId: string;
      invoiceId: string;
      amountApplied: 0;
      date: string;
    }
  ];
  code: number;
  message: string;
}

/**
 * Invoice type
 *
 * @export
 * @interface Invoice
 */
export interface Invoice {
  id: string;
  invoiceId: string;
  customerName: string;
  customerId: string;
  status: string;
  invoiceNumber: string;
  referenceNumber: string;
  date: string;
  dueDate: string;
  dueDays: string;
  total: number;
  balance: number;
  createdTime: string;
  lastModifiedTime: string;
  shippingCharge: number;
  adjustment: number;
  message: string;
  code: number;
  invoice: {
    invoiceId: string;
  };
  omsId: string;
  invoice_id: string;
  customer_name: string;
  customer_id: string;
  invoice_number: string;
  reference_number: string;
  due_date: string;
  due_days: string;
  created_time: string;
  last_modified_time: string;
  shipping_charge: number;
  coupon: string;
  items?: InvoiceItems[];
  isInclusiveTax: boolean;
}

/**
 * Invoice Request Params
 *
 * @export
 * @interface InvoiceRequestParams
 */
export interface InvoiceRequestParams {
  id: string;
  storeId: string;
  customerId: string;
  orderId: string;
  items: InvoiceItems[];
  discount: {
    value: number;
    type: string;
  };
  isInclusiveTax: boolean;
  coupon: string;
  dueDate: string;
  useSavedPaymentMethods: string;
  credit: number;
  paymentAmount: number;
  omsId: string;
  invoiceId: string;
  status: string;
  reference_number: string;
}

/**
 * OMS Invoice Apply credit response
 *
 * @export
 * @interface OmsApplyCreditResponse
 */
export interface OmsApplyCreditResponse {
  invoicePayments: [
    {
      invoicePaymentId: string;
      paymentId: string;
      invoiceId: string;
      amountUsed: number;
    }
  ];
  creditNotes: [
    {
      creditNotesInvoiceId: string;
      creditNoteId: string;
      invoiceId: string;
      amountApplied: number;
      date: string;
    }
  ];
  code: number;
  message: string;
}

/**
 * Invoice Items
 *
 * @export
 * @interface InvoiceItems
 */
interface InvoiceItems {
  id?: string;
  sku: string;
  barcode?: string;
  name: string;
  description: string;
  url?: string;
  image?: string;
  weight?: number;
  rate: number;
  quantity: number;
  quantityCancelled?: number;
  productType?: string;
  discount?: string;
  discountAmount?: number;
  total?: number;
  purchaseRate?: number;
  accountId: string;
  taxId: string;
  taxName?: string;
  taxType?: string;
  taxPercentage?: number;
}

export interface InvoiceGetParams {
  page?: number;
  limit?: number;
  reference_number?: string;
  invoice_number?: string;
}
export interface InvoiceApplyCreditsParams {
  id: string;
  useSavedPaymentMethods?: string;
  paymentAmount?: number;
}
