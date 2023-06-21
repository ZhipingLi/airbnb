import reqIns from "..";

export function getHomeGoodPriceData() {
  return reqIns.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return reqIns.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return reqIns.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return reqIns.get({
    url: "/home/hotrecommenddest"
  })
}