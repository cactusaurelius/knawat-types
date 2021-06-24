import { I18nString } from "./common";

/**
 * Zone interface
 *
 * @export
 * @interface Zone
 */
export interface Zone {
  allowed_languages: Uppercase<string>[];
  collect_taxes_from: Uppercase<string>[];
  default_currency: Uppercase<string>;
  description: I18nString;
  domain: string;
  id: string;
  ship_to: Uppercase<string>[];
  title: I18nString;
}
