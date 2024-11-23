import Link from "next/link"
export default function NotFound(){
    return <div>
        <h1>This page can't be found</h1>
        <Link href={'/'}>Go to Home</Link>
    </div>
}