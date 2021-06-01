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
  ar: string;
  en: string;
  tr: string;
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
  data?: unknown;
  msg?: string;
  statusCode?: number;
}

/**
 * Elastic Search Type
 *
 * @export
 * @interface ElasticSearchType
 */
export interface ElasticSearchType {
  body?: {
    query?: {
      bool?: {
        filter?: { [name: string]: any };
        must_not?: { [name: string]: any };
      };
      nested?: {
        path?: string;
        query?: {
          bool?: {
            filter?: { [name: string]: any };
          };
        };
      };
    };
    size?: number;
  };
  index?: string;
  size?: number;
  type?: string;
}

export interface ElasticSearchResponse {
  code?: number;
  count?: number;
  hits: {
    hits: { [name: string]: any }[];
    total: {
      value: number;
    };
  };
}

export interface MongoQueryType {
  _id?: string;
  endDate?: {
    $gte?: Date;
  };
  startDate?: {
    $lte?: Date;
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
