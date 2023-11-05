
import FlipCard from '@/components/FlipCard'
import Link from 'next/link'
import CONFIG from '../config'

/**
 * 交流频道
 * @returns
 */
export default function TouchMeCard() {
  return (
        <div className={'relative h-28 text-white flex flex-col'}>

            <FlipCard
                className='cursor-pointer lg:p-6 p-4 border rounded-xl bg-[#4f65f0] dark:bg-yellow-600 dark:border-gray-600'
                frontContent={
                    <div className='h-full'>
                        <h2 className='font-[1000] text-3xl'>公众号</h2>
                        <h3 className='pt-2'>快人一步获取最新文章</h3>
                        <div className='absolute left-0 top-0 w-full h-full' style={{ background: 'url(https://jsd.cdn.zzko.cn/gh/88lin/PicX@master/gzh_cover.png) center center no-repeat' }}></div>
                    </div>}
                backContent={<Link href={CONFIG.SOCIAL_CARD_URL}>
                    <div className='font-[1000] text-xl h-full'>
                        {CONFIG.SOCIAL_CARD_TITLE_3}
                    </div>
                </Link>}
            />

        </div>
  )
}
