import React from 'react'

const Layout = (props) => {
    return (
        <div className=" container justify-content-center shadow p-3 mb-5 mt-4 bg-body rounded  px-3">
        {props.children}
      </div>
    )
}

export default Layout
