import {CachingProxy} from "../patterns/proxy/cachingProxy";
import {DataFetcher} from "../patterns/proxy/dataFetcher";

describe("CachingProxy", () => {
    beforeEach(() => {
        jest.restoreAllMocks(); // 在每個測試開始前清除 mock
    });
    test("should call fetchData only once per unique key", () => {
        const proxy = new CachingProxy();
        const realFetcherSpy = jest.spyOn(DataFetcher.prototype, "fetchData");
        // const consoleSpy = jest.spyOn(console, "log");

        proxy.fetchData("user1"); // 第一次請求，應該呼叫 fetchData
        proxy.fetchData("user1"); // 第二次請求，相同 key，應該命中快取

        // 確保 fetchData 只被呼叫一次（因為第二次應該命中快取）
        expect(realFetcherSpy).toHaveBeenCalledTimes(1);

        // 確保有正確的 console.log 訊息
        // expect(consoleSpy).toHaveBeenCalledWith("Fetching data for key: user1");
        // expect(consoleSpy).toHaveBeenCalledWith("Returning cached data for key: user1");

        realFetcherSpy.mockRestore();
    });
})
