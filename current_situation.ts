// Libs
namespace Constants {
    export const GB = { id: 1, code: 'GB', lang: 'en' } as const;
    export const FR = { id: 1, code: 'FR', lang: 'fr' } as const;
    export const DE = { id: 1, code: 'DE', lang: 'de' } as const;
    export const US = { id: 1, code: 'US', lang: 'en' } as const;
    export const ES = { id: 1, code: 'ES', lang: 'es' } as const;
    export const CA = { id: 1, code: 'CA', lang: 'en' } as const;
    export const IT = { id: 1, code: 'IT', lang: 'it' } as const;
    export const AU = { id: 1, code: 'AU', lang: 'en' } as const;
    export const COUNTRIES = [GB, FR, DE, US, ES, CA, IT, AU];
}
namespace SegmentAPI {
    export enum CountryCode {
        GB = 'GB',
        FR = 'FR',
        US = 'US',
        DE = 'DE',
        ES = 'ES',
        CA = 'CA',
        IT = 'IT',
    }
    export type RequestParams = {
        id: number;
        countryCode: CountryCode;
    }
}
class SegmentApi {
    getSegments(params: SegmentAPI.RequestParams): [] {
        return [];
    }
}



// Sense FE
{
    const GB = { id: 1, code: 'gb', lang: 'en' } as const;
    const FR = { id: 1, code: 'fr', lang: 'fr' } as const;
    const DE = { id: 1, code: 'de', lang: 'de' } as const;
    const COUNTRIES = [GB, FR, DE];

    type Country = typeof GB.code | typeof FR.code | typeof DE.code;
    enum COUNTRY_CODE {
        GB = 'GB',
        FR = 'FR',
        DE = 'DE',
    }


    // models
    class Model1 {
        // Model1 not typed [.js]

        request(params) {
            // this is sending request to api
        }

        method1(params) {
            this.request({ ...params, countryCode: params.countryCode || 'GB' })
        }
        method2(params) {
            this.request({ ...params, countryCode: params.countryCode || GB.code.toUpperCase() })
        }
        method3(params) {
            this.request({ ...params, countryCode: params.countryCode || Constants.GB.code })
        }
        method4(params) {
            // here is another one country code type
            enum countryCode {
                gb = 'gb',
                fr = 'gb',
                de = 'de',
            }
            this.request({ ...params, countryCode: params.countryCode || countryCode.gb })
        }
        method5(params) {
            this.request({ ...params, countryCode: params.countryCode || COUNTRY_CODE.GB })
        }
        method6(params) {
            this.request({ ...params, countryCode: params.countryCode || SegmentAPI.CountryCode.GB })
        }

    }
    class Model2 {
        // Model2 bad typed [.ts]

        request(params: { id: number; countryCode: string }) {
            // this is sending request to api
        }

        method1(params: { id: number; countryCode?: string }) {
            this.request({ ...params, countryCode: params.countryCode || 'GB' })
        }
        method2(params: { id: number; countryCode?: Country }) {
            this.request({ ...params, countryCode: params.countryCode || GB.code })
        }
        method3(params: { id: number; countryCode?: typeof Constants.GB.code | typeof Constants.FR.code | typeof Constants.DE.code }) {
            this.request({ ...params, countryCode: params.countryCode || Constants.GB.code })
        }
        method4(params: { id: number; countryCode?: COUNTRY_CODE }) {
            // here is another one country code type
            enum countryCode {
                gb = 'gb',
                fr = 'gb',
                de = 'de',
            }
            this.request({ ...params, countryCode: params.countryCode || countryCode.gb })
        }
        method5(params: { id: number; countryCode?: COUNTRY_CODE }) {
            this.request({ ...params, countryCode: params.countryCode || COUNTRY_CODE.GB })
        }
        method6(params: { id: number; countryCode?: SegmentAPI.CountryCode }) {
            this.request({ ...params, countryCode: params.countryCode || SegmentAPI.CountryCode.GB })
        }
    }
    class Model3 {
        // Model3 better typed [.ts]

        request(params: { id: number; countryCode: 'GB' | 'FR' | 'DE' }) {
            // this is sending request to api
        }

        method1(params: { id: number; countryCode?: 'GB' | 'FR' | 'DE' }) {
            this.request({ ...params, countryCode: params.countryCode || 'GB' })
        }
        method2(params: { id: number; countryCode?: COUNTRY_CODE }) {
            this.request({ ...params, countryCode: params.countryCode || GB.code.toUpperCase() as 'GB' })
        }
        method3(params: { id: number; countryCode?: typeof Constants.GB.code | typeof Constants.FR.code | typeof Constants.DE.code }) {
            this.request({ ...params, countryCode: params.countryCode || Constants.GB.code })
        }
        method4(params: { id: number; countryCode?: unknown }) {
            // here is another one country code type
            enum countryCode {
                gb = 'gb',
                fr = 'gb',
                de = 'de',
            }
            this.request({ ...params, countryCode: (params.countryCode || countryCode.gb) as COUNTRY_CODE })
        }
        method5(params: { id: number; countryCode?: any }) {
            this.request({ ...params, countryCode: params.countryCode || COUNTRY_CODE.GB })
        }
        method6(params: { id: number; countryCode?: COUNTRY_CODE }) {
            this.request({ ...params, countryCode: params.countryCode || SegmentAPI.CountryCode.GB })
        }
    }

    // stores
    class Store1 {
        // Store1 not typed [.js]

        model = new Model1()

        method1() {
            this.model.method1({ id: 1, countryCode: SegmentAPI.CountryCode.FR });
        }
        method2() {
            this.model.method2({ id: 1, countryCode: 'FR' });
        }
        method3() {
            this.model.method3({ id: 1, countryCode: COUNTRIES[1] });
        }
        method4() {
            this.model.method4({ id: 1, countryCode: COUNTRY_CODE.FR });
        }
        method5() {
            this.model.method5({ id: 1, countryCode: FR.code });
        }
        method6() {
            this.model.method6({ id: 1, countryCode: Constants.FR.code });
        }
    }
    class Store2 {
        // Store2 bad typed [.ts]

        model = new Model2()

        method1() {
            this.model.method1({ id: 1, countryCode: 'fr' });
        }
        method2() {
            this.model.method2({ id: 1, countryCode: FR.code });
        }
        method3() {
            this.model.method3({ id: 1, countryCode: COUNTRY_CODE.FR });
        }
        method4() {
            this.model.method4({ id: 1, countryCode: Constants.FR.code as COUNTRY_CODE });
        }
        method5() {
            this.model.method5({ id: 1, countryCode: FR.code.toUpperCase() as COUNTRY_CODE });
        }
        method6() {
            this.model.method6({ id: 1, countryCode: SegmentAPI.CountryCode.FR });
        }
    }
    class Store3 {
        // Store3 better typed [.ts]

        model = new Model3()

        method1() {
            this.model.method1({ id: 1, countryCode: 'FR' });
        }
        method2() {
            this.model.method2({ id: 1, countryCode: COUNTRY_CODE.FR });
        }
        method3() {
            this.model.method3({ id: 1, countryCode: FR.code.toUpperCase() as 'FR' });
        }
        method4() {
            this.model.method4({ id: 1, countryCode: Constants.FR.code });
        }
        method5() {
            this.model.method5({ id: 1, countryCode: FR.code });
        }
        method6() {
            this.model.method6({ id: 1, countryCode: COUNTRY_CODE.FR });
        }
    }
}

