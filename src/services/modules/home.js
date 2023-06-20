import reqIns from "..";

export function getHomeGoodPriceData() {
  return reqIns.get({
    url: "/home/goodprice"
  })
}