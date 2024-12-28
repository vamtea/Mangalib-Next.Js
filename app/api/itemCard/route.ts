import type { GetServerSideProps } from 'next';


export async function GetServerSideProps(context: any) {
    const {id} = context.params

    const res = await fetch(`http://localhost:3000/api/mangaItem/${id}`)
    const item = await res.json()

    return { props: {item}}
}