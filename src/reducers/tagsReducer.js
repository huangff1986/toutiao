const initialState = [
  {title: '关注', static: true, active: true},
  {title: '推荐', static: true, active: true},
  {title: '热点', static: false, active: true},
  {title: '襄阳', static: false, active: true},
  {title: '视频', static: false, active: true},
  {title: '头条号', static: false, active: true},
  {title: '社会', static: false, active: true},
  {title: '娱乐', static: false, active: true},
  {title: '问答', static: false, active: true},
  {title: '汽车', static: false, active: true},
  {title: '财经', static: false, active: true},
  {title: '军事', static: false, active: true},
  {title: '体育', static: false, active: true},
  {title: '段子', static: false, active: true},
  {title: '街拍', static: false, active: true},
  {title: '时尚', static: false, active: true},
  {title: '房产', static: false, active: true},
  {title: '科技', static: false, active: false},
  {title: '国际', static: false, active: false},
  {title: '趣图', static: false, active: false},
  {title: '健康', static: false, active: false},
  {title: '特卖', static: false, active: false},
  {title: '小说', static: false, active: false},
  {title: '历史', static: false, active: false},
  {title: '育儿', static: false, active: false},
  {title: '直播', static: false, active: false},
  {title: '搞笑', static: false, active: false},
  {title: '数码', static: false, active: false},
  {title: '美食', static: false, active: false},
  {title: '养生', static: false, active: false},
  {title: '电影', static: false, active: false},
  {title: '手机', static: false, active: false},
  {title: '旅游', static: false, active: false},
  {title: '宠物', static: false, active: false},
  {title: '情感', static: false, active: false},
  {title: '家具', static: false, active: false},
  {title: '教育', static: false, active: false},
  {title: '三农', static: false, active: false},
  {title: '孕产', static: false, active: false},
  {title: '文化', static: false, active: false},
  {title: '游戏', static: false, active: false},
  {title: '股票', static: false, active: false},
  {title: '科学', static: false, active: false},
  {title: '动漫', static: false, active: false},
  {title: '故事', static: false, active: false},
  {title: '收藏', static: false, active: false},
  {title: '精选', static: false, active: false},
  {title: '语录', static: false, active: false},
  {title: '星座', static: false, active: false},
  {title: '美图', static: false, active: false},
  {title: '辟谣', static: false, active: false},
  {title: '科技', static: false, active: false}
]

// 定义 actionType
export const actionTypes = {
  GET_ALL_TAGS: "GET_ALL_TAGS",
  SET_TAGS: "RESPONSE_GET_ALL_TAGS",
  DELETE_TAG:"DELETE_TAG",
  ADD_TAG:"ADD_TAG"
};

// 定义 actionCreater
export const actions = {
  get_all_tags: function() {
    return {
      type: actionTypes.GET_ALL_TAGS
    }
  },
  delete_tag: function (name) {
    return{
      type: actionTypes.DELETE_TAG,
      name
    }
  },
  add_tag: function(name) {
    return {
      type: actionTypes.ADD_TAG,
      name
    }
  }
}

// reducer

export function reducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.SET_TAGS:
      return [...action.data]
    default:
      return state
  }
}