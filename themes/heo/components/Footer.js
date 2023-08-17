import React from 'react'
import BLOG from '@/blog.config'
import SocialButton from './SocialButton'
import { AdSlot } from '@/components/GoogleAdsense'
// import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function () {
    if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
      return BLOG.SINCE + '-' + currentYear
    }
    return currentYear
  })()

  return (
        <footer
            className='relative z-10 flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'
        >

            {/* 颜色过度区 */}
            <div id='color-transition' className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'>

            </div>

            {/* 社交按钮 */}
            <div className='w-full h-24'>
                <SocialButton />
            </div>

            <AdSlot type='native'/>
            <br />
#footer-wrap
  #ft
    .ft-item-1
      .t-top
        .t-t-l
          p.ft-t.t-l-t 格言🧬
          .bg-ad
            div
              | 再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨
            .btn-xz-box
              a.btn-xz(href='https://stellarium.org/') 点击开启星辰之旅
        .t-t-r
          p.ft-t.t-l-t 猜你想看💡
          ul.ft-links
            li
              a(href='/posts/eec9786.html') 魔改指南
              a(href='/box/nav/') 网址导航
            li
              a(href='/social/link/') 我的朋友
              a(href='/comments/') 留点什么
            li
              a(href='/personal/about/') 关于作者
              a(href='/archives/') 文章归档
            li
              a(href='/categories/') 文章分类
              a(href='/tags/') 文章标签
            li
              a(href='/box/Gallery/') 我的画廊
              a(href='/personal/bb/') 我的唠叨
            li
              a(href='/site/time/') 建设进程
              a(href='/site/census/') 网站统计
    .ft-item-2
      p.ft-t 推荐友链⌛
      .ft-img-group
        .img-group-item
          a(href='https://www.fomal.cc/' title='Fomalhaut🥝')
            img(src='https://lskypro.acozycotage.net/LightPicture/2022/12/60e5d4e39da7c077.webp' alt='')
        .img-group-item
          a(href='https://tzy1997.com/' title='唐志远の博客')
            img(src='https://lskypro.acozycotage.net/LightPicture/2022/12/4ab83cdce942463b.jpg' alt='')
        .img-group-item
          a(href='https://akilar.top/' title='Akilarの糖果屋')
            img(src='https://lskypro.acozycotage.net/LightPicture/2022/12/6bf1ed05796db59c.jpg' alt='')
        .img-group-item
          a(href='https://butterfly.js.org/' title='Butterfly')
            img(src='https://lskypro.acozycotage.net/LightPicture/2022/12/64cc6a7d508026e1.png' alt='')
        .img-group-item
          a(href='https://anzhiy.cn/' title='安知鱼')
            img(src='https://lskypro.acozycotage.net/LightPicture/2022/12/1b33fef8f5fb7e63.jpg' alt='')
        .img-group-item
          a(href='https://www.acozycotage.net/' title='Acozycotage')
            img(src='https://lskypro.acozycotage.net/LightPicture/2022/12/6a6fe6ebfd19c465.jpg' alt='')
        .img-group-item
          a(href='https://cdn.netdun.net/' title='网盾星球')
            img(src='https://lskypro.acozycotage.net/LightPicture/2022/12/70dee3f9d1ca10f3.webp' alt='')
        .img-group-item
          a(href='javascript:void(0)' title='广告位招租')
            img(src='https://lskypro.acozycotage.net/LightPicture/2022/12/65307a5828af6790.webp' alt='')

  if theme.footer.owner.enable
    - var now = new Date()
    - var nowYear = now.getFullYear()
    if theme.footer.owner.since && theme.footer.owner.since != nowYear
      .copyright
        span!= `<b>&copy;${theme.footer.owner.since} - ${nowYear}</b>`
        span!= `<b>&nbsp;&nbsp;By ${config.author}</b>`
    else
       .copyright
         span!= `<b>&copy;${nowYear}</b>`
         span!= `<b>&nbsp;&nbsp;By ${config.author}</b>`
  if theme.footer.copyright
    .framework-info
      span= _p('footer.framework') + ' '
      a(href='https://hexo.io')= 'Hexo'
      span.footer-separator |
      span= _p('footer.theme') + ' '
      a(href='https://github.com/jerryc127/hexo-theme-butterfly')= 'Butterfly'
  if theme.footer.custom_text
    .footer_custom_text!=`${theme.footer.custom_text}`
    
  #workboard
  
  p#ghbdages
    a.github-badge(target='_blank' href="https://hexo.io/" style='margin-inline:5px' title="博客框架为Hexo_v6.3.0")
      img(src="https://sourcebucket.s3.ladydaily.com/badge/Frame-Hexo-blue.svg" alt='')

    a.github-badge(target='_blank' href="https://butterfly.js.org/" style='margin-inline:5px' title="主题版本Butterfly_v4.3.1")
      img(src="https://sourcebucket.s3.ladydaily.com/badge/Theme-Butterfly-6513df.svg" alt='')

    a.github-badge(target='_blank' href="https://vercel.com/" style='margin-inline:5px' title="本站采用多线部署，主线路托管于Vercel")
      img(src="https://sourcebucket.s3.ladydaily.com/badge/Hosted-Vercel-brightgreen.svg" alt='')

    a.github-badge(target='_blank' href="https://user.51.la/" style='margin-inline:5px' title="本站数据分析得益于51la技术支持")
      img(src="https://sourcebucket.s3.ladydaily.com/badge/Analytics-51la-3db1eb.svg" alt='')

    a.github-badge(target='_blank' href="https://icp.gov.moe/?keyword=20226665" style='margin-inline:5px' title="本站已加入萌ICP豪华套餐，萌ICP备20226665号")
      img(src="https://sourcebucket.s3.ladydaily.com/badge/萌ICP备-20226665-fe1384.svg" alt='')

    a.github-badge(target='_blank' href="https://bitiful.dogecast.com/buckets" style='margin-inline:5px' title="本网站经Service Worker分流至缤纷云对象存储")
      img(src=" https://sourcebucket.s3.ladydaily.com/badge/Bucket-缤纷云-9c62da.svg" alt='')

    a.github-badge(target='_blank' href="https://www.netdun.net/" style='margin-inline:5px' title="本站使用网盾星球提供CDN加速与防护")
      img(src="https://sourcebucket.s3.ladydaily.com/badge/CDN-网盾星球-fff2cc.svg" alt='')

    a.github-badge(target='_blank' href="https://github.com/" style='margin-inline:5px' title="本网站源码由Github提供存储仓库")
      img(src=" https://sourcebucket.s3.ladydaily.com/badge/Source-Github-d021d6.svg" alt='')

            {/* 底部页面信息 */}
            <div id='footer-bottom' className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#30343f]'>

                <div id='footer-bottom-left'>
                   NotionNext {BLOG.VERSION} <i className='fas fa-copyright' /> {`${copyrightDate}`} <i className='mx-1 animate-pulse fas fa-heart' /> <a href={BLOG.LINK} className='underline font-bold  dark:text-gray-300 '>{BLOG.AUTHOR}</a>.
                </div>

            <div id='footer-bottom-right'>
                {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a></>}

                <span className='hidden busuanzi_container_site_pv'>
                    <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
                <span className='pl-2 hidden busuanzi_container_site_uv'>
                    <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>

                {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {BLOG.BIO && <>|</>} {BLOG.BIO}</h1> */}

            </div>
        </div>
        </footer >
  )
}

export default Footer
