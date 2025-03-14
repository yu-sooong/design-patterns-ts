import {DataFetcher} from "./dataFetcher";

export class CachingProxy {

    // 使用 Map 做快取儲存
    private cache: Map<string, string> = new Map();

    // 內部真實的 DataFetcher 獲取數據
    private realFetch: DataFetcher = new DataFetcher();

    fetchData(key: string): string {
        // 檢查是否有快取
        if (this.cache.has(key)) {
            // console.log(`Returning cached data for key: ${key}`);
            return this.cache.get(key) as string;
        }

        // 若沒快取中沒有 key 使用 realFetch 獲取數據
        const data = this.realFetch.fetchData(key);

        // 寫入快取
        this.cache.set(key, data);

        return data;
    }
}