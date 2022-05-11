import { useGlobal } from '@/lib/global'

/**
 *
 * @returns 主题切换
 */
export function ThemeSwitch () {
  const { theme, switchTheme } = useGlobal()
  return (
    <div draggable="true" className="fixed left-4 bottom-12 text-white bg-black rounded z-50">
      <div className="p-2 cursor-pointer" onClick={switchTheme}>
        <i className="fas fa-palette mr-1" /> {theme} <i className='fas fa-sync text-xs'/>
      </div>
    </div>
  )
}
