// gatsby-ssr.js

import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="buyMeACoffee"
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="MarcoEidinger"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#f28c18"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>])
}