// Insight API
{
    enum CountryCode {
        GB = 'GB',
        FR = 'FR',
        DE = 'DE',
        IT = 'IT',
    }
    type Brand = {
        countryCode: CountryCode;
    }

    const getCountryCode = (countryCode: CountryCode): Exclude<CountryCode, 'IT' | 'DE'> => {
        if (countryCode === CountryCode.IT) return CountryCode.GB;
        if (countryCode === CountryCode.DE) return  CountryCode.FR

        return countryCode;
    }

    class Service {
        elastic = new Query();
        segmentApi = new SegmentApi();

        method1(brand: Brand) {
            return this.elastic.method1(brand);
        }
        method2(brand: Brand) {
            return this.elastic.method2(brand.countryCode);
        }
        method3(brand: Brand) {
            const segments = this.segmentApi.getSegments({
                id: 1,
                countryCode: getCountryCode(brand.countryCode) as unknown as SegmentAPI.CountryCode
            });
            return this.elastic.method3(brand, segments);
        }
    }

    // Elastic Queries
    class Query {
        method1(brand: Brand) {}
        method2(countryCode: CountryCode) {}
        method3(brand: Brand, segments: []) {
            const validCountryCode = getCountryCode(brand.countryCode);
            //...
        }
    }
}

// Sense API
{
    const GB = { id: 1, code: 'gb', lang: 'en' } as const;
    const FR = { id: 1, code: 'fr', lang: 'fr' } as const;
    const DE = { id: 1, code: 'de', lang: 'de' } as const;
    const COUNTRIES = [GB, FR, DE];

    type Country = typeof GB.code | typeof FR.code | typeof DE.code;
    enum COUNTRY_CODE {
        GB = 'GB',
        FR = 'FR',
        DE = 'DE',
    }

    const getCountryCode = (countryCode: Country): Uppercase<Country> => {
        if (countryCode.toUpperCase() === COUNTRY_CODE.DE) return COUNTRY_CODE.GB;

        return countryCode.toUpperCase() as Uppercase<Country>;
    }

    class Service {
        dal = new Dal();
        segmentApi = new SegmentApi();

        method1(req) {
            return this.dal.method1(req);
        }
        method2(req: { countryCode: string }) {
            return this.dal.method2(req.countryCode);
        }
        method3(req: { countryCode: Country }) {
            const segments = this.segmentApi.getSegments({
                id: 1,
                countryCode: getCountryCode(req.countryCode) as unknown as SegmentAPI.CountryCode
            });
            return this.dal.method3(req.countryCode, segments);
        }
        method4(req: { countryCode: COUNTRY_CODE }) {
            return this.dal.method1(req.countryCode);
        }
        method5(req: { countries: typeof COUNTRIES}) {
            return this.dal.method4(req.countries);
        }
    }

    class Dal {
        method1(countryCode: COUNTRY_CODE) {}
        method2(countryCode: string) {
            const country = COUNTRIES.some(country => country.code.toUpperCase() === countryCode);
            //...
        }
        method3(countryCode: Country, segments: []) {
            const validCountryCode = getCountryCode(countryCode);
            //...
        }
        method4(countries: typeof COUNTRIES) {
            const country = countries.some(country => country.code.toUpperCase() === COUNTRY_CODE.DE);
            //...
        }
    }
}
