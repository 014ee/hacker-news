import React from "react";
import {
  IconBy,
  IconTime,
  IconComment,
} from '../../Assets/Icons';


export const StoryInfo = ({by, time, comment}) => {
  return(
    <StoryInfo>
      <StoryInfoItem><StoryInfoBy /></StoryInfoItem>
    </StoryInfo>
  )
}

export const StoryInfoItem= ({by, time, comment}) => {
return(<StoryInfoItem />)
}

export const StoryInfoItem= ({by, time, comment}) => {
  return(<StoryInfoItem></StoryInfoItem>)
}

export const StoryInfoBy = ({by, time, comment}) => (<IconBy /> {by});
export const StoryInfoTime = ({by, time, comment}) => (<IconTime /> {time});
export const StoryInfoComment = ({by, time, comment}) => (<IconComment /> {descendants});

