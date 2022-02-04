import Link from 'next/link';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
        <h1>HOme product</h1>
        <li>
        <Link href='/new/first-product'>
         this my first product
        </Link>
        </li>
        </Fragment>
    )
}

export default Home;
