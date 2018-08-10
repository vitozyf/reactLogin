/**
 * 由pageIndex,pageSize生成数据查询参数offset, limit
 * @param {*} PageIndex 
 * @param {*} PageSize 
 */
const paging = (PageIndex = 1, PageSize = 10) => {
  let pageIndex = Number(PageIndex);
  let limit = Number(PageSize);
  const offset = (pageIndex - 1) * limit;
  return {offset, limit}
}

export {
  paging
}