import * as React from "react";
const Component = React.forwardRef((props, ref) => {
  return (
    <video ref={ref} width="320" height="176" controls>
      <source
        src="https://res.cloudinary.com/daintu6ky/video/upload/v1573070866/Screen_Recording_2019-11-06_at_4.14.52_PM.mp4"
        type="video/mp4"
      />
    </video>
  );
});

export default Component;
