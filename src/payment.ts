/**
 * Payment
 *
 * @export
 * @interface Payment
 */
export interface Payment {
  accountId: string;
  accountName: string;
  amount: number;
  bankCharges: number;
  customerId: string;
  date: Date;
  description: string;
  force: boolean;
  invoices: PaymentInvoice[];
  paymentId: string;
  paymentMode: string;
  referenceNumber: string;
  storeId: string;
  unusedAmount: number;
}

/**
 * PaymentResponse
 *
 * @export
 * @interface PaymentResponse
 */
export interface PaymentResponse {
  account_id: string;
  account_name: string;
  amount: number;
  bank_charges: number;
  date: Date;
  description: string;
  invoices: PaymentInvoiceResponse[];
  payment_id: string;
  payment_mode: string;
  payments: [Payment];
  reference: string;
  store_id: string;
  unused_amount: number;
}

/**
 * PaymentInvoice
 *
 * @interface PaymentInvoice
 */
export interface PaymentInvoice {
  amountApplied: number;
  invoiceId: string;
}

/**
 * PaymentInvoiceResponse
 *
 * @interface PaymentInvoiceResponse
 */
export interface PaymentInvoiceResponse {
  amount_applied: number;
  invoice_id: string;
}

/**
 * PaymentRequestParams
 *
 * @interface PaymentRequestParams
 */
export interface PaymentRequestParams {
  account_id: string;
  amount: number;
  bank_charges: number;
  customerId?: string;
  description: string;
  id: string;
  invoices: {
    amount_applied: number;
    invoice_id: string;
  }[];
  limit?: number;
  page?: number;
  paymentMode?: string;
  payment_currency?: string;
  payment_mode: string;
  perPage?: number;
  purchase_units: {
    amount: {
      currency_code: string;
      value: number;
    };
    description?: string;
  }[];
  reference: string;
  referenceNumber?: string;
  reference_number?: string;
  store: string;
}
