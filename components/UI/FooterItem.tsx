
import React from 'react'

interface Props{
    text: string
}

const FooterItem:React.FC<Props> = ({text}) => {
  return (
    <div className='flex items-center gap-2 cursor-pointer hover:text-[var(--btn-color)] transition-all'>
        <span>-</span>
        <span>{text}</span>
    </div>
  )
}

export default FooterItem