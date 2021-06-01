/**
 * I18nText Type definition
 *
 * @export
 * @interface I18nText
 */
export interface I18nText {
  [key: string]: { text: string };
}

/**
 * I18n Type
 */
export interface I18n {
  tr: string;
  en: string;
  ar: string;
}

/**
 * Common Error interface
 *
 * @export
 * @interface CommonError
 */
export interface CommonError extends Error {
  body?: {
    error: {
      index?: string;
      reason?: string;
    };
    status?: number;
  };
  code?: number;
  statusCode?: number;
  msg?: string;
  data?: unknown;
}

/**
 * Elastic Search Type
 *
 * @export
 * @interface ElasticSearchType
 */
export interface ElasticSearchType {
  index?: string;
  size?: number;
  type?: string;
  body?: {
    size?: number;
    query?: {
      nested?: {
        path?: string;
        query?: {
          bool?: {
            filter?: { [name: string]: any };
          };
        };
      };
      bool?: {
        filter?: { [name: string]: any };
        must_not?: { [name: string]: any };
      };
    };
  };
}

export interface ElasticSearchResponse {
  hits: {
    total: {
      value: number;
    };
    hits: { [name: string]: any }[];
  };
  code?: number;
  count?: number;
}

export interface MongoQueryType {
  _id?: string;
  startDate?: {
    $lte?: Date;
  };
  endDate?: {
    $gte?: Date;
  };
  type?: string;
}

/**
 * This is the template of OMS Response
 *
 * @export
 * @type ZohoResponse
 * @template T
 */
export type OMSResponse<T> = { [P in keyof T]: T[P] } & {
  code: number;
  message: string;
  page_context: {
    has_more_page: boolean;
    page: number;
    per_page: number;
    search_criteria: {
      column_name: string;
      comparator: string;
      search_text: string;
      search_text_formatted: string;
    }[];
    sort_column: string;
    sort_order: string;
  };
};
