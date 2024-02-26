/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Search institutions
     * Returns details for institutions that match the query parameters, up to a maximum of ten institutions per query.
     * @param requestBody 
     * @returns any Successful response
     * @throws ApiError
     */
    public static postInstitutionsSearch(
requestBody: {
/**
 * Your Plaid API client_id
 */
client_id: string;
/**
 * Your Plaid API secret
 */
secret: string;
/**
 * The search query. Institutions with names matching the query are returned.
 */
query: string;
/**
 * Filter the institutions based on whether they support all products listed in products.
 */
products?: Array<'assets' | 'auth' | 'balance' | 'employment' | 'identity' | 'income_verification' | 'investments' | 'liabilities' | 'identity_verification' | 'payment_initiation' | 'standing_orders' | 'transactions' | 'transfer'>;
/**
 * Specify which country or countries to include institutions from.
 */
country_codes: Array<'US' | 'GB' | 'ES' | 'NL' | 'FR' | 'IE' | 'CA' | 'DE' | 'IT' | 'PL' | 'DK' | 'NO' | 'SE' | 'EE' | 'LT' | 'LV' | 'PT' | 'BE'>;
},
): CancelablePromise<{
institutions?: Array<{
/**
 * Unique identifier for the institution.
 */
institution_id?: string;
/**
 * The official name of the institution.
 */
name?: string;
/**
 * A list of the Plaid products supported by the institution.
 */
products?: Array<string>;
/**
 * A list of the country codes supported by the institution.
 */
country_codes?: Array<'US' | 'GB' | 'ES' | 'NL' | 'FR' | 'IE' | 'CA' | 'DE' | 'IT' | 'PL' | 'DK' | 'NO' | 'SE' | 'EE' | 'LT' | 'LV' | 'PT' | 'BE'>;
/**
 * The URL for the institution's website.
 */
url?: string | null;
/**
 * Hexadecimal representation of the primary color used by the institution.
 */
primary_color?: string | null;
/**
 * Base64 encoded representation of the institution's logo.
 */
logo?: string | null;
}>;
}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/institutions/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
