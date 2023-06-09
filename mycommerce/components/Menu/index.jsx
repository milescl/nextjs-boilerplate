
import { Bars3Icon } from '@heroicons/react/24/outline'
import { toggleMenu } from '@/store/features/homeSlice'
import { useDispatch } from 'react-redux'

export default function Example() {
  const dispatch = useDispatch();
  return (
    <div className="top-16 w-full max-w-sm px-4" onClick={()=>{dispatch(toggleMenu())}}>
        <div className='flex flex-col centered-middle m-2'>
          <div className='centered-middle p-2 rounded-full bg-green-200 hover:bg-pink-100'>
            <Bars3Icon className="w-6" />
          </div>
          <span>Menu</span>
        </div>
    </div>
  )
}