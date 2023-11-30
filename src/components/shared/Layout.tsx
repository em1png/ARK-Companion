import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <section className='flex flex-col w-full'>
            <Topbar />
            <Outlet />
        </section>
    )
}

export default Layout