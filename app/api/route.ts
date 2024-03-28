import { request } from "http"

let arr=[
    {
        id:1,
        name:'asd'
    },
    {
        id:2,
        name:'asd'
    },
]

function Dt(){
    return arr
}
function Dt1(body:any){
    const bod={id:Math.random()*10**10, name:body}
     arr.push(bod)
     return arr
}
function Dt2(body:any){
    arr=arr.filter(k=>k.id!=body ? k : '')
     return arr
}

export async function GET(request: Request) {
    return Response.json(Dt())
}

export async function POST(request: Request) {
    const body= await request.json()
    return Response.json(Dt1(body))
}
export async function DELETE(request: Request) {
    const body= await request.json()
    return Response.json(Dt2(body))
}