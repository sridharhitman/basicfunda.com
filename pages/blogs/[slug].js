import React from 'react'
import Navbar from '../../components/Navbar'
import {useRouter} from 'next/router'
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    return (
    <div></div>
  )
}

export default slug