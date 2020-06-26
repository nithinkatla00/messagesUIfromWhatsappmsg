import Data from '../data/sampledata.json';
export const arr=[]
    for(const date in Data){
        const res = {
            date : date,
            messages : []
        }
        for(const dat in Data[date]){
            if(res.messages === null){
                res.messages = [[...Data[date][dat]],dat] 
            }
            else{
                res.messages = [...res.messages,[[...Data[date][dat]],dat]] 
            }
        }
        arr.push(res)
    }
    export const data=arr.reverse()
    console.log(data)