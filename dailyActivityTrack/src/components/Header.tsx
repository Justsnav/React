
import Button from './Button'

function Header() {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-1 '>
            <h1 className='text-3xl font-bold'>Habit Tracker</h1>
            <span className='text-zinc-500 text-sm'>1/1 done today</span>
        </div>
        <div className='flex flex-col gap-1 items-end'>
            <span className='text-zinc-500 text-sm'>Sep 5 - Sep 30</span>
            <div className='flex items-center gap-3'>
                <Button >Prev</Button>
                <Button >Next</Button>
            </div>
        </div>
    </div>
  )
}

export default Header