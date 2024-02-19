
import FlipCard from '@/components/FlipCard'
import Link from 'next/link'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
    return <></>
  }
  return (
        <div className={'relative h-28 text-white flex flex-col'}>

            <FlipCard
                className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-gray-100 dark:bg-yellow-600 dark:border-gray-600'
                frontContent={
                    <div className='h-full'>
                        <h2 className='font-[1000] text-3xl'>公众号</h2>
                        <h3 className='pt-2'>快人一步获取最新文章</h3>
                        <div className='absolute left-0 top-0 w-full h-full' style={{ background: 'url(https://www.jsdelivr.ren/gh/88lin/PicX@master/gzh_cover.png) center center no-repeat' }}></div>
                    </div>}
                backContent={<Link href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
                    <div className='font-[1000] text-xl h-full'>
                        {siteConfig('HEO_SOCIAL_CARD_TITLE_3', null, CONFIG)}
                    </div>
                </Link>}
            />

        </div>
  )
}
