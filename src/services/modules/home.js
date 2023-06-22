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

export function getHomeLongForData() {
  return reqIns.get({
    url: "/home/longfor"
  })
}

export function getHomePlusData() {
  return reqIns.get({
    url: "/home/plus"
  })
}