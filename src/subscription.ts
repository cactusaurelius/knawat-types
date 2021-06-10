/**
 * User subscription
 *
 * @export
 * @interface Subscription
 */
export interface Subscription {
  autoRenew?: boolean;
  createdAt: Date;
  donor?: string;
  expireDate: Date;
  id: string;
  invoiceId: string;
  membershipId: string;
  paymentGateway: string;
  reference?: string;
  renewed?: boolean;
  retries?: Date[];
  startDate: Date;
  status: "active" | "canceled" | "unpaid" | "incomplete" | "incomplete_expired" | "trialing" | "past_due";
  storeId: string;
  updatedAt: Date;
}
