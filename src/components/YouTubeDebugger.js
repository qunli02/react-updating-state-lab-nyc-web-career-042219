// Code YouTubeDebugger Component Here
import React from "react"

class YouTubeDebugger extends React.Component{

state = {
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
}

updateClick = () =>{
  this.setState({
    settings: {...this.state.settings, bitrate: 12}
  })
}

resclikced=() => {
  this.setState({
    settings: {...this.state.settings, video:{...this.state.settings.video,resolution:'720p'}}
  })
}

// this.setState({
//       settings: {
//         ...this.state.settings,
//         video: {
//           ...this.state.settings.video,
//           resolution: '720p'
//         }
//       }
//     })

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.updateClick}>
          bitrate
        </button>

        <button className= "resolution" onClick={this.resclikced}>
          resolution
        </button>
      </div>
    )
  }


}
export default YouTubeDebugger;
