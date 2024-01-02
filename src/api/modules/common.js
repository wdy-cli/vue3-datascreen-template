const baseURI = import.meta.env.VITE_API_PROXY_URI
const mockURI = import.meta.env.VITE_API_PROXY_URI_MOCK

export default [
  /**
   * noLoading: 这个接口请求不需要全局loading
   * noNeedOrgId: 这个接口请求不需要 orgId
   */

  // —————————————————————— 常用接口
  ['apiQueryWeather', [`${baseURI}/screen/queryWeather`, 'post', { noLoading: true, noNeedOrgId: true }]], // 查询天气
  ['apiGetStaff', [`${baseURI}/screen/getStaff`, 'post', { noLoading: true, noNeedOrgId: true }]], // 查询工作人员信息
  ['apiRoad', [`${baseURI}/nest/dbapi/event`, 'post', { noLoading: true, noNeedOrgId: true }]], // 查询工作人员信息
  ['getScreenImg', [`${baseURI}/screen/getScreenImg`, 'post', { noLoading: true, noNeedOrgId: true }]], // 查询工作人员信息
  ['getTel', [`${baseURI}/screen/getTel`, 'post', { noLoading: true, noNeedOrgId: true }]], // 查询电话
  ['getNotice', [`${baseURI}/screen/getNotice`, 'post', { noLoading: true, noNeedOrgId: true }]], // 查询电话
  // http://road_api.cico-zshl.com/api/nest/dbapi/event_info?token=60e5645459c9ac3f29852f90e374db84   路况接口

  // 地图接口
  ['getMapData', [`${mockURI}/zhgs_data_syn/dev/level/kanban/home/map`, 'get', { noLoading: true, noNeedOrgId: true }]],
  ['getMapData1', [`${mockURI}/zhgs_data_syn/dev/data/business/indicators`, 'get', { noLoading: true, noNeedOrgId: true }]]
  // ['getMapData', ['/mock/zhgs_data_syn/dev/level/kanban/home/map', 'post', { noLoading: true, noNeedOrgId: true }]]
  // ['getMapData', ['http://183.129.232.106:8925/zhgs_data_syn/dev/level/kanban/home/map', 'post', { noLoading: true, noNeedOrgId: true }]]
]
