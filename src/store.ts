import { Address, RoleUser } from "./common";

export interface Store<T = unknown, P = unknown> {
  address: BillingAddress;

  compared_at_price: number;
  compared_at_price_operator: number;
  consumer_key: string;
  consumer_secret: string;
  created: Date;
  credit: number;

  currency: string;
  debit: number;
  external_data: P;

  internal_data: T;
  languages: string[];

  logo: string;
  name: string;

  sale_price: number;
  sale_price_operator: number;
  shipping_methods: ShippingMethod[];

  status:
    | "pending"
    | "confirmed"
    | "unconfirmed"
    | "uninstalled"
    | "archived"
    | "error";
  type:
    | "woocommerce"
    | "magento2"
    | "salla"
    | "expandcart"
    | "opencart"
    | "shopify"
    | "csv"
    | "ebay"
    | "api"
    | "catalog"
    | "youcan"
    | "other";

  updated: Date;

  url: string;
  users: RoleUser<
    "owner" | "support" | "sales" | "accounting" | "products" | "orders"
  >[];
  zone: string;
}

export interface BillingAddress extends Address {
  taxNumber: string;
}

/**
 * Shipment methods priority
 *
 * @export
 * @interface ShippingMethod
 */
interface ShippingMethod {
  name: string;
  sort: number;
}
