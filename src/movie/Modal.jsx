import React, { Component } from 'react'
import ReactPlayer from "react-player";
class Modal extends Component {

    render() { 
        console.log(this.props);
        var trailerData = this.props.data;
        return (
            <div class="modal d-block" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" onClick={this.props.handleClose} class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <ReactPlayer
              className="react-player"
              url={trailerData.TrailerURL}
              playing
            />
                </div>
                {/* <div class="modal-footer"> */}
                  {/* <button type="button" onClick={this.props.handleClose} class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                  {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        )
    }
}
export default Modal;