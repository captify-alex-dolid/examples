// Libs
namespace General {
    export enum CountryCode {
        GB = 'GB',
        FR = 'FR',
        US = 'US',
        DE = 'DE',
        ES = 'ES',
        CA = 'CA',
        IT = 'IT',
        AU = 'AU',
    }
}
namespace Constants {
    export const GB = { id: 1, code: General.CountryCode.GB, lang: 'en' } as const;
    export const FR = { id: 1, code: General.CountryCode.FR, lang: 'fr' } as const;
    export const DE = { id: 1, code: General.CountryCode.DE, lang: 'de' } as const;
    export const US = { id: 1, code: General.CountryCode.US, lang: 'en' } as const;
    export const ES = { id: 1, code: General.CountryCode.ES, lang: 'es' } as const;
    export const CA = { id: 1, code: General.CountryCode.CA, lang: 'en' } as const;
    export const IT = { id: 1, code: General.CountryCode.IT, lang: 'it' } as const;
    export const AU = { id: 1, code: General.CountryCode.AU, lang: 'en' } as const;
    export const COUNTRIES = [GB, FR, DE, US, ES, CA, IT, AU];
}
namespace SegmentAPI {
    export type RequestParams = {
        id: number;
        countryCode: Exclude<General.CountryCode, General.CountryCode.AU>;
    }
}
class SegmentApi {
    getSegments(params: SegmentAPI.RequestParams): [] {
        return [];
    }
}



// Sense FE
{
    const COUNTRIES = [Constants.GB, Constants.FR, Constants.DE];
    type CountryCode = Extract<General.CountryCode.GB | General.CountryCode.FR | General.CountryCode.DE, General.CountryCode>;

    // models
    class Model1 {
        // Model1 not typed [.js]

        request({ countryCode = General.CountryCode.GB, ...otherParams }) {
            // this is sending request to api
        }

        method1(params) {
            this.request(params)
        }
        method2(params) {
            this.request(params)
        }
        method3(params) {
            this.request(params)
        }
        method4(params) {
            this.request(params)
        }
        method5(params) {
            this.request(params)
        }
        method6(params) {
            this.request(params)
        }

    }
    class Model2 {
        // Model2 bad typed [.ts]

        request({ countryCode = General.CountryCode.GB, ...otherParams }: { id: number; countryCode?: CountryCode }) {
            // this is sending request to api
        }

        method1(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method2(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method3(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method4(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method5(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method6(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
    }
    class Model3 {
        // Model3 better typed [.ts]

        request({ countryCode = General.CountryCode.GB, ...otherParams }: { id: number; countryCode?: CountryCode }) {
            // this is sending request to api
        }

        method1(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method2(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method3(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method4(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method5(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
        method6(params: { id: number; countryCode?: CountryCode }) {
            this.request(params)
        }
    }

    // stores
    class Store1 {
        // Store1 not typed [.js]

        model = new Model1()

        method1() {
            this.model.method1({ id: 1, countryCode: General.CountryCode.FR });
        }
        method2() {
            this.model.method2({ id: 1, countryCode: General.CountryCode.GB });
        }
        method3() {
            this.model.method3({ id: 1, countryCode: General.CountryCode.DE });
        }
        method4() {
            this.model.method4({ id: 1, countryCode: General.CountryCode.DE });
        }
        method5() {
            this.model.method5({ id: 1, countryCode: General.CountryCode.FR });
        }
        method6() {
            this.model.method6({ id: 1, countryCode: General.CountryCode.FR });
        }
    }
    class Store2 {
        // Store2 bad typed [.ts]

        model = new Model2()

        method1() {
            this.model.method1({ id: 1, countryCode: General.CountryCode.FR });
        }
        method2() {
            this.model.method2({ id: 1, countryCode: General.CountryCode.FR });
        }
        method3() {
            this.model.method3({ id: 1, countryCode: General.CountryCode.GB });
        }
        method4() {
            this.model.method4({ id: 1, countryCode: General.CountryCode.DE });
        }
        method5() {
            this.model.method5({ id: 1, countryCode: General.CountryCode.FR });
        }
        method6() {
            this.model.method6({ id: 1, countryCode: General.CountryCode.FR });
        }
    }
    class Store3 {
        // Store3 better typed [.ts]

        model = new Model3()

        method1() {
            this.model.method1({ id: 1, countryCode: General.CountryCode.FR });
        }
        method2() {
            this.model.method2({ id: 1, countryCode: General.CountryCode.FR });
        }
        method3() {
            this.model.method3({ id: 1, countryCode: General.CountryCode.GB });
        }
        method4() {
            this.model.method4({ id: 1, countryCode: General.CountryCode.DE });
        }
        method5() {
            this.model.method5({ id: 1, countryCode: General.CountryCode.FR });
        }
        method6() {
            this.model.method6({ id: 1, countryCode: General.CountryCode.FR });
        }
    }
}

// Insight API
{
    type CountryCode = Extract<General.CountryCode.GB | General.CountryCode.FR | General.CountryCode.DE | General.CountryCode.IT, General.CountryCode>;
    type Brand = {
        countryCode: CountryCode;
    }

    const getCountryCode = (countryCode: CountryCode): Exclude<CountryCode, 'IT' | 'DE'> => {
        if (countryCode === General.CountryCode.IT) return General.CountryCode.GB;
        if (countryCode === General.CountryCode.DE) return  General.CountryCode.FR

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
            const segments = this.segmentApi.getSegments({ id: 1, countryCode: getCountryCode(brand.countryCode) });
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
    const COUNTRIES = [Constants.GB, Constants.FR, Constants.DE];
    type CountryCode = Extract<General.CountryCode.GB | General.CountryCode.FR | General.CountryCode.DE, General.CountryCode>;

    const getCountryCode = (countryCode: CountryCode): Exclude<CountryCode, General.CountryCode.DE> => {
        if (countryCode === General.CountryCode.DE) return General.CountryCode.GB;

        return countryCode;
    }

    class Service {
        dal = new Dal();
        segmentApi = new SegmentApi();

        method1(req) {
            return this.dal.method1(req);
        }
        method2(req: { countryCode: CountryCode }) {
            return this.dal.method2(req.countryCode);
        }
        method3(req: { countryCode: CountryCode }) {
            const segments = this.segmentApi.getSegments({
                id: 1,
                countryCode: getCountryCode(req.countryCode)
            });
            return this.dal.method3(req.countryCode, segments);
        }
        method4(req: { countryCode: CountryCode }) {
            return this.dal.method1(req.countryCode);
        }
        method5(req: { countries: typeof COUNTRIES}) {
            return this.dal.method4(req.countries);
        }
    }

    class Dal {
        method1(countryCode: CountryCode) {}
        method2(countryCode: CountryCode) {
            const country = COUNTRIES.some(country => country.code === countryCode);
            //...
        }
        method3(countryCode: CountryCode, segments: []) {
            const validCountryCode = getCountryCode(countryCode);
            //...
        }
        method4(countries: typeof COUNTRIES) {
            const country = countries.some(country => country.code === General.CountryCode.DE);
            //...
        }
    }
}
