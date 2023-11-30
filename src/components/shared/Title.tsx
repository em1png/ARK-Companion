import { FC, ReactNode } from "react"

type TitleType = {
    title: string;
    children: ReactNode;
}

const Title: FC<TitleType> = ({ title, children }) => {
    return (
        <div className='flex flex-col items-start justify-center py-5'>
            <h2 className='h1-bold'>{title}</h2>
            <p className='small-regular text-neutral-300'>{children}</p>
        </div>
    )
}

export default Title