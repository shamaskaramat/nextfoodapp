"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'
const Menu = () => {
    const [open, setOpen] = useState(false)
    const links = [
        { id: 1, title: "Homepage", url: "/" },
        { id: 2, title: "Menu", url: "/menu" },
        { id: 3, title: "Working Hours", url: "/" },
        { id: 4, title: "Contact", url: "/" },
    ];
    const user = false;
    return (
        <>
            <div>
                {!open ? (<Image src="/open.png" alt="" height={20} width={20} onClick={() => setOpen(true)} />)
                    :
                    (<Image src="/close.png" alt="" height={20} width={20} onClick={() => setOpen(false)} />)}
            </div>
            {open &&
                <div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-center gap-8 text-3xl z-10 '>
                    {links.map((item) => (
                        <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                    ))}
                    {!user ? (<Link href="/login" onClick={() => setOpen(false)}>Login</Link>) :
                        (<Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>)}
                    <Link href="/cart" onClick={() => setOpen(false)}>
                        <CartIcon />
                    </Link>
                </div>}
        </>
    )
}

export default Menu