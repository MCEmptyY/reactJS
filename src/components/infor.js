import React from 'react'


export default function infor() {

    const infoDetailStaff = (info) => {
        if ( info != null) {
            return (
                <div className='card p-3 m-2'>
                    <div className='card-title'>
                        Họ và tên: {info.staff}
                    </div>
                    <div className='card-text'>Số ngày đã làm thêm: {info.overtime}</div>
                </div>
            )
        }else {
            return null
        }
    }

  return (
      <>
      {infoDetailStaff}
      
      </>
  )
}
