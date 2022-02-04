import {useRouter} from "next/router"

const Details = () => {
    const router = useRouter();
    const newId = router.query.details;
    console.log(newId)

    return <h1>this is Details page</h1>
}

export default Details;