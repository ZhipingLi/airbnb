import reqIns from "..";

export function getEntireRoomList(offset, size) {
  return reqIns.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}