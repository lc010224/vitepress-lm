// nav导航栏配置
import { TeekIcon, VdoingIcon, SSLIcon, BlogIcon } from "./icon/NavIcon";
export const Nav = [
    { text: "🏡首页", link: "/" },





    // 笔记
    {
      text: '📚生命不息',
      items: [
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/linux.svg" alt="" style="width: 16px; height: 16px;">
              <span>docker</span>
            </div>
            `,
          link: '/docker/docker-index',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/前端.svg" alt="" style="width: 16px; height: 16px;">
              <span>NAS</span>
            </div>
            `,
          link: '/nas/nas-index',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/编程.svg" alt="" style="width: 16px; height: 16px;">
              <span>markdown</span>
            </div>
            `,
          link: '/md/md-index',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/黑客.svg" alt="" style="width: 16px; height: 16px;">
              <span>vitepress</span>
            </div>
            `,
          link: '/vp/vp-index',
        },
      ],
    },  

    // 专题
    {
      text: '🛠️折腾不止',
      items: [
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/teek.svg" alt="" style="width: 16px; height: 16px;">
              <span>docker容器</span>
            </div>
            `,
          link: '/container/container-index',
        },        
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/博客.svg" alt="" style="width: 16px; height: 16px;">
              <span>常用脚本</span>
            </div>
            `,
          link: '/script/script-index',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/前端demo.svg" alt="" style="width: 16px; height: 16px;">
              <span>PT</span>
            </div>
            `,
          link: '/pt/pt-index',
        },
      ],
    },  







    // 生活
    {
      text: '🏓享受生活',
      items: [
        {
          // 分组标题1
          text: '成长进步',
          items: [
            {
              text: `
                <div style="display: flex; align-items: center; gap: 4px;">
                  <img src="/img/nav/精神小屋.svg" alt="" style="width: 16px; height: 16px;">
                  <span>历史</span>
                </div>
                `,
              link: '/achieve/history-index',
            },
            {
              text: `
                <div style="display: flex; align-items: center; gap: 4px;">
                  <img src="/img/nav/时间管理.svg" alt="" style="width: 16px; height: 16px;">
                  <span>经济</span>
                </div>
                `,
              link: '/achieve/economy-index',
            },
            // { text: "💖情侣空间", link: "https://fxj.onedayxyy.cn/" },
          ],
        },
        {
          // 分组标题2
          text: '娱乐至死',
          items: [
            {
              text: `
                <div style="display: flex; align-items: center; gap: 4px;">
                  <img src="/img/nav/相册.svg" alt="" style="width: 16px; height: 16px;">
                  <span>相册</span>
                </div>
                `,
              link: '/entertainment/photo-index',
            },
            {
              text: `
                <div style="display: flex; align-items: center; gap: 4px;">
                  <img src="/img/nav/电影.svg" alt="" style="width: 16px; height: 16px;">
                  <span>电影</span>
                </div>
                `,
              link: '/entertainment/movie-index',
            },
            {
              text: `
                <div style="display: flex; align-items: center; gap: 4px;">
                  <img src="/img/nav/音乐.svg" alt="" style="width: 16px; height: 16px;">
                  <span>音乐</span>
                </div>
                `,
              link: '/entertainment/music-index',
            },
          ],
        },
        // 兴趣
        {
          text: '天下之大',
          items: [
            {
              text: `
                <div style="display: flex; align-items: center; gap: 4px;">
                  <img src="/img/nav/旅行.svg" alt="" style="width: 16px; height: 16px;">
                  <span>旅行</span>
                </div>
                `,
              link: '/vast/travel-index',
            },
            {
              text: `
                <div style="display: flex; align-items: center; gap: 4px;">
                  <img src="/img/nav/读书.svg" alt="" style="width: 16px; height: 16px;">
                  <span>鸡汤</span>
                </div>
                `,
              link: '/vast/cheesy-index',
            },
          ],
        },  

      ],
    },  


    // // 兴趣
    // {
    //   text: '🎨兴趣',
    //   items: [
    //     {
    //       text: `
    //         <div style="display: flex; align-items: center; gap: 4px;">
    //           <img src="/img/nav/旅行.svg" alt="" style="width: 16px; height: 16px;">
    //           <span>旅行</span>
    //         </div>
    //         `,
    //       link: '/xingqu/travel',
    //     },
    //     {
    //       text: `
    //         <div style="display: flex; align-items: center; gap: 4px;">
    //           <img src="/img/nav/读书.svg" alt="" style="width: 16px; height: 16px;">
    //           <span>读书</span>
    //         </div>
    //         `,
    //       link: '/xingqu/reading',
    //     },
    //   ],
    // },  
    
    
    // 索引
    {
      text: '👏索引',
      items: [
        { text: '📃分类页', link: '/categories' },
        { text: '🔖标签页', link: '/tags' },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/归档.svg" alt="" style="width: 16px; height: 16px;">
              <span>归档页</span>
            </div>
            `,
          link: '/archives',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/清单.svg" alt="" style="width: 16px; height: 16px;">
              <span>清单页</span>
            </div>
            `,
          link: '/articleOverview',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/登录.svg" alt="" style="width: 16px; height: 16px;">
              <span>登录页</span>
            </div>
            `,
          link: '/login',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/风险提示.svg" alt="" style="width: 16px; height: 16px;">
              <span>风险链接提示页</span>
            </div>
            `,
          link: '/risk-link?target=https://onedayxyy.cn/',
        },
      ],
    },  

    // 关于
    {
      text: '🍷关于',
      items: [
        { text: '👋关于我', link: '/about/me' },
        { text: '🎉关于本站', link: '/about/website' },
        { text: '💖友链', link: '/about/friend-links' },
        { text: '🌐网站导航', link: '/about/websites' },          
        { text: "👂留言区", link: "/about/liuyanqu" },
        { text: "💡思考", link: "/about/thouht" },
        { text: "💡情侣相册", link: "/about/love" },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/时间轴.svg" alt="" style="width: 16px; height: 16px;">
              <span>时间轴</span>
            </div>
            `,
          link: '/about/time-line',
        },
        { text: "💡朋友圈", link: "/about/pyq" },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/网站统计.svg" alt="" style="width: 16px; height: 16px;">
              <span>网站统计</span>
            </div>
            `,
          link: 'https://umami.onedayxyy.cn/share/DzS4g85V8JkxsNRk/onedayxyy.cn',
        },
        {
          text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/站点监控.svg" alt="" style="width: 16px; height: 16px;">
              <span>站点监控</span>
            </div>
            `,
          link: 'https://status.onedayxyy.cn/status/monitor',
        },
        { text: "📌我的云盘", link: "https://zdir.onedayxyy.cn/" },

      ],
    },       
  ]
