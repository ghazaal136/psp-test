import { IPost } from '@/apis/posts/get/_model'
import React, { FC } from 'react'

interface IListPage {
  postList: IPost[]
}
const ListPage:FC<IListPage> = ({postList}) => {
  console.log({postList});
  
  return (
    <div>
      
    </div>
  )
}

export default ListPage
