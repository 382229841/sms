export default {
  items: [
    {
      name: '用户中心',
      url: '/dashboard',
      icon: 'icon-people',
      badge: {
        variant: 'info',
        text: ''
      }
    },
    {
      title: true,
      name: '短信云',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: '短信群发',
      url: '/masstexting',
      icon: 'icon-envelope-letter',
    },
    {
      name: '短信模板设置',
      url: '/smstemple',
      icon: 'icon-note',
    },
    {
      name: '短信签名',
      url: '/smssign',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: '财务',
      wrapper: {
        element: '',
        attributes: {}
      },
    },
    {
      name: '充值',
      url: '/recharge',
      icon: 'icon-wallet',
    },
    {
      name: '发票申请',
      url: '/invoices',
      icon: 'icon-speech',
    },
    {
      name: '账单',
      url: '/bill',
      icon: 'icon-calculator',
    },
    {
      title: true,
      name: '设置',
      wrapper: {
        element: '',
        attributes: {}
      },
    },
    {
      name: '系统设置',
      url: '/syssetting',
      icon: 'icon-settings',
    },
    {
      name: '账号设置',
      url: '/usersetting',
      icon: 'icon-user',
    }
  ]
};
