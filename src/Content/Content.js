import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
function Content() {
  return (
    <div>
        <div id="content">
            {/* this is the content for menu */}
            <LeftContent/>
            <RightContent/>
            {/* this is a content for item  */}
            <div style={{clear: 'both'}} />
        </div>
    </div>
  )
}

export default Content